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

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
    <div className="text-xl md:text-2xl font-bold text-white tracking-wider">
      <span className="text-white">RAW</span>
      <span className="ml-1">MEDIA</span>
    </div>
  );

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-2 md:py-3 shadow-lg' : 'bg-transparent py-2 md:py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center group" 
          onClick={closeMenu}
        >
          {!logoLoading && logo?.url ? (
            <img 
              src={logo.url}
              alt={logo.alt_text || "RAW MEDIA Logo"}
              className="h-16 md:h-20 lg:h-24 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter object-contain"
              style={{ marginLeft: '0', marginRight: 'auto' }}
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
              <div className="h-6 md:h-8 w-24 md:w-32 bg-neutral-700 animate-pulse rounded"></div>
            ) : (
              <TextLogo />
            )}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" isActive={isActive('/')} label="HOME" onClick={handleNavClick} />
          <NavLink to="/artists" isActive={isActive('/artists')} label="ARTISTS" onClick={handleNavClick} />
          <NavLink to="/booking" isActive={isActive('/booking')} label="BOOKING" onClick={handleNavClick} />
          <NavLink to="/about" isActive={isActive('/about')} label="ABOUT" onClick={handleNavClick} />
          <NavLink to="/contact" isActive={isActive('/contact')} label="CONTACT" onClick={handleNavClick} />
          <Link 
            to="/booking" 
            className="bg-neutral-600 hover:bg-neutral-500 text-white px-6 py-2 rounded-lg transition-all duration-300 nav-link"
            onClick={handleNavClick}
            data-text="BOOK NOW"
          >
            BOOK NOW
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 relative z-[60]"
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

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm" onClick={closeMenu} />
      )}

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-[55] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Full screen background */}
        <div className="absolute inset-0 bg-background"></div>
        
        {/* Menu content */}
        <div className="relative z-10 flex flex-col h-full p-8 pt-20">
          <div className="flex-1 space-y-2">
            <MobileNavLink to="/" label="HOME" onClick={(e) => { closeMenu(); handleNavClick(e); }} />
            <MobileNavLink to="/artists" label="ARTISTS" onClick={(e) => { closeMenu(); handleNavClick(e); }} />
            <MobileNavLink to="/booking" label="BOOKING" onClick={(e) => { closeMenu(); handleNavClick(e); }} />
            <MobileNavLink to="/about" label="ABOUT" onClick={(e) => { closeMenu(); handleNavClick(e); }} />
            <MobileNavLink to="/contact" label="CONTACT" onClick={(e) => { closeMenu(); handleNavClick(e); }} />
          </div>
          
          {/* Book Now button at bottom */}
          <div className="mt-8">
            <Link
              to="/booking"
              className="block w-full bg-neutral-600 hover:bg-neutral-500 text-white px-6 py-3 rounded-lg text-center nav-link transition-all duration-300 font-medium"
              onClick={(e) => { closeMenu(); handleNavClick(e); }}
              data-text="BOOK NOW"
            >
              BOOK NOW
            </Link>
          </div>
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
      ${isActive ? 'text-white font-bold' : 'text-white hover:text-neutral-300'}`}
    onClick={onClick}
    data-text={label}
  >
    {label}
    {isActive && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" />
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
    className="block text-xl font-medium py-4 border-b border-neutral-800 hover:text-neutral-300 transition-colors nav-link"
    onClick={onClick}
    data-text={label}
  >
    {label}
  </Link>
);

export default Header;