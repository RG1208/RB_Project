import mongoose from "mongoose"

const incidentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["medical", "fire", "security", "accident", "other"],
  },
  location: {
    coordinates: {
      lat: Number,
      lng: Number,
    },
    address: String,
  },
  description: String,
  status: {
    type: String,
    enum: ["active", "in_progress", "resolved"],
    default: "active",
  },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    default: "medium",
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  audioRecording: {
    type: String, // Store the audio file path or URL
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export const Incident = mongoose.models.Incident || mongoose.model("Incident", incidentSchema)

