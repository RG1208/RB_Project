"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SOSPage() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [audioChunks, setAudioChunks] = useState<Blob[]>([])

  useEffect(() => {
    // Get current location as soon as the page loads
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          setLoading(false)
        },
        (error) => {
          setError("Unable to get your location. Please enable location services.")
          setLoading(false)
        },
      )
    } else {
      setError("Geolocation is not supported by your browser.")
      setLoading(false)
    }

    // Ask for microphone access and start recording automatically
    const startAutoRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        const recorder = new MediaRecorder(stream)
        const chunks: Blob[] = []

        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunks.push(e.data)
          }
        }

        recorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: "audio/wav" })
          setAudioChunks([...audioChunks, audioBlob])
          console.log("Recording stopped, audio blob created")
        }

        recorder.start()
        setTimeout(() => {
          recorder.stop()
          stream.getTracks().forEach((track) => track.stop())
        }, 60000) // Stop recording after 1 minute
      } catch (err) {
        setError("Unable to access microphone. Please ensure microphone permissions are enabled.")
      }
    }

    startAutoRecording()
  }, [])

  const handleSubmit = async () => {
    console.log("Submitting emergency with location:", location)
    alert("Emergency reported successfully!")
  }

  if (loading) {
    return (
      <div className="container max-w-md mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Getting your location...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive text-center text-2xl">SOS Emergency</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {location && (
            <div className="text-sm text-muted-foreground">
              <p>Location detected:</p>
              <p>Latitude: {location.lat.toFixed(6)}</p>
              <p>Longitude: {location.lng.toFixed(6)}</p>
            </div>
          )}

          <Select defaultValue="medical">
            <SelectTrigger>
              <SelectValue placeholder="Select emergency type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medical">Medical Emergency</SelectItem>
              <SelectItem value="fire">Fire</SelectItem>
              <SelectItem value="security">Security Threat</SelectItem>
              <SelectItem value="accident">Accident</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={handleSubmit} className="w-full bg-destructive hover:bg-destructive/90" size="lg">
            Send SOS
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
