import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

export const Cta = () => {
  const { messages } = useLanguage();
  const copy = messages.cta;

  return (
    <section className='py-24 lg:py-32 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className='container mx-auto px-6 lg:px-12 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30'>
            <Sparkles className='w-4 h-4 text-white' />
            <span className='text-sm font-medium text-white'>{copy.badge}</span>
          </div>

          {/* Heading */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
            {copy.headingLine1}
            <br />
            {copy.headingLine2}
          </h2>

          {/* Description */}
          <p className='text-xl text-white/90 mb-10 max-w-2xl mx-auto'>
            {copy.description}
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#contact'
              className='group px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'
            >
              {copy.primaryCta}
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </a>
            <a
              href='#projects'
              className='px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300'
            >
              {copy.secondaryCta}
            </a>
          </div>

          {/* Trust Indicators */}
          <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20'>
            {copy.stats.map((stat, idx) => (
              <div key={idx} className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
                  {stat.value}
                </div>
                <div className='text-sm text-white/80 font-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
