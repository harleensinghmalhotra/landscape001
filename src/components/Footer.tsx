import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [info, setInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  // Load config from /public
  useEffect(() => {
    fetch('/config.json')
      .then((r) => r.json())
      .then((data) => setInfo(data.siteInfo))
      .catch((err) => console.error('config load failed (footer):', err));
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneDigits = (info.phone || '').replace(/\D/g, '');

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/2AAA.png"
              alt={info.name || 'MD Landscape & Design'}
              className="h-12 sm:h-14 md:h-16 w-auto mb-3 sm:mb-4 object-contain"
            />
            <p className="text-xs sm:text-sm">
              Professional landscaping services for the Greater Chicago Area. Insured and committed to quality craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-brand-primary transition-colors text-xs sm:text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-brand-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="hover:text-brand-primary transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-brand-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('careers')}
                  className="hover:text-brand-primary transition-colors"
                >
                  Join Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-brand-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Our Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>Landscape Design</li>
              <li>Hardscapes & Retaining Walls</li>
              <li>Paver Installation & Repair</li>
              <li>Seasonal Property Maintenance</li>
              <li>Mulch & Bed Installation</li>
              <li>Sod Installation</li>
              <li>Drainage Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px] text-brand-primary flex-shrink-0 mt-1" />
                <span>{info.address || 'Loading address...'}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-brand-primary flex-shrink-0" />
                <a href={`tel:${phoneDigits}`} className="hover:text-brand-primary transition-colors">
                  {info.phone || 'Loading...'}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-brand-primary flex-shrink-0" />
                <a href={`mailto:${info.email}`} className="hover:text-brand-primary transition-colors">
                  {info.email || 'Loading...'}
                </a>
              </li>
            </ul>

            <div className="mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm font-semibold text-white mb-1">Business Hours:</p>
              <p className="text-[10px] sm:text-xs">Mon - Sat: By Appointment</p>
              <p className="text-[10px] sm:text-xs">Emergency Service Available</p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800">
          <p className="text-xs sm:text-sm text-center">
            <span className="font-semibold text-white">Service Areas:</span> Chicago • Evanston • Glen Ellyn • Oak Park • Glenview • Northbrook • Oakbrook • Arlington Heights • Des Plaines • Orland Park
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800 text-center text-xs sm:text-sm">
          <p>&copy; {currentYear} {info.name || ''}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
