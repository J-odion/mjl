export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Matriculated Global LTD</h3>
            <p className="text-gray-400 mt-1">Fashion & Restaurant Excellence</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">C.R. No: 8353703 | TIN: 32975930-0001</p>
            <p className="text-gray-400 mt-1">
              © {new Date().getFullYear()} Matriculated Global LTD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
