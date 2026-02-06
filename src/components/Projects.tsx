import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import britishworld from '../images/british-world.png';
import portfolioImg from '../images/portfolio.png';
export const Projects = () => {
  const { messages } = useLanguage();
  const copy = messages.projects;

  const projects = [
    {
      image: britishworld,
      link: 'https://english-pied-kappa.vercel.app/',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      image: portfolioImg,
      link: 'https://www.giorgiportfolio.vercel.app/',
      github: 'https://github.com/GIORGIPUNK123/Portfolio',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      image:
        'https://images.unsplash.com/photo-1560202582-a391c31ec300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjkyNTc3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://11landingpagedemo11.netlify.app',
      github: 'https://github.com/GIORGIPUNK123/landing-page',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      gradient: 'from-green-600 to-emerald-600',
    },
  ];

  return (
    <section
      id='projects'
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

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, idx) => {
            const translated = copy.items[idx];
            if (!translated) return null;

            return (
              <div
                key={idx}
                className='group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'
              >
                {/* Image */}
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='relative h-64 overflow-hidden'>
                    <img
                      src={project.image}
                      alt={translated.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>
                </a>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                    {translated.title}
                  </h3>
                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    {translated.description}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {translated.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.link || project.github) && (
                    <div className='flex gap-4 pt-4 border-t border-gray-100'>
                      {project.link && (
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group/link'
                        >
                          <ExternalLink className='w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform' />
                          {copy.visitLabel}
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors group/link'
                        >
                          <Github className='w-4 h-4 group-hover/link:scale-110 transition-transform' />
                          {copy.codeLabel}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
