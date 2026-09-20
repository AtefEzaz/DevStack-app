import { useState } from "react";
import logoText from "../assets/logo-text.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Mobile: hamburger */}
        <button
          className="md:hidden p-2 -ml-2 text-gray-700"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Left/Center brand */}
        <div className="flex items-center gap-2 md:flex-1">
          <img
            src={logoText}
            alt="Dev Stack logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop center links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-gray-900 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div className="flex items-center gap-3 md:flex-1 md:justify-end">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 hidden sm:inline-block">
            Sign In
          </button>
          <button className="text-sm font-semibold text-white bg-brand-gradient px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown links */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-4 text-sm font-medium text-gray-600 border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
