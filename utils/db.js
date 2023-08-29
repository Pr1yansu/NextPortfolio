import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};
