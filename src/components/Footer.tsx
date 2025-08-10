import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-gray border-t border-neon-cyan/20 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-neon-cyan mb-4">DRACONIS SYSTEMS LLC</h3>
            <p className="text-gray-300 text-sm">
              Imagining solutions for tomorrow's adventures. Where innovation meets implementation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>AI-Powered Solutions</li>
              <li>Software Development</li>
              <li>Entertainment Technology</li>
              <li>Communication Systems</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>contact@draconisai.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-neon-cyan/20 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 DRACONIS SYSTEMS LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

