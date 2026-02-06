import { Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

export const Pricing = () => {
  const { messages } = useLanguage();
  const copy = messages.pricing;

  const packages = [
    {
      name: copy.packages[0].name,
      price: copy.packages[0].price,
      period: copy.packages[0].period,
      description: copy.packages[0].description,
      features: copy.packages[0].features,
      gradient: 'from-blue-500 to-cyan-500',
      popular: false,
    },
    {
      name: copy.packages[1].name,
      price: copy.packages[1].price,
      period: copy.packages[1].period,
      description: copy.packages[1].description,
      features: copy.packages[1].features,
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: copy.packages[2].name,
      price: copy.packages[2].price,
      period: copy.packages[2].period,
      description: copy.packages[2].description,
      features: copy.packages[2].features,
      gradient: 'from-orange-500 to-red-500',
      popular: false,
    },
  ];

  return (
    <section
      id='pricing'
      className='py-24 lg:py-32 bg-linear-to-br from-gray-50 to-blue-50/30'
    >
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

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 ${
                pkg.popular
                  ? 'border-purple-500 shadow-2xl scale-105 lg:scale-110'
                  : 'border-gray-100 hover:shadow-2xl hover:-translate-y-2'
              }`}
            >
              {pkg.popular && (
                <div className='absolute -top-5 left-1/2 -translate-x-1/2'>
                  <span className='bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2'>
                    <Sparkles className='w-4 h-4' />
                    {copy.popularBadge}
                  </span>
                </div>
              )}

              <div className='text-center mb-8'>
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br ${pkg.gradient} flex items-center justify-center`}
                >
                  <span className='text-3xl font-bold text-white'>
                    {idx + 1}
                  </span>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                  {pkg.name}
                </h3>
                <p className='text-gray-600 mb-6'>{pkg.description}</p>
                <div className='mb-2'>
                  <span className='text-5xl font-bold text-gray-900'>
                    {pkg.price}
                  </span>
                  {pkg.price !== copy.customPrice && (
                    <span className='text-gray-600 ml-2'>{pkg.period}</span>
                  )}
                </div>
                {idx < 2 && (
                  <div className='inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold'>
                    {copy.freeDesign}
                  </div>
                )}
              </div>

              <ul className='space-y-4 mb-8'>
                {pkg.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className='flex items-start gap-3'>
                    <div
                      className={`w-6 h-6 rounded-full bg-linear-to-br ${pkg.gradient} flex items-center justify-center shrink-0 mt-0.5`}
                    >
                      <Check className='w-4 h-4 text-white' />
                    </div>
                    <span className='text-gray-700'>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href='#contact'
                className={`block w-full text-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                }`}
              >
                {copy.ctaButton}
              </a>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <p className='text-gray-600 text-lg'>
            {copy.guarantee}{' '}
            <span className='font-semibold text-gray-900'>
              {copy.guaranteeHighlight}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
