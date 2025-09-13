import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [plan, setPlan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedPlan = localStorage.getItem("subscription");
    if (savedPlan) {
      setPlan(JSON.parse(savedPlan));
    } else {
      navigate("/mealplans"); // if no plan selected, redirect back
    }
  }, [navigate]);

  if (!plan) return null;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-amber-600 mb-6">
        ✅ Checkout
      </h2>

      <div className="border p-6 rounded-xl shadow-md bg-[#2D1B0E]/90 text-white">
        <h3 className="text-2xl font-semibold">{plan.name}</h3>
        <p className="text-gray-300">{plan.description}</p>
        <p className="text-sm italic text-gray-400">{plan.meals}</p>
        <p className="text-xl font-bold mt-4 text-amber-400">৳{plan.price}</p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-gray-600 hover:bg-gray-500 px-6 py-2 rounded-lg text-white"
          onClick={() => navigate("/mealplans")}
        >
          Back
        </button>
        <button
          className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg text-white"
          onClick={() => alert("🎉 Payment successful! Your meal plan is active.")}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
