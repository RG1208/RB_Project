import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Clock, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mission Section */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About ResQ Bridge</h1>
        <p className="text-xl text-muted-foreground">
          Connecting communities with emergency responders for faster, more efficient emergency response
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader className="text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-4xl">500+</CardTitle>
            <CardDescription>Emergencies Handled</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-4xl">200+</CardTitle>
            <CardDescription>Active Volunteers</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-4xl">5min</CardTitle>
            <CardDescription>Average Response Time</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-4xl">98%</CardTitle>
            <CardDescription>Success Rate</CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Info Sections */}
      <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              ResQ Bridge aims to revolutionize emergency response by creating a seamless connection between those in
              need and those who can help. We believe that every second counts in emergencies, and our platform is
              designed to minimize response times while maximizing the effectiveness of emergency services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>1. Citizens report emergencies through our platform</li>
              <li>2. Nearby volunteers and emergency services are instantly notified</li>
              <li>3. Real-time updates about the incident</li>
              <li>4. Data analytics help improve response times</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>For Volunteers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Join our network of dedicated volunteers and make a difference in our community. We provide
              training, support, and the tools you need to respond effectively to the emergencies in your area. Whether
              you're a medical professional, firefighter, or concerned citizen, there's a place for you in our network.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>For Communities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              ResQ Bridge empowers communities by providing a reliable, fast, and efficient emergency response system.
              ResQ Bridge ensures that help is always within reach. Our community stands ready to act with courage and empathy.
              Join our community and be the bridge to hope and help.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

