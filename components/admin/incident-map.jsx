"use client"

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 0,
  lng: 0,
}

const incidents = [
  { id: 1, position: { lat: 0.01, lng: 0.01 }, type: "Medical" },
  { id: 2, position: { lat: -0.01, lng: -0.01 }, type: "Fire" },
  { id: 3, position: { lat: 0.01, lng: -0.01 }, type: "Security" },
]

export function IncidentMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
        {incidents.map((incident) => (
          <Marker key={incident.id} position={incident.position} title={incident.type} />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

