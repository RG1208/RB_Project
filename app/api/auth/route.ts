import { NextResponse } from "next/server"
import connectDB from "@/lib/db"
import { User } from "@/models/user"
import { comparePasswords, createToken, hashPassword } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    await connectDB()
    const { action, email, password, name } = await request.json()

    if (action === "login") {
      const user = await User.findOne({ email })
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
      }

      const isValid = await comparePasswords(password, user.password)
      if (!isValid) {
        return NextResponse.json({ error: "Invalid password" }, { status: 401 })
      }

      const token = await createToken({
        id: user._id,
        email: user.email,
        role: user.role,
      })

      return NextResponse.json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      })
    }

    if (action === "register") {
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return NextResponse.json({ error: "Email already exists" }, { status: 400 })
      }

      const hashedPassword = await hashPassword(password)
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      })

      const token = await createToken({
        id: user._id,
        email: user.email,
        role: user.role,
      })

      return NextResponse.json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("Auth error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

