import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black-background border-b border-neon-cyan/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-neon-cyan hover:text-neon-magenta transition-colors duration-300">
            DRACONIS SYSTEMS
          </Link>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-neon-cyan transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

