// "use client"
// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// export default function Hero({ height = "h-[60vh]", slides }) {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide()
//     }, 5000)

//     // Clean up interval on component unmount
//     return () => {
//       clearInterval(interval)
//     }
//   }, []) // Empty dependency array

//   return (
//     <div className={`relative ${height} bg-gray-900 overflow-hidden`}>
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: slide.img,
//           filter: "brightness(0.5)",
//         }}
//       ></div>

//       {/* Text Carousel */}
//       <div className="relative h-full flex items-center justify-center text-white text-center px-4">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
//             <p className="text-xl md:text-2xl max-w-2xl">{slide.subtitle}</p>
//           </div>
//         ))}
//       </div>

//       {/* Controls */}
//       <div className="absolute bottom-8 left-8 flex space-x-2">
//         <button
//           onClick={prevSlide}
//           className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   )
// }


"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero({ height = "h-[60vh]", slides }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    // Clean up interval on component unmount
    return () => {
      clearInterval(interval)
    }
  }, []) // Empty dependency array

  return (
    <div className={`relative ${height} bg-gray-900 overflow-hidden`}>
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={`bg-${index}`}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${slide.backgroundImage || "/placeholder.svg?height=1080&width=1920"}')`,
            filter: "brightness(0.5)",
          }}
        ></div>
      ))}

      {/* Text Carousel */}
      <div className="relative h-full flex items-center justify-center text-white text-center px-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl md:text-2xl max-w-2xl">{slide.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-8 flex space-x-2">
        <button
          onClick={prevSlide}
          className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
