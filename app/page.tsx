import Link from 'next/link';
import { Calculator } from '@/components/Calculator';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
              </svg>
              <span className="font-bold text-xl text-gray-900">ROICalculator</span>
            </div>
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#calculator" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Calculator
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Calculate Your <span className="text-blue-600">Return on Investment</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  See how much you could save by implementing our solution. Use our calculator to get a personalized ROI estimate in seconds.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Business growth chart"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Why Calculate Your ROI?</h2>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500 mt-1 flex-shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Make data-driven decisions for your business</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500 mt-1 flex-shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Understand the financial impact of your investments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500 mt-1 flex-shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>Optimize your budget allocation for maximum returns</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <a 
                        href="#calculator" 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-block transition-colors"
                      >
                        Calculate Your ROI
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Our Calculator Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Accurate Calculations</h3>
                  <p className="text-gray-600">
                    Our calculator uses precise formulas to ensure you get the most accurate ROI estimate possible.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                  <p className="text-gray-600">
                    Simple, straightforward interface that guides you through each step of the calculation process.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Reporting</h3>
                  <p className="text-gray-600">
                    Get a visual breakdown of your ROI with our intuitive charts and detailed analysis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="calculator" className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">Calculate Your ROI</h2>
                <p className="text-center text-gray-600 mb-8">
                  Fill out the form below to see how much you could save
                </p>
                <Calculator />
              </div>
            </div>
          </section>

          <section className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Maximize Your Returns?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact our team of experts today to learn more about how our solutions can help you achieve better ROI.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Us
              </button>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  <span className="font-bold text-xl">ROICalculator</span>
                </div>
                <p className="text-gray-400">
                  Helping businesses make better financial decisions with accurate ROI calculations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#calculator" className="text-gray-400 hover:text-white transition-colors">Calculator</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">hello@roicalculator.com</li>
                  <li className="text-gray-400">+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} ROICalculator. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}