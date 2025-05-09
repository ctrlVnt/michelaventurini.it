
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled 
          ? "py-3 bg-white shadow-md" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">Michela Venturini</h1>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <button 
              onClick={() => scrollToSection('home')} 
              className="nav-link font-medium"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')} 
              className="nav-link font-medium"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('photos')} 
              className="nav-link font-medium"
            >
              Photos
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link font-medium"
            >
              Contact
            </button>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <button 
                onClick={() => scrollToSection('home')} 
                className="nav-link font-medium"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="nav-link font-medium"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('photos')} 
                className="nav-link font-medium"
              >
                Photos
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="nav-link font-medium"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
