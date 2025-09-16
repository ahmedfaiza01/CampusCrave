import React, { useState } from 'react'
import { useCart } from '../../CartContext/CartContext'

const categories = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Mexican',
  'Italian',
  'Desserts',
  'Drinks'
]

const OurHomeMenu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const { cartItem, addToCart, removeFromCart } = useCart()

  return (
    <div className="bg-gradient-to-br from-[#1a120b] via-[#2a1e10] to-[#3e2b1b] min-h-screen py-16 px-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200">
          <span className="font-dancingscript block text-5xl md:text-7xl sm:text-6xl mb-2">
            Our Exquisite Menu
          </span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-cinzel mt-4 text-amber-100/80">
            A Symphony of Flavours
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full border-2 transition-all duration-300 transform font-cinzel text-sm sm:text-lg tracking-widest backdrop-blur-sm
              ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-900/80 to-amber-700/80 border-amber-800 scale-105 shadow-xl shadow-amber-900/30'
                  : 'bg-amber-900/20 border-amber-800/30 text-amber-100/80 hover:bg-amber-800/40 hover:scale-95'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurHomeMenu
