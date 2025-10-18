export default function WhyBuyHere() {
  const features = [
    {
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. What you see is what you pay.",
      icon: "💰"
    },
    {
      title: "Quick Financing",
      description: "Get pre-approved in minutes with our streamlined financing process.",
      icon: "⚡"
    },
    {
      title: "Same-day Appointments",
      description: "Schedule your test drive today. We're here when you need us.",
      icon: "📅"
    },
    {
      title: "No Games",
      description: "Straightforward process from start to finish. No pressure, no tricks.",
      icon: "🎯"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Buy Here?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built our reputation on honesty, transparency, and putting our customers first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
