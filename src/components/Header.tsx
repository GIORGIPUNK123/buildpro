import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageProvider';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { messages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = messages.header.nav;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className='container mx-auto px-6 lg:px-12'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <a href='#home' className='group'>
            <h1 className='text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300'>
              {messages.header.brand}
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='relative text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 group'
              >
                {link.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300'></span>
              </a>
            ))}
            <a
              href='#contact'
              className='px-5 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300'
            >
              {messages.header.cta}
            </a>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors'
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
          }`}
        >
          <nav className='flex flex-col space-y-4 pb-6'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className='text-gray-700 hover:text-gray-900 font-medium py-2 border-b border-gray-200 hover:border-purple-600 transition-all duration-300'
              >
                {link.label}
              </a>
            ))}
            <a
              href='#contact'
              onClick={() => setMobileMenuOpen(false)}
              className='px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-center hover:shadow-lg transition-all duration-300'
            >
              {messages.header.cta}
            </a>
            <div className='pt-2'>
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
