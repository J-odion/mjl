import Hero from "@/components/Hero"
import OpeningHoursBanner from "@/components/OpeningHoursBanner"
import ProductCarousel from "@/components/ProductCarousel"
import Link from "next/link"

export default function Home() {
  const fashionItems = [
    { id: 1, name: "Summer Dress", price: 89.99, image: "/9.jpg" },
    { id: 2, name: "Casual Jeans", price: 59.99, image: "/8.jpg" },
    { id: 3, name: "Elegant Blouse", price: 49.99, image: "/7.jpg" },
    { id: 4, name: "Formal Suit", price: 199.99, image: "/6.jpg" },
    { id: 5, name: "Winter Coat", price: 129.99, image: "/5.jpg" },
  ]

  const foodItems = [
    { id: 1, name: "Grilled Salmon", price: 24.99, image: "/4.jpg" },
    { id: 2, name: "Beef Burger", price: 14.99, image: "/3.jpg" },
    { id: 3, name: "Caesar Salad", price: 9.99, image: "/2.jpg" },
    { id: 4, name: "Pasta Carbonara", price: 16.99, image: "/1.jpg" },
    { id: 5, name: "Chocolate Cake", price: 7.99, image: "/3.jpg" },
  ]

  return (
    <div>
      <div className="relative">
        <Hero
          height="h-[80vh]"
          slides={[
            { title: "Welcome to Matriculated Global LTD", subtitle: "Fashion & Dining Excellence", backgroundImage:"/9.jpg" },
            { title: "Discover Our Latest Collection", subtitle: "Trendy & Stylish Fashion", backgroundImage:"/2.jpg" },

          ]}
        />
        <OpeningHoursBanner />
      </div>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          
          <h2 className="text-3xl font-bold mb-8 text-center">Fashion Collection</h2>
          <ProductCarousel items={fashionItems} />
          <div className="mt-8 text-center">
            <Link
              href="/fashion"
              className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Go to Shop
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Restaurant Menu</h2>
          <ProductCarousel items={foodItems} />
          <div className="mt-8 text-center">
            <Link
              href="/restaurant"
              className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Go to Restaurant
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
