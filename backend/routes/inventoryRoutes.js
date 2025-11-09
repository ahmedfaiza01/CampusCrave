import express from "express";
import Inventory from "../modals/inventoryModel.js";

const router = express.Router();

// ✅ Add a new item
router.post("/", async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    await newItem.save();
    res.status(201).json({ message: "Item added successfully", item: newItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Get all inventory items
router.get("/", async (req, res) => {
  try {
    const items = await Inventory.find().sort({ lastUpdated: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update an existing item (quantity/status)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Inventory.findByIdAndUpdate(
      req.params.id,
      { ...req.body, lastUpdated: new Date() },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
