import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, FileHeart, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Emergency Response Made <span className="text-primary">Simple</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connecting citizens with emergency responders and volunteers in real-time for faster, more efficient emergency
          response.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="destructive" size="lg" asChild>
            <Link href="/sos">
              <AlertCircle className="mr-2 h-4 w-4" />
              SOS Emergency
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/report">Report Emergency</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/volunteer">Become a Volunteer</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">How ResQ Bridge Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <AlertCircle className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Report Incidents</CardTitle>
              <CardDescription>Quickly report emergencies with location and details</CardDescription>
            </CardHeader>
            <CardContent>
              Submit emergency reports with just a few clicks. Add photos and location data for better response.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Connect with Help</CardTitle>
              <CardDescription>Automatically notify nearby volunteers and authorities</CardDescription>
            </CardHeader>
            <CardContent>
              Our system instantly alerts qualified responders in your area for quick assistance.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Track Progress</CardTitle>
              <CardDescription>Real-time updates on emergency response</CardDescription>
            </CardHeader>
            <CardContent>Stay informed with live updates on the status of your reported emergency.</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileHeart className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Save Lives</CardTitle>
              <CardDescription>Make a difference in your community</CardDescription>
            </CardHeader>
            <CardContent>Join our network of volunteers and help create safer communities together.</CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Ready to Help?</CardTitle>
            <CardDescription>Join our network of emergency responders and volunteers</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/register">Register Now</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

