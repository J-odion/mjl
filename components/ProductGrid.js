"use client"
import { useState } from "react"
import Image from "next/image"
import { Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"

export default function ProductGrid({ products }) {
  const { addToCart } = useCart()
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(products.length / productsPerPage)

  const handleOrderNow = (product) => {
    // Create WhatsApp message for single item
    const message = `Hello, I would like to order:\n\n*${product.name}*\nPrice: $${product.price.toFixed(2)}\n\nThank you!`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank")
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                    aria-label="Add to cart"
                  >
                    <Plus size={20} />
                  </button>
                  <button
                    onClick={() => handleOrderNow(product)}
                    className="px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm flex items-center"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
