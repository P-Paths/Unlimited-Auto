'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Unlimited Auto
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/inventory" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Inventory
            </Link>
            <Link href="/sell-trade" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Sell/Trade
            </Link>
            <Link href="/financing" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Financing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+1234567890" 
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Call Now
            </a>
            <a 
              href="sms:+1234567890" 
              className="bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors"
            >
              Text Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/inventory" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Inventory
              </Link>
              <Link href="/sell-trade" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Sell/Trade
              </Link>
              <Link href="/financing" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Financing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Contact
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <a 
                  href="tel:+1234567890" 
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors block text-center mb-2"
                >
                  Call Now
                </a>
                <a 
                  href="sms:+1234567890" 
                  className="bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors block text-center"
                >
                  Text Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
