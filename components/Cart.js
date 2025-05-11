"use client"
import { X } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/context/CartContext"

export default function Cart({ onClose }) {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleCheckout = () => {
    // Create WhatsApp message with all cart items
    let message = "Hello, I would like to order the following items:\n\n"

    cartItems.forEach((item) => {
      message += `*${item.name}*\n`
      message += `Price: $${item.price.toFixed(2)}\n`
      message += `Quantity: ${item.quantity}\n`
      message += `Subtotal: $${(item.price * item.quantity).toFixed(2)}\n\n`
    })

    message += `*Total: $${calculateTotal().toFixed(2)}*\n\nThank you!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank")
    clearCart()
    onClose()
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-700" aria-label="Close cart">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <ShoppingCartIcon className="w-16 h-16 mb-4" />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <ul className="divide-y">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-gray-500 mt-1">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                  <p className="font-medium mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="border-t p-4">
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Proceed to WhatsApp
          </button>
        </div>
      )}
    </div>
  )
}

// Cart icon component for empty state
function ShoppingCartIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  )
}
