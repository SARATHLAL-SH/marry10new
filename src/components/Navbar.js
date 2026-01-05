'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('/');
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const pathname = usePathname();

  // Update active tab based on current route
  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/admin', label: 'Admin', isSpecial: true }
  ];

  const isActive = (href) => activeTab === href;

  const getNavLinkClass = (item) => {
    const baseClasses = "text-2xl transition-all duration-300 font-bold py-2 px-4 rounded-lg relative overflow-hidden group";
    
    if (item.isSpecial) {
      return `${baseClasses} ${
        isActive(item.href) 
          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/25' 
          : 'text-secondary bg-secondary/5 hover:bg-secondary/10 hover:shadow-md'
      }`;
    }

    return `${baseClasses} ${
      isActive(item.href)
        ? 'text-white bg-white/20 shadow-lg'
        : 'text-white hover:text-primary hover:bg-white'
    }`;
  };

  const getMobileNavLinkClass = (item) => {
    const baseClasses = "transition-all duration-300 font-bold py-3 px-4 rounded-lg text-center border-l-4";
    
    if (item.isSpecial) {
      return `${baseClasses} ${
        isActive(item.href)
          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-yellow-700 shadow-lg'
          : 'text-secondary bg-secondary/5 border-secondary/20 hover:bg-secondary/10'
      }`;
    }

    return `${baseClasses} ${
      isActive(item.href)
        ? 'bg-white/10 text-white border-white shadow-lg'
        : 'text-secondary border-transparent hover:bg-secondary/10 hover:border-secondary/30'
    }`;
  };

  // Find active tab index for the bottom indicator
  const activeTabIndex = navigationItems.findIndex(item => isActive(item.href));

  return (
    <nav className="bg-gradient-to-r from-white to-primary shadow-2xl border-b-4 border-yellow-600 sticky top-0 z-50 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Enhanced Logo/Brand */}
          <div 
            className="flex items-center space-x-3 group cursor-pointer"
            onMouseEnter={() => setIsHoveringLogo(true)}
            onMouseLeave={() => setIsHoveringLogo(false)}
          >
            {/* Enhanced Logo Container with multiple glow layers */}
            <div className="relative">
              {/* Outer glow rings */}
              <div className={`absolute -inset-4 bg-gradient-to-r from-yellow-400/30 via-pink-500/20 to-yellow-400/30 rounded-full blur-xl transition-all duration-1000 ${
                isHoveringLogo ? 'opacity-100 scale-110' : 'opacity-50 scale-100'
              }`}></div>
              
              {/* Middle glow ring */}
              <div className={`absolute -inset-2 bg-gradient-to-r from-yellow-300/40 via-pink-400/20 to-yellow-300/40 rounded-full blur-lg transition-all duration-700 ${
                isHoveringLogo ? 'opacity-80 scale-105 animate-pulse' : 'opacity-40'
              }`}></div>
              
              {/* Inner glow ring */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-yellow-200/60 via-pink-300/30 to-yellow-200/60 rounded-full blur-md transition-all duration-500 ${
                isHoveringLogo ? 'opacity-100 animate-spin-slow' : 'opacity-30'
              }`}></div>
              
              {/* Rotating particles around logo */}
              {isHoveringLogo && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                      style={{
                        transform: `rotate(${i * 45}deg) translateX(50px)`,
                        animation: `orbit 2s linear infinite`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    ></div>
                  ))}
                </>
              )}

              {/* Logo image with enhanced effects */}
              <div className="relative w-18 h-18 rounded-full flex items-center justify-center overflow-hidden border-3 border-yellow-500 shadow-2xl group-hover:scale-110 transition-all duration-500 z-10 backdrop-blur-sm bg-white/10">
                {/* Shine effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-700 ${
                  isHoveringLogo ? 'opacity-100 animate-shine' : ''
                }`}></div>
                
                {/* Pulsing ring */}
                <div className={`absolute -inset-1 border-2 border-yellow-400/50 rounded-full transition-all duration-700 ${
                  isHoveringLogo ? 'animate-ping opacity-20' : 'opacity-0'
                }`}></div>
                
                <img 
                  src="/images/m10_logo.jpeg" 
                  alt="Matrimony Logo" 
                  className="w-full h-full object-cover relative z-10"
                />
                
                {/* Glowing overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-pink-500/10 to-yellow-400/20 rounded-full transition-all duration-500 ${
                  isHoveringLogo ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
              
              {/* Floating particles */}
              {isHoveringLogo && (
                <>
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={`particle-${i}`}
                      className="absolute w-2 h-2 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full opacity-70"
                      style={{
                        left: `${Math.random() * 60 + 20}%`,
                        top: `${Math.random() * 60 + 20}%`,
                        animation: `float 3s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    ></div>
                  ))}
                </>
              )}
            </div>
            
            {/* Enhanced Text with glow effects */}
            <div className="text-4xl font-bold text-secondary drop-shadow-lg relative">
              {/* Main text with gradient */}
              <span className="relative z-20 bg-gradient-to-r from-yellow-600 via-pink-500 to-yellow-600 bg-clip-text text-transparent animate-gradient-x">
                Marry@10
              </span>
              
              {/* Glowing text shadow */}
              <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 blur-xl opacity-0 transition-opacity duration-500 ${
                isHoveringLogo ? 'opacity-70' : 'opacity-30'
              }`}></div>
              
              {/* Animated underline */}
              <div className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 rounded-full transition-all duration-500 ${
                isHoveringLogo ? 'w-full opacity-100' : 'w-0 opacity-0'
              }`}></div>
              
              {/* Sparkling dots */}
              {isHoveringLogo && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={`sparkle-${i}`}
                      className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                      style={{
                        top: '-5px',
                        left: `${20 + i * 30}%`,
                        animation: `sparkle 1.5s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    ></div>
                  ))}
                </>
              )}
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={getNavLinkClass(item)}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg"></div>
                )}
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-secondary p-3 hover:bg-white/10 rounded-lg transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45' : '-translate-y-2'
              }`}></span>
              <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45' : 'translate-y-2'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={getMobileNavLinkClass(item)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 text-lg">{item.label}</span>
                  {isActive(item.href) && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}