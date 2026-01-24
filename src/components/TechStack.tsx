import { useLanguage } from '../i18n/LanguageProvider';

export const TechStack = () => {
  const { messages } = useLanguage();
  const copy = messages.techStack;

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-600' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-teal-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-600' },
    { name: 'Express.js', icon: '⚙️', color: 'from-gray-700 to-gray-800' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML5', icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '🎯', color: 'from-blue-400 to-blue-600' },
    { name: 'Git', icon: '📦', color: 'from-orange-600 to-red-600' },
    { name: 'Figma', icon: '🎭', color: 'from-purple-500 to-pink-500' },
    { name: 'Vercel', icon: '▲', color: 'from-black to-gray-800' },
    { name: 'Firebase', icon: '🔥', color: 'from-orange-400 to-red-500' },
  ];

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

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className='group relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-3'
            >
              {/* Icon */}
              <div className='text-5xl group-hover:scale-125 transition-transform duration-300'>
                {tech.icon}
              </div>

              {/* Name */}
              <p className='font-semibold text-gray-900 text-center'>
                {tech.name}
              </p>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
