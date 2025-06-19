import React, { useState } from 'react';
import { Share2, MessageCircle, Facebook, Instagram, Link, Check, X } from 'lucide-react';
import { Artist } from '../../types/artist';

interface ShareButtonProps {
  artist: Artist;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ artist, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const artistUrl = `${window.location.origin}/artists/${artist.slug}`;
  const shareText = `Check out ${artist.name} on RAW MEDIA - ${artist.category === 'photographer' ? 'Professional photographer and videographer' : 'Professional DJ'} from ${artist.location}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(artistUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = artistUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 2000);
    }
  };

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={18} />,
      color: 'bg-green-500 hover:bg-green-600',
      action: () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${artistUrl}`)}`;
        window.open(whatsappUrl, '_blank');
        setIsOpen(false);
      }
    },
    {
      name: 'Facebook',
      icon: <Facebook size={18} />,
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(artistUrl)}&quote=${encodeURIComponent(shareText)}`;
        window.open(facebookUrl, '_blank');
        setIsOpen(false);
      }
    },
    {
      name: 'Instagram',
      icon: <Instagram size={18} />,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      action: () => {
        // Instagram doesn't have direct sharing API, so we copy the link and show instructions
        copyToClipboard();
        alert('Link copied! You can now paste it in your Instagram story or bio.');
      }
    },
    {
      name: 'Copy Link',
      icon: copied ? <Check size={18} /> : <Link size={18} />,
      color: copied ? 'bg-green-500' : 'bg-neutral-600 hover:bg-neutral-500',
      action: copyToClipboard
    }
  ];

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.share-dropdown')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative share-dropdown ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-300 focus:outline-none text-neutral-300 hover:bg-neutral-800 border-2 border-neutral-600 hover:border-neutral-400"
        aria-label="Share artist"
      >
        <Share2 size={18} className="mr-2" />
        Share
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal content */}
          <div className="relative bg-neutral-900 border border-neutral-600 rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-neutral-600 bg-neutral-800">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">
                  Share {artist.name}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-white transition-colors p-2 rounded hover:bg-neutral-700"
                  aria-label="Close share menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Share Options */}
            <div className="p-6 bg-neutral-900">
              <div className="space-y-3">
                {shareOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={option.action}
                    className={`w-full flex items-center px-4 py-3 text-sm text-white rounded-lg transition-all duration-200 ${option.color} shadow-sm hover:shadow-md transform hover:scale-105`}
                  >
                    <span className="mr-3 flex-shrink-0">{option.icon}</span>
                    <span className="flex-1 text-left font-medium">
                      {option.name === 'Copy Link' && copied ? 'Copied!' : option.name}
                    </span>
                  </button>
                ))}
              </div>
              
              {/* URL Preview */}
              <div className="mt-4 p-3 bg-neutral-800 rounded-lg">
                <p className="text-xs text-neutral-400 mb-1">Share URL:</p>
                <p className="text-sm text-neutral-300 break-all">{artistUrl}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;