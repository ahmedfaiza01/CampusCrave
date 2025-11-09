import express from "express";
import Subscription from "../modals/subscriptionModel.js";

const router = express.Router();

// 🟢 User submits a new subscription
router.post("/", async (req, res) => {
  try {
    const subscription = new Subscription(req.body);
    await subscription.save();
    console.log("New subscription saved:", subscription); // ✅ Debug
    res.status(201).json({ message: "Subscription created successfully", subscription });
  } catch (error) {
    console.error("Error saving subscription:", error);
    res.status(400).json({ error: error.message });
  }
});

// 🟢 Admin: get all subscriptions
router.get("/", async (req, res) => {
  try {
    const subs = await Subscription.find().sort({ createdAt: -1 });
    console.log("Fetched subscriptions:", subs); // ✅ Debug
    res.json(subs);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ error: error.message });
  }
});

// 🟢 Admin: update subscription status
router.put("/:id", async (req, res) => {
  try {
    const sub = await Subscription.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    console.log("Updated subscription:", sub); // ✅ Debug
    res.json(sub);
  } catch (error) {
    console.error("Error updating subscription:", error);
    res.status(400).json({ error: error.message });
  }
});

export default router;
