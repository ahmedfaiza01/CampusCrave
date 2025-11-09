import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, // e.g. Chef, Waiter, Manager
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  salary: { type: Number, required: true },
  imageUrl: { type: String },
}, { timestamps: true });

export default mongoose.model('Staff', staffSchema);
