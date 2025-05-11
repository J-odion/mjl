import Hero from "@/components/Hero"
import ProductGrid from "@/components/ProductGrid"

export default function RestaurantPage() {
  const foodItems = [
    {
      id: 1,
      name: "Grilled Salmon",
      price: 24.99,
      image: "/1.jpg",
      description: "Fresh salmon fillet grilled to perfection with herbs.",
    },
    {
      id: 2,
      name: "Beef Burger",
      price: 14.99,
      image: "/2.jpg",
      description: "Juicy beef patty with cheese, lettuce, and special sauce.",
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 9.99,
      image: "/3.jpg",
      description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      price: 16.99,
      image: "/4.jpg",
      description: "Creamy pasta with bacon, eggs, and parmesan cheese.",
    },
    {
      id: 1,
      name: "Grilled Salmon",
      price: 24.99,
      image: "/1.jpg",
      description: "Fresh salmon fillet grilled to perfection with herbs.",
    },
    {
      id: 2,
      name: "Beef Burger",
      price: 14.99,
      image: "/2.jpg",
      description: "Juicy beef patty with cheese, lettuce, and special sauce.",
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 9.99,
      image: "/3.jpg",
      description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      price: 16.99,
      image: "/4.jpg",
      description: "Creamy pasta with bacon, eggs, and parmesan cheese.",
    },
   
  ]

  return (
    <div>
      <Hero
        height="h-[60vh]"
        slides={[
          { title: "Restaurant", subtitle: "Culinary Excellence",backgroundImage:"/2.jpg" },
          { title: "Fresh Ingredients", subtitle: "Farm to Table Experience", backgroundImage:"/1.jpg" },
          { title: "Chef's Special", subtitle: "Unique Flavors Every Day",backgroundImage:"/4.jpg" },
        ]}
      />

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
        <ProductGrid products={foodItems} />
      </section>
    </div>
  )
}
