import { useState, useEffect } from 'react';
import rizalLogo from '../assets/Rizzal_logo.gif'; //Firefly logo gif pabago na lang hehe

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'life-beyond-dates', label: 'Life Beyond Dates' },
    { id: 'literary-works', label: 'Literary Works' },
    { id: 'works-deep-dive', label: 'Beyond the Famous Novels' },
    { id: 'global-journey', label: 'Global Journey' },
    { id: 'polymath', label: 'The Polymath' },
    { id: 'legacy', label: 'Beyond Monuments and Holidays' },
    { id: 'final-sacrifice', label: 'Final Sacrifice' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-dark/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection('hero')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToSection('hero');
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Navigate to top of page"
        >
          <img
            src={rizalLogo}
            alt="Rizal Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
          <span className="text-gold font-serif font-semibold text-sm sm:text-base md:text-lg tracking-wide">
            RIZAL LEGACY
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white/80 hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy-dark rounded-md px-3 py-2"
              aria-label={`Navigate to ${link.label} section`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy-dark rounded p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-navy-dark/98 backdrop-blur-sm border-t border-gold/20 md:hidden"
            role="menu"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-white/80 hover:text-gold transition-colors duration-300 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset rounded px-2"
                  role="menuitem"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
