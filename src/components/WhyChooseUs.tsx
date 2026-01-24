import {
  Award,
  Users,
  Headphones,
  Clock,
  Target,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

export const WhyChooseUs = () => {
  const { messages } = useLanguage();
  const copy = messages.whyChooseUs;

  const reasons = [
    {
      icon: Award,
      title: 'Expert Team',
      description:
        'Our experienced developers and designers bring years of expertise to every project.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description:
        'We focus on creating websites that convert visitors into customers and drive real business growth.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description:
        'We respect your time and always deliver projects on schedule without compromising quality.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description:
        'Our dedicated support team is always available to help you with any questions or issues.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description:
        'We build websites that grow with your business, ensuring long-term success and flexibility.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description:
        'Your satisfaction is our priority. We work closely with you to ensure your vision comes to life.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className='py-24 lg:py-32 bg-linear-to-br from-gray-50 to-blue-50/30 relative overflow-hidden'>
      {/* Background Decoration */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-6 lg:px-12 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            {copy.title}{' '}
            <span className='bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {copy.highlight}
            </span>
          </h2>
          <p className='text-xl text-gray-600'>{copy.subtitle}</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            const translated = copy.items[idx];
            return (
              <div
                key={idx}
                className='group relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
              >
                {/* Animated border gradient on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 rounded-xl bg-linear-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <Icon className='w-8 h-8 text-white' />
                </div>

                {/* Content */}
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  {translated?.title ?? reason.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {translated?.description ?? reason.description}
                </p>

                {/* Decorative element */}
                <div
                  className={`absolute top-6 right-6 w-20 h-20 rounded-full bg-linear-to-br ${reason.color} opacity-5 group-hover:scale-150 transition-transform duration-500`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <p className='text-lg text-gray-700 mb-6 font-medium'>
            {copy.ctaPrompt}
          </p>
          <a
            href='#contact'
            className='inline-block px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'
          >
            {copy.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
};
