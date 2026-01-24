import {
  Smartphone,
  Layout,
  TrendingUp,
  Code,
  Zap,
  Shield,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

export const Services = () => {
  const { messages } = useLanguage();
  const copy = messages.services;

  const services = [
    {
      icon: Layout,
      title: 'Custom Website Design',
      description:
        'Unique, pixel-perfect designs tailored to your brand identity and business goals.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Responsive Development',
      description:
        'Flawless performance across all devices - desktop, tablet, and mobile.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description:
        'Boost your visibility and rank higher in search results with our SEO expertise.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Code,
      title: 'Clean Code',
      description:
        'Well-structured, maintainable code following industry best practices.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Optimized performance for blazing fast load times and smooth interactions.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Security First',
      description:
        'Enterprise-grade security measures to protect your website and data.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id='services' className='py-24 lg:py-32 bg-white'>
      <div className='container mx-auto px-6 lg:px-12'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            {copy.title}{' '}
            <span className='bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {copy.highlight}
            </span>
          </h2>
          <p className='text-xl text-gray-600'>{copy.subtitle}</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, idx) => {
            const Icon = service.icon;
            const translated = copy.items[idx];
            return (
              <div
                key={idx}
                className='group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className='w-8 h-8 text-white' />
                </div>

                {/* Content */}
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  {translated?.title ?? service.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {translated?.description ?? service.description}
                </p>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
