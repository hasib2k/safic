'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white font-inter">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-2 font-playfair tracking-wide">Sultanpur Al-Falah Islamic Center</h3>
            <p className="text-primary-100 mb-2 leading-relaxed text-sm font-light">
              A place of worship, community, and spiritual growth serving the Muslim community in Dhaka, Bangladesh.
            </p>
            <p className="text-xs text-primary-200 font-medium tracking-wider">
              Established 2000 • Serving the Ummah for over 25 years
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2 font-playfair text-primary-100">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/prayer-times" className="text-primary-100 hover:text-white transition-colors text-sm font-light hover:font-normal">Prayer Times</Link></li>
              <li><Link href="/events" className="text-primary-100 hover:text-white transition-colors text-sm font-light hover:font-normal">Events</Link></li>
              <li><Link href="/donations" className="text-primary-100 hover:text-white transition-colors text-sm font-light hover:font-normal">Donations</Link></li>
              <li><Link href="/about" className="text-primary-100 hover:text-white transition-colors text-sm font-light hover:font-normal">About Us</Link></li>
              <li><Link href="/contact" className="text-primary-100 hover:text-white transition-colors text-sm font-light hover:font-normal">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-2 font-playfair text-primary-100">Services</h4>
            <ul className="space-y-1">
              <li><Link href="/features" className="text-primary-100 hover:text-white transition-colors text-sm font-light hover:font-normal">Islamic Education</Link></li>
              <li><Link href="/features" className="text-primary-100 hover:text-white transition-colors text-sm font-light hover:font-normal">Marriage Services</Link></li>
              <li><Link href="/features" className="text-primary-100 hover:text-white transition-colors text-sm font-light hover:font-normal">Funeral Services</Link></li>
              <li><Link href="/features" className="text-primary-100 hover:text-white transition-colors text-sm font-light hover:font-normal">Youth Programs</Link></li>
              <li><Link href="/gallery" className="text-primary-100 hover:text-white transition-colors text-sm font-light hover:font-normal">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2 font-playfair text-primary-100">Contact Information</h4>
            <div className="space-y-1">
              <div>
                <p className="text-primary-100 text-sm font-light">📍 Sultanpur, Mithapukur</p>
                <p className="text-primary-100 text-sm font-light">Rangpur, Bangladesh</p>
              </div>
              <div>
                <a href="tel:+8801706776711" className="text-primary-100 hover:text-white transition-all duration-300 text-sm font-light hover:font-normal hover:tracking-wide">
                  📞 +8801706776711
                </a>
              </div>
              <div>
                <a href="mailto:info.safic@gmail.com" className="text-primary-100 hover:text-white transition-all duration-300 text-sm font-light hover:font-normal hover:tracking-wide">
                  ✉️ info.safic@gmail.com
                </a>
              </div>
              <div>
                <a href="https://safic.org" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-white transition-all duration-300 text-sm font-light hover:font-normal hover:tracking-wide">
                  🌐 www.safic.org
                </a>
              </div>
              <div>
                <p className="text-xs text-primary-200 font-medium tracking-widest uppercase">GMT+6 (Dhaka Time)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-700 mt-4 pt-4 text-center">
          <p className="text-primary-200 text-sm font-light tracking-wide">
            © 2025 <span className="font-playfair font-medium">Sultanpur Al-Falah Islamic Center</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
