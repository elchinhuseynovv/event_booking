import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Music className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Raw Media</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" isActive={isActive('/')} label="Home" />
          <NavLink to="/artists" isActive={isActive('/artists')} label="Artists" />
          <NavLink to="/booking" isActive={isActive('/booking')} label="Booking" />
          <NavLink to="/about" isActive={isActive('/about')} label="About" />
          <NavLink to="/contact" isActive={isActive('/contact')} label="Contact" />
          <Link to="/booking" className="btn-primary glow">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          <MobileNavLink to="/" label="Home" onClick={closeMenu} />
          <MobileNavLink to="/artists" label="Artists" onClick={closeMenu} />
          <MobileNavLink to="/booking" label="Booking" onClick={closeMenu} />
          <MobileNavLink to="/about" label="About" onClick={closeMenu} />
          <MobileNavLink to="/contact" label="Contact" onClick={closeMenu} />
          <Link
            to="/booking"
            className="btn-primary glow mt-8 text-center"
            onClick={closeMenu}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

type NavLinkProps = {
  to: string;
  label: string;
  isActive: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive }) => (
  <Link
    to={to}
    className={`text-base font-medium transition-colors relative
      ${isActive ? 'text-primary' : 'text-white hover:text-primary-300'}`}
  >
    {label}
    {isActive && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
    )}
  </Link>
);

type MobileNavLinkProps = {
  to: string;
  label: string;
  onClick: () => void;
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, onClick }) => (
  <Link
    to={to}
    className="text-xl font-medium py-4 border-b border-neutral-800 hover:text-primary transition-colors"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Header;