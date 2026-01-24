import { MessageCircle, Lightbulb, Code2, Rocket } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

export const Process = () => {
  const { messages } = useLanguage();
  const copy = messages.process;

  const steps = [
    {
      icon: MessageCircle,
      title: 'Discovery',
      description:
        'We start by understanding your business goals, target audience, and project requirements through detailed consultation.',
      number: '01',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Design',
      description:
        'Our designers create stunning mockups and prototypes that align with your brand and vision.',
      number: '02',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code2,
      title: 'Development',
      description:
        'We bring designs to life with clean, efficient code and modern web technologies.',
      number: '03',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description:
        'After thorough testing, we deploy your website and provide ongoing support and maintenance.',
      number: '04',
      color: 'from-green-500 to-emerald-500',
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

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const translated = copy.steps[idx];
            return (
              <div key={idx} className='relative group'>
                {/* Connecting Line (hidden on mobile) */}
                {idx < steps.length - 1 && (
                  <div className='hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-linear-to-r from-gray-300 to-gray-200 z-0'></div>
                )}

                <div className='relative z-10 bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl'>
                  {/* Number Badge */}
                  <div
                    className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {translated?.number ?? step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-linear-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className='w-8 h-8 text-white' />
                  </div>

                  {/* Content */}
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {translated?.title ?? step.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {translated?.description ?? step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
