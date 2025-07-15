import Hero from "@/components/Hero"
import ProductGrid from "@/components/ProductGrid"

export default function FashionPage() {
  const fashionItems = [

    { id: 1, name: "Depending on materia", price: 80000, image: "/f1.jpeg", description: "You are as elegant as can be, look like it!", },
    { id: 2, name: "Depending on materia", price: 120000, image: "/f2.jpeg", description: "You are as elegant as can be, look like it!",  },
    { id: 3, name: "Depending on materia", price: 80000, image: "/f3.jpeg", description: "You are as elegant as can be, look like it!",  },
    { id: 4, name: "Depending on materia", price: 120000, image: "/f4.jpeg", description: "You are as elegant as can be, look like it!",  },
    { id: 5, name: "Depending on materia", price: 120000, image: "/f5.jpeg" , description: "You are as elegant as can be, look like it!", },
    { id: 6, name: "Depending on materia", price: 120000, image: "/f6.jpeg" , description: "You are as elegant as can be, look like it!", },
    { id: 7, name: "Depending on materia", price: 120000, image: "/f7.jpeg", description: "You are as elegant as can be, look like it!",  },
    { id: 8, name: "Depending on materia", price: 120000, image: "/f8.jpeg" , description: "You are as elegant as can be, look like it!", },
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
