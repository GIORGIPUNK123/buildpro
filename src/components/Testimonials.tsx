import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

export const Testimonials = () => {
  const { messages } = useLanguage();
  const copy = messages.testimonials;
  const testimonials = [
    {
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    },
  ];

  return (
    <section className='py-24 lg:py-32 bg-white'>
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
          {testimonials.map((testimonial, idx) => {
            const translated = copy.items[idx];
            if (!translated) return null;

            return (
              <div
                key={idx}
                className='relative bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
              >
                {/* Quote Icon */}
                <div className='absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg'>
                  <Quote className='w-6 h-6 text-white' />
                </div>

                {/* Rating */}
                <div className='flex gap-1 mb-4'>
                  {[...Array(translated.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-5 h-5 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>

                {/* Content */}
                <p className='text-gray-700 leading-relaxed mb-6 italic'>
                  "{translated.content}"
                </p>

                {/* Author */}
                <div className='flex items-center gap-4 pt-6 border-t border-gray-200'>
                  <img
                    src={testimonial.image}
                    alt={translated.name}
                    className='w-14 h-14 rounded-full object-cover border-2 border-white shadow-md'
                  />
                  <div>
                    <h4 className='font-bold text-gray-900'>
                      {translated.name}
                    </h4>
                    <p className='text-sm text-gray-600'>{translated.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
