import React from 'react'

const RecentNews = () => {
  return (
    <div className="px-48">
      <h2 class="text-4xl py-20 font-bold text-gray-800">Título da Seção</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          className="flex items-center justify-center h-32 bg-blue-500 text-white font-bold rounded-md"
        >
          Item {i + 1}
        </div>
      ))}
    </div>
  </div>
  )
}

export default RecentNews
