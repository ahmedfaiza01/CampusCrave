import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  unit: { type: String, default: "pcs" }, // e.g. kg, pcs, L
  status: {
    type: String,
    enum: ["Available", "Low Stock", "Out of Stock"],
    default: "Available",
  },
  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model("Inventory", inventorySchema);
