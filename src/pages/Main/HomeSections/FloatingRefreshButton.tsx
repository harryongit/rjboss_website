import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const FloatingRefreshButton = ({ handleRefresh }: { handleRefresh: () => void }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(prev => !prev);
    }, 3000); // toggle every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Button
      onClick={handleRefresh}
      className={`
        fixed bottom-10 right-6
        bg-gradient-to-r from-orange-500 to-rose-600
        text-white
        rounded-full
        shadow-lg shadow-orange-400/50
        flex items-center justify-center
        overflow-hidden
        transition-all duration-500 ease-in-out
        z-50
        px-3 py-2
        ${showText ? 'scale-105 shadow-[0_0_20px_rgba(255,100,100,0.6)]' : 'scale-100 shadow-lg'}
      `}
      style={{
        width: showText ? '140px' : '50px', // button expands for text
      }}
    >
      {/* Rotating icon */}
      <div className="flex items-center justify-center flex-shrink-0 ">
        <RefreshCw
          className={`h-5 w-5 transition-transform duration-500 ${
            showText ? 'animate-spin-slow' : 'animate-spin-slow'
          }`}
        />
      </div>

      {/* Text slides in from left */}
      <div
        className="overflow-hidden"
        style={{
          width: showText ? '80px' : '0px',
          transition: 'width 0.5s ease-in-out',
        }}
      >
        <span
          className={`text-sm font-semibold inline-block  transition-all duration-500 ${
            showText ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          Refresh
        </span>
      </div>
    </Button>
  );
};

export default FloatingRefreshButton;
