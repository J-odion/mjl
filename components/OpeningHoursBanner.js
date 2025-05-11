"use client"
import { useEffect, useRef } from "react"

export default function OpeningHoursBanner() {
  const bannerRef = useRef(null)

  useEffect(() => {
    const banner = bannerRef.current
    let direction = 1
    let position = 0

    const animate = () => {
      if (banner) {
        if (position > 100) direction = -1
        if (position < 0) direction = 1

        position += 0.5 * direction
        banner.style.transform = `translateX(${position}px)`
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-yellow-500 text-black py-3 font-bold">
      <div ref={bannerRef} className="whitespace-nowrap text-center text-lg">
        OPENING HOURS: Monday - Friday: 9AM - 9PM | Saturday - Sunday: 10AM - 8PM
      </div>
    </div>
  )
}
