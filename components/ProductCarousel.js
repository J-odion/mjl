"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ProductCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(2) // Center item

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    // Clean up interval on component unmount
    return () => {
      clearInterval(interval)
    }
  }, []) // Empty dependency array

  // Calculate indices for all visible items
  const getVisibleIndices = () => {
    const indices = []
    const totalItems = items.length

    // Center item
    indices.push(activeIndex)

    // Left items (2)
    for (let i = 1; i <= 2; i++) {
      indices.push((activeIndex - i + totalItems) % totalItems)
    }

    // Right items (2)
    for (let i = 1; i <= 2; i++) {
      indices.push((activeIndex + i) % totalItems)
    }

    return indices
  }

  const visibleIndices = getVisibleIndices()

  // Get position class based on relative position to active index
  const getPositionClass = (index) => {
    const position = visibleIndices.indexOf(index)

    switch (position) {
      case 0: // Center
        return "z-30 scale-100 opacity-100"
      case 1: // First right
        return "z-20 scale-90 opacity-80 translate-x-[50%]"
      case 2: // Second right
        return "z-10 scale-80 opacity-60 translate-x-[90%]"
      case 3: // First left
        return "z-20 scale-90 opacity-80 -translate-x-[50%]"
      case 4: // Second left
        return "z-10 scale-80 opacity-60 -translate-x-[90%]"
      default:
        return "hidden"
    }
  }

  return (
    <div className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-in-out ${
              visibleIndices.includes(index) ? getPositionClass(index) : "hidden"
            }`}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={300}
                height={300}
                className="object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-700">₦{item.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors z-40"
        aria-label="Previous item"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors z-40"
        aria-label="Next item"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
