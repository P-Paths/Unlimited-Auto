import Link from 'next/link'

export default function Financing() {
  const benefits = [
    { icon: '✅', text: 'Competitive Rates' },
    { icon: '⏱️', text: 'Quick Approval' },
    { icon: '🤝', text: 'All Credit Types' },
    { icon: '💰', text: 'Flexible Terms' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Flexible Financing Options
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            We work with a variety of lenders to ensure you get the best rates and terms for your next vehicle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-700/50 p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                <p className="text-lg font-semibold text-left">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Get Pre-Approved Today!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Start your car buying journey by getting pre-approved for a loan. It's quick, easy, and secure.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  No impact on credit score
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Multiple lender options
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Same-day approval available
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <Link
                href="/financing/apply"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Apply for Financing
              </Link>
              <Link
                href="/financing/calculator"
                className="block w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-center py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Payment Calculator
              </Link>
              <p className="text-sm text-gray-500 text-center">
                Questions? Call us at{' '}
                <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
