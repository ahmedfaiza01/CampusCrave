import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MealPlans = () => {
  const [subscribedPlan, setSubscribedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    { id: 1, name: "Breakfast Plan", price: 250, description: "Daily breakfast: bread, eggs, milk/tea.", meals: "5 breakfasts per week" },
    { id: 2, name: "Lunch Plan", price: 750, description: "Daily lunch: rice, curry, dal, vegetables.", meals: "5 lunches per week" },
    { id: 3, name: "Dinner Plan", price: 1000, description: "Daily dinner: khichuri/polao with chicken/beef/fish.", meals: "5 dinners per week" },
    { id: 4, name: "Full Day Combo", price: 3500, description: "Breakfast + Lunch + Dinner for a week.", meals: "15 meals per week" },
  ];

  const handleSubscribe = (plan) => {
    setSubscribedPlan(plan);
    localStorage.setItem("subscription", JSON.stringify(plan));
    navigate("/checkout"); // redirect to checkout
  };

  useEffect(() => {
    const savedPlan = localStorage.getItem("subscription");
    if (savedPlan) setSubscribedPlan(JSON.parse(savedPlan));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-amber-600">
        🍽️ Choose Your Meal Subscription
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border p-6 rounded-2xl shadow-md bg-[#2D1B0E]/90 text-white`}
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-gray-300">{plan.description}</p>
            <p className="text-sm italic text-gray-400">{plan.meals}</p>
            <p className="font-bold mt-2 text-amber-400">৳{plan.price}</p>

            <button
              className="mt-4 w-full bg-amber-600 hover:bg-amber-500 text-white py-2 px-4 rounded-xl"
              onClick={() => handleSubscribe(plan)}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlans;
