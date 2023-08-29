import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a project name"],
  },
  description: {
    type: String,
    required: [true, "Please enter a project description"],
  },
  image: {
    type: String,
    required: [true, "Please enter a project image"],
  },
  tags: {
    type: Array,
    required: [true, "Please enter a project tags"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// next js model export prevent overwrite error
export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
