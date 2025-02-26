import { NextResponse } from "next/server"
import connectDB from "@/lib/db"
import { Incident } from "@/models/incident"
import { verifyToken } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    await connectDB()
    const token = await verifyToken(request as any)

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const type = formData.get("type")
    const description = formData.get("description")
    const location = JSON.parse(formData.get("location") as string)
    const audioBlob = formData.get("audio") as Blob

    let audioUrl = ""
    if (audioBlob) {
      // In a real application, you would upload this to a storage service
      // and store the URL in the database
      audioUrl = "temp-audio-url"
    }

    const incident = await Incident.create({
      type,
      description,
      location,
      audioRecording: audioUrl,
      reportedBy: token.id,
      status: "active",
      priority: "high",
    })

    return NextResponse.json({ incident })
  } catch (error) {
    console.error("Incident creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    await connectDB()
    const token = await verifyToken(request as any)

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const type = searchParams.get("type")

    const query: any = {}
    if (status) query.status = status
    if (type) query.type = type

    const incidents = await Incident.find(query)
      .populate("reportedBy", "name email")
      .populate("assignedTo", "name email")
      .sort({ createdAt: -1 })

    return NextResponse.json({ incidents })
  } catch (error) {
    console.error("Incident fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

