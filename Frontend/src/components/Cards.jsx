import React from 'react'

function Cards({ item, isDark }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className={`rounded-lg overflow-hidden shadow-xl hover:scale-105 duration-200 ${isDark ? 'bg-slate-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="h-48 overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-pink-500 text-white">{item.category}</span>
          </div>
          <p className="text-sm mt-2 line-clamp-2">{item.title}</p>
          <div className="flex items-center justify-between mt-4">
            <div className={`text-sm font-medium ${isDark ? 'text-white' : ''}`}>${item.price}</div>
            <button className="px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
