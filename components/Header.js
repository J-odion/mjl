"use client"
import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import Cart from "./Cart"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartItems } = useCart()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleCart = () => setIsCartOpen(!isCartOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              <Image
                src={"/logo.png"}
                width={50}
                height={50}
                className="object-cover"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link href="/fashion" className="text-gray-900 hover:text-gray-600 transition-colors">
              Fashion
            </Link>
            <Link href="/restaurant" className="text-gray-900 hover:text-gray-600 transition-colors">
              Restaurant
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-600 transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-900 hover:text-gray-600 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-2 p-2 text-gray-900 hover:text-gray-600 transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/fashion"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Fashion
            </Link>
            <Link
              href="/restaurant"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Restaurant
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleCart}></div>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl">
                  <Cart onClose={toggleCart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
