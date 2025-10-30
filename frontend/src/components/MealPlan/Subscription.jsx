import React, { useState } from 'react'
import './Subscription.css'
import { cardData } from '../../assets/dummydata'

const durations = ['1 Week', '2 Weeks', '1 Month', '3 Months']

const mealPlans = [
  {
    id: 1,
    name: 'Basic Plan',
    description: `Perfect for light eaters — includes 2 meals per day (Lunch & Dinner). 
Enjoy hearty dishes like Chicken Caesar Salad, Red Chicken Curry, or Grilled Ribeye Steak for dinner — 
all balanced with wholesome sides like Quinoa Salad and Stir-Fried Vegetables.`,
    price: 2999,
    image: cardData[0].image,
  },
  {
    id: 2,
    name: 'Standard Plan',
    description: `Balanced choice — 3 meals per day (Breakfast, Lunch & Dinner). 
Start your day with a healthy breakfast like Avocado Toast, Pancakes with Maple Syrup, or Sunny Oats. 
For lunch, dig into delicious options like Veggie Wrap or Grilled Salmon Bowl, 
and finish your day with comfort favorites like Roast Chicken or Pesto Pasta with Shrimp.`,
    price: 4499,
    image: cardData[1].image,
  },
  {
    id: 3,
    name: 'Premium Plan',
    description: `Best for fitness lovers — 4 nutritious meals per day (Breakfast, Lunch, Dinner & Snack). 
Your day starts with fresh Fruit Smoothie Bowls or Banana Toast, followed by energizing lunches like Chicken Caesar Salad. 
Dinner features gourmet options such as Garlic Butter Lamb Chops or Salmon Fillet, 
and you’ll also enjoy healthy snacks like Fruit Waffles, Granola Parfaits, or Green Tea Smoothies.`,
    price: 5999,
    image: cardData[2].image,
  },
  {
    id: 4,
    name: 'Family Plan',
    description: `Ideal for small families — provides 3 complete meals per day for up to 3 people. 
Enjoy crowd-favorite dishes like Chicken Chargha, Desi Chowmein, or Kebab Platters, 
served with sides and desserts such as Fruit Custard or Waffles.`,
    price: 9999,
    image: cardData[3]?.image || cardData[0].image,
  },
  {
    id: 5,
    name: 'Student Saver Plan',
    description: `Affordable and delicious meals designed for students! 
Includes 2 meals per day (Lunch & Dinner) with rotating dishes like Spicy Chicken Wraps, 
Veggie Fried Rice, and Desi Chowmein — perfect for busy study days.`,
    price: 2499,
    image: cardData[4]?.image || cardData[0].image,
  },
  {
    id: 6,
    name: 'Luxury Gourmet Plan',
    description: `For those who crave elegance — 5-star restaurant–style meals delivered daily. 
Includes 4 premium courses: appetizer, main, dessert, and beverage. 
Signature dishes include Steak Au Poivre, Grilled Prawns, Cheesecake Delight, and Sparkling Mocktails.`,
    price: 8499,
    image: cardData[5]?.image || cardData[1].image,
  },
]

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    duration: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || []

    subscriptions.push({
      id: Date.now(),
      ...formData,
      plan: selectedPlan.name,
      price: selectedPlan.price,
      status: 'Pending',
    })

    localStorage.setItem('subscriptions', JSON.stringify(subscriptions))
    alert(`Subscription request for ${selectedPlan.name} sent successfully!`)
    setFormData({ name: '', email: '', duration: '' })
    setSelectedPlan(null)
  }

  return (
    <div className="bg-gradient-to-br from-[#1a120b] via-[#2a1e10] to-[#3e2b1b] min-h-screen py-16 px-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12 text-amber-200 font-dancingscript text-5xl">
          Meal Subscriptions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {mealPlans.map((plan) => (
            <div key={plan.id} className="meal-card">
              <img src={plan.image} alt={plan.name} />
              <h3>{plan.name}</h3>
              <p className="description-text">{plan.description}</p>
              <p className="price">Tk {plan.price}</p>
              <button onClick={() => handleSubscribe(plan)}>Subscribe Now</button>
            </div>
          ))}
        </div>

        {/* ===== Modal ===== */}
        {selectedPlan && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#2a1e10] p-8 rounded-2xl border border-amber-800/40 w-[90%] max-w-md text-center relative">
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-2 right-4 text-amber-200 hover:text-amber-400 text-xl"
              >
                ✕
              </button>
              <h3 className="text-2xl font-dancingscript text-amber-100 mb-4">
                Subscribe to {selectedPlan.name}
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="p-2 rounded-md bg-amber-100/10 text-amber-100 placeholder-amber-300/50 border border-amber-800/50"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="p-2 rounded-md bg-amber-100/10 text-amber-100 placeholder-amber-300/50 border border-amber-800/50"
                  required
                />
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="p-2 rounded-md bg-amber-100/10 text-amber-100 border border-amber-800/50"
                >
                  <option value="">Select Duration</option>
                  {durations.map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="mt-2 bg-gradient-to-r from-amber-700 to-amber-900 text-white py-2 rounded-full hover:scale-105 transition"
                >
                  Confirm Subscription
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Subscription
