import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Volume2, Play, AlertCircle } from 'lucide-react';

interface SoundCloudPlayerProps {
  track: {
    title: string;
    url: string;
    duration: string;
    plays: string;
    description: string;
  };
  index: number;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ track, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [embedError, setEmbedError] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  // Convert SoundCloud URL to embed URL
  const getEmbedUrl = (url: string) => {
    // Extract track ID or use the full URL for oEmbed
    const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
    return embedUrl;
  };

  const embedUrl = getEmbedUrl(track.url);

  // Handle iframe load error
  const handleIframeError = () => {
    console.log('SoundCloud iframe failed to load');
    setEmbedError(true);
  };

  // Handle iframe load success
  const handleIframeLoad = () => {
    console.log('SoundCloud iframe loaded successfully');
    setEmbedError(false);
  };

  const handlePlayClick = () => {
    setShowPlayer(true);
    setEmbedError(false);
  };

  return (
    <div className="bg-background-light rounded-xl overflow-hidden hover:bg-neutral-800 transition-all duration-300 group">
      <div className="p-6">
        {/* Track Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4 flex-1">
            {/* Track Icon */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
              <Play size={20} className="text-white ml-1" />
            </div>
            
            {/* Track Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-lg mb-1 text-white group-hover:text-orange-400 transition-colors">
                {track.title}
              </h4>
              
              <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-2">
                <span className="flex items-center">
                  <Volume2 size={14} className="mr-1" />
                  {track.duration}
                </span>
                <span className="flex items-center">
                  <Play size={14} className="mr-1" />
                  {track.plays} plays
                </span>
              </div>
            </div>
          </div>
          
          {/* External Link */}
          <a
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-orange-400 hover:text-orange-300 transition-colors flex items-center text-sm"
          >
            <ExternalLink size={16} className="mr-1" />
            Open in SoundCloud
          </a>
        </div>

        {/* SoundCloud Embedded Player or Load Button */}
        <div className="mb-4">
          {showPlayer ? (
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={embedUrl}
              className="rounded-lg"
              title={track.title}
              onError={handleIframeError}
              onLoad={handleIframeLoad}
            />
          ) : (
            <div className="bg-neutral-800 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Play size={24} className="text-orange-400 mr-2" />
                <span className="text-orange-400 font-medium">Click to Load Player</span>
              </div>
              <p className="text-neutral-400 text-sm mb-4">
                Click the button below to load the SoundCloud player, or listen directly on SoundCloud.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handlePlayClick}
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Load SoundCloud Player
                </button>
                
                <a
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm2 0h1v-8.848c-.508-.079-.623-.05-1-.10v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.25 0 .896.394 1.703 1 2.25v-4.5zm10.237 5.25c-.185 0-.312-.149-.312-.35v-8.55c0-.201.127-.35.312-.35.185 0 .313.149.313.35v8.55c0 .201-.128.35-.313.35zm3.736-2.083c0 2.59-2.1 4.691-4.691 4.691-.185 0-.312-.149-.312-.35v-8.55c0-.201.127-.35.312-.35 2.591 0 4.691 2.1 4.691 4.559z"/>
                  </svg>
                  Listen on SoundCloud
                </a>
              </div>
            </div>
          )}
          
          {/* Show error message if iframe fails to load */}
          {embedError && showPlayer && (
            <div className="mt-4 bg-neutral-800 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <AlertCircle size={20} className="text-orange-400 mr-2" />
                <span className="text-orange-400 font-medium">Player Unavailable</span>
              </div>
              <p className="text-neutral-400 text-sm mb-3">
                The embedded player cannot be loaded due to browser security restrictions.
              </p>
              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Listen on SoundCloud
              </a>
            </div>
          )}
        </div>

        {/* Track Description */}
        <div className="mb-4">
          <p className="text-neutral-400 text-sm leading-relaxed">
            {track.description}
          </p>
        </div>
        
        {/* Expandable Section */}
        <div className="pt-4 border-t border-neutral-700">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <span className="mr-2">
              {isExpanded ? 'Show Less' : 'Show More Details'}
            </span>
            {isExpanded ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          
          {isExpanded && (
            <div className="mt-3 space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-neutral-400">Track #:</span>
                  <span className="text-white ml-2">{index + 1}</span>
                </div>
                <div>
                  <span className="text-neutral-400">Platform:</span>
                  <span className="text-orange-400 ml-2">SoundCloud</span>
                </div>
                <div>
                  <span className="text-neutral-400">Genre:</span>
                  <span className="text-white ml-2">Electronic / Techno</span>
                </div>
                <div>
                  <span className="text-neutral-400">Artist:</span>
                  <span className="text-white ml-2">WRK</span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-neutral-600">
                <span className="text-neutral-400 text-xs">
                  {embedError && showPlayer
                    ? "Due to browser security restrictions, the embedded player may not work in all environments. Click the SoundCloud link above to listen directly on SoundCloud."
                    : "This track can be played using the embedded SoundCloud player above, or you can listen directly on SoundCloud."
                  }
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;