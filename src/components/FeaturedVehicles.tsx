import Link from 'next/link'
import Image from 'next/image'

// Sample vehicle data - this will be replaced with real data later
const featuredVehicles = [
  {
    id: 1,
    year: 2020,
    make: 'Honda',
    model: 'Civic',
    trim: 'LX',
    price: 18995,
    miles: 45000,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop',
    features: ['Automatic', 'Bluetooth', 'Backup Camera']
  },
  {
    id: 2,
    year: 2019,
    make: 'Toyota',
    model: 'Camry',
    trim: 'LE',
    price: 21995,
    miles: 38000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop',
    features: ['Automatic', 'Lane Assist', 'Cruise Control']
  },
  {
    id: 3,
    year: 2021,
    make: 'Nissan',
    model: 'Altima',
    trim: 'SV',
    price: 23995,
    miles: 25000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop',
    features: ['CVT', 'Apple CarPlay', 'Heated Seats']
  }
]

export default function FeaturedVehicles() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-gray-600">
            Quality cars at great prices. All vehicles come with our satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${vehicle.price.toLocaleString()}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                </h3>
                <p className="text-gray-600 mb-4">
                  {vehicle.miles.toLocaleString()} miles
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Link 
                    href={`/inventory/${vehicle.id}`}
                    className="flex-1 bg-primary-600 text-white text-center py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    View Details
                  </Link>
                  <Link 
                    href={`/contact?vehicle=${vehicle.id}`}
                    className="flex-1 border border-primary-600 text-primary-600 text-center py-2 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    Schedule Drive
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/inventory"
            className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            View All Inventory
          </Link>
        </div>
      </div>
    </section>
  )
}
