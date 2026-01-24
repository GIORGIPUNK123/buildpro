import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

export const Hero = () => {
  const { messages } = useLanguage();
  const hero = messages.hero;

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50'
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className='container mx-auto px-6 lg:px-12 pt-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Text Content */}
          <div className='text-center lg:text-left space-y-8'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200'>
              <Sparkles className='w-4 h-4 text-purple-600' />
              <span className='text-sm font-medium text-gray-700'>
                {hero.badge}
              </span>
            </div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
              <span className='bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
                {hero.titleLine1}
              </span>
              <br />
              <span className='text-gray-900'>{hero.titleLine2}</span>
            </h1>

            <p className='text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0'>
              {hero.description}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <a
                href='#contact'
                className='group px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'
              >
                {hero.primaryCta}
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
              </a>
              <a
                href='#projects'
                className='px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200'
              >
                {hero.secondaryCta}
              </a>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8'>
              {hero.stats.map((stat, idx) => (
                <div key={idx} className='text-center lg:text-left'>
                  <div className='text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                    {stat.number}
                  </div>
                  <div className='text-sm text-gray-600 font-medium'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className='relative'>
            <div className='relative aspect-square max-w-lg mx-auto'>
              {/* Floating Cards */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='absolute top-0 left-0 w-48 h-48 bg-white rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 p-6 border border-gray-100'>
                  <div className='w-full h-full bg-linear-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center'>
                    <div className='text-6xl'>🎨</div>
                  </div>
                </div>
                <div className='absolute top-0 right-0 w-48 h-48 bg-white rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 p-6 border border-gray-100'>
                  <div className='w-full h-full bg-linear-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center'>
                    <div className='text-6xl'>💻</div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-1/4 w-48 h-48 bg-white rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 p-6 border border-gray-100'>
                  <div className='w-full h-full bg-linear-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center'>
                    <div className='text-6xl'>🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
