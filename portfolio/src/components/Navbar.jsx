import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            MyPortfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaBars className="text-2xl text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4">
            <MobileNavLinks setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <>
    <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
    <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
    <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
    <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
  </>
);

const MobileNavLinks = ({ setIsMenuOpen }) => (
  <>
    <Link 
      to="/" 
      className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2"
      onClick={() => setIsMenuOpen(false)}
    >
      Home
    </Link>
    <Link 
      to="/about" 
      className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2"
      onClick={() => setIsMenuOpen(false)}
    >
      About
    </Link>
    <Link 
      to="/projects" 
      className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2"
      onClick={() => setIsMenuOpen(false)}
    >
      Projects
    </Link>
    <Link 
      to="/contact" 
      className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2"
      onClick={() => setIsMenuOpen(false)}
    >
      Contact
    </Link>
  </>
);

export default Navbar;