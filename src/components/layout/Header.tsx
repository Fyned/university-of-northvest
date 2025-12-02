import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Container } from '../common/Container';
import { TopBar } from './TopBar';
import { Button } from '../common/Button';
import logoHorizontal from '../../assets/images/logo-horizontal.png'; 

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics', hasDropdown: true },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Student Life', href: '/student-life' },
  { label: 'Research', href: '/research' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      <TopBar />
      
      <div className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logoHorizontal} 
                alt="University of NorthWest" 
                className={`transition-all duration-300 object-contain ${isScrolled ? 'h-12' : 'h-16'}`}
              />
            </Link>

            {/* Masaüstü Menü */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link 
                    to={item.href}
                    className="flex items-center text-primary-900 font-medium hover:text-secondary-600 transition-colors py-2"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Aksiyon Butonları */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-primary-900 hover:text-secondary-600">
                <Search className="w-5 h-5" />
              </button>
              <Button size="sm" className="hidden xl:inline-flex">
                Apply Now
              </Button>
            </div>

            {/* Mobil Menü Butonu */}
            <button 
              className="lg:hidden p-2 text-primary-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobil Menü İçeriği */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 absolute w-full left-0 shadow-lg">
          <Container className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.href}
                className="block py-2 text-primary-900 font-medium hover:text-secondary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-100">
              <Button className="w-full">Apply Now</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};