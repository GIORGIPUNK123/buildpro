import { Heart } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

export const Footer = () => {
  const { messages } = useLanguage();
  const copy = messages.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-6 lg:px-12'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* Brand */}
          <div>
            <h3 className='text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4'>
              BuildPro
            </h3>
            <p className='text-gray-400'>{copy.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-semibold text-lg mb-4'>
              {copy.quickLinksTitle}
            </h4>
            <ul className='space-y-2'>
              {copy.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors duration-300'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='font-semibold text-lg mb-4'>{copy.contactTitle}</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a
                  href='mailto:giorgirock@hotmail.com'
                  className='hover:text-white transition-colors duration-300'
                >
                  giorgirock@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/giorgi-charashvili/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  {copy.linkedIn}
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  {copy.facebook}
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  {copy.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-800 text-center'>
          <p className='text-gray-400 flex items-center justify-center gap-2'>
            {copy.madeWith}{' '}
            <Heart className='w-4 h-4 text-red-500 fill-current' />{' '}
            {copy.byline} © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};
