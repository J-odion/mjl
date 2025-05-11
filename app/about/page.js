import Hero from "@/components/Hero"

export default function AboutPage() {
  return (
    <div>
      <Hero
        height="h-[80vh]"
        slides={[
          { title: "About Us", subtitle: "Our Story & Vision", backgroundImage: "/3.jpg" },
          { title: "Matriculated Global LTD", subtitle: "Fashion & Dining Excellence Since 2025", backgroundImage: "/5.jpg" },
        ]}
      />

      <section className="py-16 px-4 md:px-8 max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Matriculated Global LTD (MJL)</h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Company Information</h2>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Company Name:</span> Matriculated Global LTD (MJL)
              </li>
              <li>
                <span className="font-medium">C.R. No:</span> 8353703
              </li>
              <li>
                <span className="font-medium">TIN:</span> 32975930-0001
              </li>
              <li>
                <span className="font-medium">Established:</span> March 19, 2025
              </li>
              <li>
                <span className="font-medium">Business Type:</span> Fashion & Restaurant
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Founder</h2>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Full Name:</span> Mr. Samuel Emanuel Asukwo
              </li>
              <li>
                <span className="font-medium">State of Origin:</span> Akwa-Ibom
              </li>
              <li>
                <span className="font-medium">Place of Birth:</span> Enwang Mbo, Akwa-Ibom
              </li>
              <li>
                <span className="font-medium">Date of Birth:</span> May 11, 1991
              </li>
              <li>
                <span className="font-medium">Experience:</span> Since 2006
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Matriculated Global LTD was founded with a vision to combine fashion excellence with culinary artistry.
              Since our establishment in 2025, we have been committed to providing our customers with the finest fashion
              items and delicious food experiences.
            </p>
            <p className="text-gray-700">
              With over 19 years of experience in the industry, our founder Mr. Samuel Emanuel Asukwo has infused his
              passion and expertise into every aspect of our business. We pride ourselves on quality, innovation, and
              customer satisfaction in everything we do.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
