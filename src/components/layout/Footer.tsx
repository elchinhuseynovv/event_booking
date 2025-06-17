import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Send } from 'lucide-react';
import { useLogo } from '../../hooks/useLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { logo, loading: logoLoading } = useLogo();

  // Text-based logo component as fallback
  const TextLogo = () => (
    <div className="text-xl font-bold text-white tracking-wider">
      <span className="text-white">RAW</span>
      <span className="ml-1">MEDIA</span>
    </div>
  );

  return (
    <footer className="bg-background-light pt-16 pb-8 relative z-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              {!logoLoading && logo?.url ? (
                <img 
                  src={logo.url}
                  alt={logo.alt_text || "Raw Media Logo"}
                  className="h-8 transition-all duration-300 hover:scale-110 hover:brightness-125 filter object-contain"
                  onError={(e) => {
                    console.warn('Footer logo image failed to load, switching to text logo');
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
                className={`transition-all duration-300 hover:scale-110 ${
                  logoLoading || !logo?.url ? 'block' : 'hidden'
                }`}
                style={{ display: logoLoading || !logo?.url ? 'block' : 'none' }}
              >
                {logoLoading ? (
                  <div className="h-6 w-24 bg-neutral-700 animate-pulse rounded"></div>
                ) : (
                  <TextLogo />
                )}
              </div>
            </Link>
            <p className="text-neutral-400 mb-6">
              Connecting the world's best artists with your next unforgettable event.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} href="https://facebook.com" />
              <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com" />
              <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" />
              <SocialIcon icon={<Youtube size={20} />} href="https://youtube.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/artists" label="Find Artists" />
              <FooterLink to="/booking" label="Book an Event" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/contact" label="Contact" />
              <FooterLink to="/terms" label="Terms & Conditions" />
              <FooterLink to="/privacy" label="Privacy Policy" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-3 text-neutral-400">
              <li>Jagiellońska 42</li>
              <li>03-462, Warsaw, Poland</li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@raw-media.co" className="hover:text-primary transition-colors">
                  info@raw-media.co
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Subscribe</h4>
            <p className="text-neutral-400 mb-4">
              Stay updated with the latest artists and exclusive offers.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-background text-white px-4 py-2 rounded-l-lg focus:outline-none w-full border border-neutral-700 focus:border-neutral-600"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors text-white"
                aria-label="Subscribe"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 text-neutral-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Raw Media. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with <span className="text-secondary">♥</span> for music lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

type FooterLinkProps = {
  to: string;
  label: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="text-neutral-400 hover:text-primary transition-colors"
    >
      {label}
    </Link>
  </li>
);

type SocialIconProps = {
  icon: React.ReactNode;
  href: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-background h-10 w-10 rounded-full flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary border border-neutral-700 transition-colors"
    aria-label="Social media"
  >
    {icon}
  </a>
);

export default Footer;