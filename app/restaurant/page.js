import Hero from "@/components/Hero"
import ProductGrid from "@/components/ProductGrid"

export default function RestaurantPage() {
  const foodItems = [
{ id: 1, name: "Afang soup & Snail", price: 13000, image: "/e1.jpeg", description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 1, name: "Afang soup & Fish", price: 13000, image: "/e1.jpeg" , description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction",},
    { id: 2, name: "Afang soup & Goat Meat", price: 13000, image: "/e1.jpeg", description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 3, name: "Afang soup & Cow Meat", price: 13000, image: "/e1.jpeg", description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 4, name: "Afang soup & Snail, Cow Meat or Goat Meat", price: 18000, image: "/e1.jpeg", description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },

    { id: 5, name: "Ogbono soup & Snail", price: 13000, image: "/e4.jpeg", description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 6, name: "Ogbono soup & Goat Meat", price: 13000, image: "/e4.jpeg" , description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction",},
    { id: 7, name: "Ogbono soup & Fish", price: 13000, image: "/e4.jpeg" , description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction",},
    { id: 8, name: "Ogbono soup & Cow Meat", price: 13000, image: "/e4.jpeg" , description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction",},
    { id: 9, name: "Ogbono soup & Snail, Cow Meat or Goat Meat", price: 18000, image: "/e4.jpeg", description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },

    { id: 10, name: "Vegetable soup & snail", price: 13000, image: "/e3.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 11, name: "Vegetable soup & Goat Meat", price: 13000, image: "/e3.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 12, name: "Vegetable soup & Fish", price: 13000, image: "/e3.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 13, name: "Vegetable soup & Cow Meat", price: 13000, image: "/e3.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 14, name: "Vegetable soup & Snail, Cow Meat or Goat Meat", price: 18000, image: "/e3.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },

    { id: 15, name: "Egusi soup & snail", price: 13000, image: "/e2.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction",},
    { id: 16, name: "Egusi soup & Goat Meat", price: 13000, image: "/e2.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 17, name: "Egusi soup & Fish", price: 13000, image: "/e2.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 18, name: "Egusi soup & Cow Meat", price: 13000, image: "/e2.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 19, name: "Egusi soup & Snail, Cow Meat or Goat Meat", price: 18000, image: "/e2.jpeg" },

    { id: 20, name: "Okra soup & snail", price: 13000, image: "/e4.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 21, name: "Okra soup & Goat Meat", price: 13000, image: "/e4.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 22, name: "Okra soup & Cow Meat", price: 13000, image: "/e4.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 23, name: "Okra soup & Fish", price: 13000, image: "/e4.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 24, name: "Okra soup & Fish, Prones", price: 20000, image: "/e4.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 25, name: "Okra soup & Snail, Cow Meat or Goat Meat", price: 18000, image: "/e4.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },
    { id: 26, name: "Okra soup & Prones", price: 15000, image: "/e4.jpeg",description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction", },


    {
      id: 1,
      name: "Afang soup & snail",
      price: 13000,
      image: "/e1.jpeg",
      description: "Fresh, tasty, ravishing and delicious taste. You deserve filled to your satisfaction",
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
