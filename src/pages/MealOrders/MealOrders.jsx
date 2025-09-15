import React from "react";
import DailyMealCard from "../../components/DailyMealCard";

const MealOrders = () => {
  const todayOrders = [
    { id: "ORD1001", mealType: "Breakfast", menu: "Bread, Omelette, Milk/Tea", time: "8:00 AM - 9:00 AM" },
    { id: "ORD1002", mealType: "Lunch", menu: "Rice, Chicken Curry, Dal, Vegetables, Salad", time: "1:00 PM - 2:00 PM" },
    { id: "ORD1003", mealType: "Dinner", menu: "Chapati, Paneer Masala, Rice, Dessert", time: "8:00 PM - 9:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-amber-100 p-6 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold text-amber-800 mb-4">
        Student Daily Meal Orders
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {todayOrders.map((order) => (
          <DailyMealCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default MealOrders;
