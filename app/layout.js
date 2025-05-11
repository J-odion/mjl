import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CartProvider from "@/context/CartContext"

// Specify React 18
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Matriculated Global LTD",
  description: "Fashion and Restaurant services by Matriculated Global LTD",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
