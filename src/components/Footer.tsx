import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white relative">
      {/* Grain texture overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-[4fr_1fr_2fr_2fr_2fr] gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 text-center md:text-left">
            <div className="flex items-center space-x-2 mb-4 mt-[-20px]">
              <img 
                src="footer logo.png" 
                alt="cadpulse Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6 text-sm">
              CADPULSE is a mechanical design and engineering company specializing in product development, machinery design. Operating under Pulseway Solutions (Pvt) Ltd., we support businesses worldwide with reliable, practical, and well-crafted engineering solutions.
            </p>
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <a href="https://x.com/CADPULSE1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"><Twitter className="w-4 h-4" /></a>
              <a href="https://web.facebook.com/cadpulsefb/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/cadpulse?igsh=b2k4N2I4M2NnY2Q2" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/company/77887485/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"><Linkedin className="w-4 h-4" /></a>
              <a href="mailto:hello@cadpulse.lk" className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"><Mail className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block"></div>

          {/* Quick Links */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">Home</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h4 className="text-base font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <div><p className="text-neutral-400 text-sm">hello@cadpulse.com</p></div>
              </div>
              <div className="flex items-start space-x-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <div><p className="text-neutral-400 text-sm">+94 78 863 8718</p></div>
              </div>
              <div className="flex items-start space-x-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <div><p className="text-neutral-400 text-sm">Tangalle, Sri Lanka</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <p className="text-neutral-500 text-xs">
              © 2025 Cadpulse.com All rights reserved.
            </p>
            <p className="text-neutral-500 text-xs mt-2 md:mt-0">
              Designed with precision and care in Sri Lanka
            </p>
            <p className="text-neutral-500 text-xs mt-2 md:mt-0">
              Developed by <a href="https://www.lunorlabs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-700">Lunor Labs</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
