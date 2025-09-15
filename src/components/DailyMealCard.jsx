import React from "react";
import { FaUtensils } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { QRCodeCanvas } from "qrcode.react"; // <-- named import

const DailyMealCard = ({ order }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg border-2 border-amber-400 overflow-hidden">
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 p-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">🍽️ Daily Meal Card</h2>
        <FaUtensils className="text-2xl text-white" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{order.mealType}</h3>
        <p className="text-sm text-gray-500">Order ID: {order.id}</p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 shadow-inner mt-4">
          <p className="text-gray-700 font-medium">{order.menu}</p>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
            <FiClock className="text-amber-500" /> Pickup Time: {order.time}
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <QRCodeCanvas
            value={`MealOrder-${order.id}`}
            size={120}
            fgColor="#b45309"
            bgColor="#fef3c7"
          />
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Show this card at the counter to collect your meal
        </p>
      </div>
    </div>
  );
};

export default DailyMealCard;
