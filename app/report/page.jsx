"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 0,
  lng: 0,
}

export default function ReportPage() {
  const [location, setLocation] = useState(center)
  const [address, setAddress] = useState("")
  const form = useForm()
  const [google, setGoogle] = useState(null)

  const [mediaRecorder, setMediaRecorder] = useState(null)
  const [audioChunks, setAudioChunks] = useState([])
  const [isRecording, setIsRecording] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
  }, [])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      const chunks = []

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
      setMediaRecorder(recorder)
      setIsRecording(true)
    } catch (err) {
      setError("Unable to access microphone. Please ensure microphone permissions are enabled.")
    }
  }

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop()
      mediaRecorder.stream.getTracks().forEach((track) => track.stop())
      setIsRecording(false)
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setLocation(newLocation)

          if (google) {
            const geocoder = new google.maps.Geocoder()
            geocoder.geocode({ location: newLocation }, (results, status) => {
              if (status === "OK" && results[0]) {
                setAddress(results[0].formatted_address)
              }
            })
          }

          setLoading(false)
        },
        (error) => {
          setError("Unable to get your location. Please enable location services.")
          setLoading(false)
        }
      )
    } else {
      setError("Geolocation is not supported by your browser.")
      setLoading(false)
    }
  }, [google])

  const onMapClick = (e) => {
    const newLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    }
    setLocation(newLocation)

    if (google) {
      const geocoder = new google.maps.Geocoder()
      geocoder.geocode({ location: newLocation }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            setAddress(results[0].formatted_address)
          }
        }
      })
    }
  }

  function onSubmit(values) {
    if (location.lat === 0 && location.lng === 0) {
      alert("Location not detected. Please enable location services or select a valid location on the map.")
      return
    }

    const submitData = {
      ...values,
      location: {
        address,
        coordinates: location,
      },
      audioReports: audioChunks,
    }
    console.log(submitData)
    alert("Emergency reported successfully!")
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Report an Emergency</CardTitle>
          <CardDescription>Please provide accurate information to help us respond quickly.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Emergency Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select emergency type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="medical">Medical Emergency</SelectItem>
                        <SelectItem value="fire">Fire</SelectItem>
                        <SelectItem value="security">Security Threat</SelectItem>
                        <SelectItem value="accident">Accident</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {location && (
              <div className="text-sm text-muted-foreground">
              <p>Location detected:</p>
              <p>Latitude: {location.lat.toFixed(6)}</p>
              <p>Longitude: {location.lng.toFixed(6)}</p>
              </div>
              )}

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the emergency situation" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button onClick={isRecording ? stopRecording : startRecording} type="button" className="w-full">
                {isRecording ? "Stop Recording" : "Start Recording"}
              </Button>

              <Button type="submit" className="w-full">
                Report Emergency
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
