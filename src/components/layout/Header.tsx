import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    target.classList.add('glitching');
    target.setAttribute('data-text', target.textContent || '');
    
    setTimeout(() => {
      target.classList.remove('glitching');
    }, 300);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group" 
          onClick={closeMenu}
        >
          <img 
            src="https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/logos/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjYjYyNGVjLWJhZmEtNDBlZC05ZjUxLTQ0NThkZWQ0MWQwMCJ9.eyJ1cmwiOiJsb2dvcy9sb2dvLnBuZyIsImlhdCI6MTc0ODE4NzcyMSwiZXhwIjoxNzc5NzIzNzIxfQ.Z_bbLG4_mZoVbm1n7bM0pAQv0SwO06GL7n1TrZ8LZfI"
            alt="Raw Media Logo"
            className="h-24 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter drop-shadow-[0_0_8px_rgba(72,52,184,0.5)]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" isActive={isActive('/')} label="Home" onClick={handleNavClick} />
          <NavLink to="/artists" isActive={isActive('/artists')} label="Artists" onClick={handleNavClick} />
          <NavLink to="/booking" isActive={isActive('/booking')} label="Booking" onClick={handleNavClick} />
          <NavLink to="/about" isActive={isActive('/about')} label="About" onClick={handleNavClick} />
          <NavLink to="/contact" isActive={isActive('/contact')} label="Contact" onClick={handleNavClick} />
          <Link 
            to="/booking" 
            className="btn-primary glow nav-link"
            onClick={handleNavClick}
            data-text="Book Now"
          >
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
          <MobileNavLink to="/" label="Home" onClick={(e) => { closeMenu(); handleNavClick(e); }} />
          <MobileNavLink to="/artists" label="Artists" onClick={(e) => { closeMenu(); handleNavClick(e); }} />
          <MobileNavLink to="/booking" label="Booking" onClick={(e) => { closeMenu(); handleNavClick(e); }} />
          <MobileNavLink to="/about" label="About" onClick={(e) => { closeMenu(); handleNavClick(e); }} />
          <MobileNavLink to="/contact" label="Contact" onClick={(e) => { closeMenu(); handleNavClick(e); }} />
          <Link
            to="/booking"
            className="btn-primary glow mt-8 text-center nav-link"
            onClick={(e) => { closeMenu(); handleNavClick(e); }}
            data-text="Book Now"
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
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive, onClick }) => (
  <Link
    to={to}
    className={`text-base font-medium transition-colors relative nav-link
      ${isActive ? 'text-primary' : 'text-white hover:text-primary-300'}`}
    onClick={onClick}
    data-text={label}
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
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, onClick }) => (
  <Link
    to={to}
    className="text-xl font-medium py-4 border-b border-neutral-800 hover:text-primary transition-colors nav-link"
    onClick={onClick}
    data-text={label}
  >
    {label}
  </Link>
);

export default Header;