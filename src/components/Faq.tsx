import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

export const Faq = () => {
  const { messages } = useLanguage();
  const copy = messages.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-24 lg:py-32 bg-linear-to-br from-gray-50 to-blue-50/30'>
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

        <div className='max-w-4xl mx-auto space-y-4'>
          {copy.items.map((faq, idx) => (
            <div
              key={idx}
              className='bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300'
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className='w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300'
              >
                <h3 className='text-lg font-semibold text-gray-900 pr-8'>
                  {faq.question}
                </h3>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                >
                  {openIndex === idx ? (
                    <Minus className='w-5 h-5 text-white' />
                  ) : (
                    <Plus className='w-5 h-5 text-white' />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className='px-6 pb-6 text-gray-600 leading-relaxed'>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
