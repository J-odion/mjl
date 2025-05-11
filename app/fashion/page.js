import Hero from "@/components/Hero"
import ProductGrid from "@/components/ProductGrid"

export default function FashionPage() {
  const fashionItems = [
    {
      id: 1,
      name: "Summer Dress",
      price: 89.99,
      image: "/5.jpg",
      description: "Light and comfortable summer dress perfect for hot days.",
    },
    {
      id: 2,
      name: "Casual Jeans",
      price: 59.99,
      image: "/6.jpg",
      description: "Classic blue jeans with a modern fit.",
    },
    {
      id: 3,
      name: "Elegant Blouse",
      price: 49.99,
      image: "/7.jpg",
      description: "Sophisticated blouse for formal occasions.",
    },
    {
      id: 4,
      name: "Formal Suit",
      price: 199.99,
      image: "/8.jpg",
      description: "Premium quality suit for business meetings.",
    },
    {
      id: 5,
      name: "Winter Coat",
      price: 129.99,
      image: "/9.jpg",
      description: "Warm winter coat with faux fur lining.",
    },
    {
      id: 6,
      name: "Leather Jacket",
      price: 149.99,
      image: "/6.jpg",
      description: "Classic leather jacket for a timeless look.",
    },
    
  ]

  return (
    <div>
      <Hero
        height="h-[60vh]"
        slides={[
          { title: "Fashion Hub", subtitle: "Discover Your Style",backgroundImage:"/9.jpg" },
          { title: "New Arrivals", subtitle: "Spring Collection 2025",backgroundImage:"/7.jpg" },
          { title: "Limited Edition", subtitle: "Exclusive Designer Pieces",backgroundImage:"/5.jpg" },
        ]}
      />

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Our Fashion Collection</h1>
        <div className="">

          <div className=""></div>

          <div>
          <ProductGrid products={fashionItems} />
          </div>
        </div>
      </section>
    </div>
  )
}
