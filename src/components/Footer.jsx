import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
                AfroBeauty
              </h3>
              <p className="text-pink-500 text-xs font-bold tracking-[0.2em] uppercase">Luxury Salon & Spa</p>
            </div>

            <p className="text-gray-400 leading-relaxed font-light">
              Where beauty meets artistry. Experience luxury hair and beauty services in the heart of Nakuru.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Facebook size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Instagram size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Twitter size={18} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-8 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-pink-600 transition-colors duration-300">
                  <MapPin size={14} className="text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors pt-1">
                  Nakuru East<br />Nakuru, Kenya
                </span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-pink-600 transition-colors duration-300">
                  <Phone size={14} className="text-gray-400 group-hover:text-white" />
                </div>
                <a href="tel:+254700123456" className="text-gray-400 hover:text-white transition-colors">
                  +254 700 123 456
                </a>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-pink-600 transition-colors duration-300">
                  <Mail size={14} className="text-gray-400 group-hover:text-white" />
                </div>
                <a href="mailto:info@nairobi-elegance.com" className="text-gray-400 hover:text-white transition-colors">
                  info@afrobeauty.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-8 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>Working Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start border-b border-gray-800 pb-4">
                <Clock size={18} className="text-pink-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Monday - Friday</p>
                  <p className="text-gray-500 text-sm mt-1">8:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start border-b border-gray-800 pb-4">
                <Clock size={18} className="text-pink-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Saturday</p>
                  <p className="text-gray-500 text-sm mt-1">9:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-pink-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-gray-500 text-sm mt-1">10:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-8 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Book Appointment", path: "/booking" },
                { label: "Our Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Shop Products", path: "/store" },
                { label: "About Us", path: "/about" }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-400 hover:text-pink-500 transition-all flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-600 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm flex items-center">
              © {new Date().getFullYear()} AfroBeauty Salon. Made with <Heart size={12} className="text-pink-600 mx-1 fill-current" /> in Nakuru.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-pink-500 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-pink-500 transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-500 hover:text-pink-500 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
