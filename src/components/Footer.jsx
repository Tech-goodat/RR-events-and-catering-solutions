

import { FaWhatsapp, FaPhone, FaTiktok, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 text-sm">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-orange-300 mb-4">RR Events & Catering</h2>
          <p className="text-gray-400">
            Bringing your events to life — from planning to catering, we’ve got you covered.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-orange-300 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg text-orange-300 font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: <a href="mailto:felixkiprotich2000@gmail.com" className="hover:text-white">Send a message</a></li>
            <li>Phone: <a href="tel:+254758364336" className="hover:text-white">+254 758 364 336</a></li>
            <li>Location: Kericho, Kenya</li>
          </ul>
        </div>

        {/* Contact & Social Details */}
        <div>
          <h3 className="text-lg text-orange-300 font-semibold mb-4">Connect With Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-gray-400 text-lg" />
              WhatsApp: <a href="https://wa.me/254724354310" target="_blank" rel="noopener noreferrer" className="hover:text-white">0724354310</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-gray-400 text-lg" />
              Phone: <a href="tel:+254724354310" target="_blank" rel="noopener noreferrer" className="hover:text-white">0724354310</a>
            </li>
            <li className="flex items-center gap-2">
              <FaTiktok className="text-gray-400 text-lg" />
              TikTok: <span className="font-bold text-white">double r events</span>
            </li>
            <li className="flex items-center gap-2">
              <FaFacebook className="text-gray-400 text-lg" />
              Facebook: <span className="font-bold text-white">double r events</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400 text-lg" />
              Email: <a href="mailto:kiplangatngeno035@gmail.com" className="hover:text-white">kiplangatngeno035@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} RR Events & Catering. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
