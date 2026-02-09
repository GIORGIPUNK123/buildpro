import { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Clock,
  Phone,
  Facebook,
  Instagram,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
export const Contact = () => {
  const { messages } = useLanguage();
  const copy = messages.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        'service_ckr6lj1',
        'template_1ldcwb4',
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'Build Pro',
          message: formData.message,
        },
        {
          publicKey: 'iBTo3uos_ljXLteKL',
        },
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.log('error:', error);
          toast.error('Failed to send message. Please try again.');
        },
      );
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id='contact'
      className='py-24 lg:py-32 bg-linear-to-br from-blue-50 via-white to-purple-50'
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

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                {copy.getInTouch}
              </h3>

              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0'>
                    <Mail className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {copy.emailLabel}
                    </h4>
                    <a
                      href={`mailto:${copy.emailValue}`}
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      {copy.emailValue}
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0'>
                    <Phone className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {copy.phoneLabel}
                    </h4>
                    <a
                      href={`tel:${copy.phoneValue}`}
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      {copy.phoneValue}
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0'>
                    <MapPin className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {copy.locationLabel}
                    </h4>
                    <p className='text-gray-600'>{copy.locationValue}</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0'>
                    <Clock className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {copy.responseLabel}
                    </h4>
                    <p className='text-gray-600'>{copy.responseValue}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className='mt-8 pt-8 border-t border-gray-200'>
                <h4 className='font-semibold text-gray-900 mb-4'>
                  {copy.connectLabel}
                </h4>
                <div className='flex flex-wrap gap-3'>
                  <a
                    href='https://www.facebook.com/profile.php?id=61587454905585'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300'
                  >
                    <Facebook className='w-5 h-5' />
                    {copy.facebook}
                  </a>
                  <a
                    href='https://www.instagram.com/buildpro.ge/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-6 py-3 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300'
                  >
                    <Instagram className='w-5 h-5' />
                    {copy.instagram}
                  </a>
                  <a
                    href={`mailto:${copy.emailValue}`}
                    className='flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300'
                  >
                    <Mail className='w-5 h-5' />
                    {copy.emailCta}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              {copy.formTitle}
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  {copy.fieldName}
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  {copy.fieldEmail}
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300'
                  placeholder='john@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  {copy.fieldMessage}
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none'
                  placeholder='Tell us about your project...'
                />
              </div>

              <button
                type='submit'
                className=' cursor-pointer w-full px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300'
              >
                <Send className='w-5 h-5' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
