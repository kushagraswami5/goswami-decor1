import React from 'react'

export default function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto mt-[-1.5rem] mb-8 px-4">
      <input
        type="text"
        placeholder="Search for your event type..."
        className="w-full px-4 py-3 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  )
}