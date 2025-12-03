import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Méthodologie', href: '#methodologie' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'À Propos', href: '#apropos' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-brand-600 text-white p-2.5 rounded-lg group-hover:bg-brand-700 transition-colors shadow-md">
            <Compass size={28} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-brand-900">Arc Ingénierie</span>
            <span className="text-xs font-semibold text-accent-600 tracking-widest uppercase">& Infrastructure</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-brand-600 font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent-600 hover:bg-accent-700 text-white px-5 py-2.5 rounded-md font-medium transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            Demander un Devis
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-brand-600 hover:bg-brand-50 font-medium p-3 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 bg-accent-600 text-white text-center p-3 rounded-md font-medium hover:bg-accent-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demander un Devis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};