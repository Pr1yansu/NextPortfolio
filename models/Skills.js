import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a skill name"],
  },
  description: {
    type: String,
    required: [true, "Please enter a skill description"],
  },
  percentage: {
    type: Number,
    required: [true, "Please enter a skill percentage"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// next js model export prevent overwrite error
export const Skills =
  mongoose.models.Skill || mongoose.model("Skill", skillSchema);
