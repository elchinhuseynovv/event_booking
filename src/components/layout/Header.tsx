import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLogo } from '../../hooks/useLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { logo, loading: logoLoading } = useLogo();

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

  // Text-based logo component as fallback
  const TextLogo = () => (
    <div className="text-2xl font-bold text-white tracking-wider">
      <span className="text-primary">RAW</span>
      <span className="ml-1">MEDIA</span>
    </div>
  );

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
          {!logoLoading && logo?.url ? (
            <img 
              src={logo.url}
              alt={logo.alt_text || "Raw Media Logo"}
              className="h-24 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter drop-shadow-[0_0_8px_rgba(72,52,184,0.5)]"
              onError={(e) => {
                console.warn('Logo image failed to load, switching to text logo');
                // Hide the broken image and show text logo instead
                e.currentTarget.style.display = 'none';
                const textLogo = e.currentTarget.nextElementSibling as HTMLElement;
                if (textLogo) {
                  textLogo.style.display = 'block';
                }
              }}
            />
          ) : null}
          
          {/* Text logo - shown when loading, no logo available, or image fails */}
          <div 
            className={`transition-all duration-300 group-hover:scale-110 ${
              logoLoading || !logo?.url ? 'block' : 'hidden'
            }`}
            style={{ display: logoLoading || !logo?.url ? 'block' : 'none' }}
          >
            {logoLoading ? (
              <div className="h-8 w-32 bg-neutral-700 animate-pulse rounded"></div>
            ) : (
              <TextLogo />
            )}
          </div>
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