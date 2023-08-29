//Newsletter model
import mongoose from "mongoose";

const newsletterSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// next js model export prevent overwrite error
export const Newsletter =
  mongoose.models.Newsletter || mongoose.model("Newsletter", newsletterSchema);
