# How to Update Existing Components for SEO

This guide shows how to add SEO to your existing components.

## Example: Updating the Hero Component

### Before (Current)

```tsx
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-linear-to-b'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold mb-4'>Build Your Future</h1>
        <p className='text-xl mb-8'>Professional web development solutions</p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};
```

### After (With SEO)

```tsx
import { Button } from './ui/button';
import { SEO } from './SEO';
import { OptimizedImage } from '../utils/seoUtils';

export const Hero = () => {
  return (
    <>
      <SEO
        title='BuildPro - Professional Web Development Solutions'
        description='Expert web development and software solutions for your business. Build your digital future with our experienced team.'
        keywords={[
          'web development',
          'software solutions',
          'digital transformation',
        ]}
      />

      <section className='min-h-screen flex items-center justify-center bg-linear-to-b'>
        <div className='text-center max-w-4xl px-4'>
          {/* Main heading with semantic structure */}
          <h1 className='text-5xl font-bold mb-4'>
            Professional Web Development Solutions
          </h1>

          {/* Descriptive subheading */}
          <p className='text-xl text-gray-600 mb-8'>
            Build your digital future with expert web and software development
            solutions tailored to your business needs
          </p>

          {/* Hero image with proper SEO attributes */}
          <OptimizedImage
            src='/images/hero-image.jpg'
            alt='Professional web development team working on project'
            width={800}
            height={600}
            className='rounded-lg mb-8'
            loading='eager'
          />

          {/* Clear call-to-action */}
          <Button className='px-8 py-4 text-lg'>Get Started Today</Button>

          {/* Additional SEO-friendly content */}
          <div className='mt-16 grid grid-cols-3 gap-4 text-sm text-gray-600'>
            <div>
              <p className='font-bold'>Proven Track Record</p>
              <p>100+ successful projects</p>
            </div>
            <div>
              <p className='font-bold'>Expert Team</p>
              <p>12+ years experience</p>
            </div>
            <div>
              <p className='font-bold'>Fast Delivery</p>
              <p>30-day turnaround</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
```

## Example: Updating the Services Component

### Adding SEO with Structured Data

```tsx
import { SEO } from './SEO';
import { StructuredData } from './StructuredData';

export const Services = () => {
  const servicesList = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: '🌐',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: '📱',
    },
    {
      title: 'E-Commerce',
      description: 'Fully functional online stores with payment integration',
      icon: '🛒',
    },
  ];

  const serviceSchema = {
    '@type': 'Service',
    name: 'Web Development Services',
    provider: {
      '@type': 'Organization',
      name: 'BuildPro',
    },
    areaServed: 'Worldwide',
    availableLanguage: 'en',
  };

  return (
    <>
      <SEO
        title='Web Development Services | BuildPro'
        description='Comprehensive web development, mobile app, and e-commerce services for businesses of all sizes'
        keywords={[
          'web development',
          'mobile apps',
          'e-commerce',
          'custom software',
        ]}
        url='https://yourdomain.com/services'
      />

      <StructuredData type='Service' data={serviceSchema} />

      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-4xl font-bold text-center mb-4'>Our Services</h1>
          <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
            Comprehensive web development and software solutions designed to
            meet your unique business needs
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {servicesList.map((service) => (
              <article
                key={service.title}
                className='border rounded-lg p-6 hover:shadow-lg transition'
              >
                <div className='text-4xl mb-4'>{service.icon}</div>
                <h2 className='text-2xl font-bold mb-2'>{service.title}</h2>
                <p className='text-gray-600 mb-4'>{service.description}</p>
                <a
                  href='#contact'
                  className='text-blue-600 font-bold hover:underline'
                >
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
```

## Example: Updating the Projects Component

```tsx
import { SEO } from './SEO';
import { OptimizedImage } from '../utils/seoUtils';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url?: string;
  technologies: string[];
}

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description:
        'Full-featured online store with payment processing and inventory management',
      image: '/projects/ecommerce.jpg',
      imageAlt: 'E-commerce website showing product listings and shopping cart',
      url: 'https://example-ecommerce.com',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    // Add more projects
  ];

  return (
    <>
      <SEO
        title='Portfolio & Projects | BuildPro'
        description='Showcase of our completed web development projects and case studies. See what we can build for you.'
        keywords={[
          'portfolio',
          'projects',
          'case studies',
          'web development examples',
        ]}
        url='https://yourdomain.com/projects'
      />

      <section className='py-16 px-4 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-4xl font-bold text-center mb-4'>Our Projects</h1>
          <p className='text-center text-gray-600 mb-12'>
            Successful projects that showcase our expertise and commitment to
            excellence
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {projects.map((project) => (
              <article
                key={project.id}
                className='bg-white rounded-lg overflow-hidden shadow'
              >
                <OptimizedImage
                  src={project.image}
                  alt={project.imageAlt}
                  width={500}
                  height={300}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
                  <p className='text-gray-600 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      className='text-blue-600 font-bold hover:underline'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
```

## SEO Tips for Each Component

### Header/Navigation

- Add semantic nav element: `<nav>`
- Use descriptive link text
- Include site logo with alt text

### Hero Section

- Unique compelling H1 tag
- Clear value proposition
- Proper image alt text

### Services/Features

- Use H2 for each service title
- Descriptive paragraphs
- Include benefits clearly stated

### Projects/Portfolio

- Unique title per project
- Descriptive alt text for images
- Include project details
- Link to case studies if available

### Contact Form

- Meta description about contacting you
- Clear form labels
- Semantic HTML form elements

### Footer

- Include sitemap links
- Social media links with rel="noopener"
- Contact information as text (not just image)
- Copyright notice

## Component SEO Checklist

For each component, ensure:

- [ ] SEO component with unique title and description
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] All images have descriptive alt text
- [ ] Internal links use descriptive anchor text
- [ ] Semantic HTML elements (article, section, nav, etc.)
- [ ] No duplicate content
- [ ] Mobile responsive
- [ ] Proper link attributes (rel, target, title)

---

**Next Steps**: Update your components one by one using these examples as templates!
