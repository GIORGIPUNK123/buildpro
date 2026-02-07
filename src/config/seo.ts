export const SEO_CONFIG = {
  siteName: 'BuildPro',
  siteUrl: 'https://buildprogeorgia.com', // Change this to your domain
  description:
    'Premium web development and software solutions for your business',
  keywords: [
    'web development',
    'software development',
    'digital solutions',
    'custom software',
  ],
  locale: 'en_US',
  twitterHandle: '@buildpro', // Change this to your Twitter handle
  socialImage: '/logo.png', // Add an OG image to public folder
};

export const ROUTES_SEO: Record<
  string,
  { title: string; description: string; keywords?: string[] }
> = {
  '/': {
    title: 'BuildPro - Web Development & Software Solutions',
    description:
      'Premium web development and software solutions for your business. Expert team ready to build your digital future.',
    keywords: ['web development', 'software development', 'digital solutions'],
  },
  '/services': {
    title: 'Our Services - BuildPro',
    description:
      'Explore our comprehensive web development and software services',
  },
  '/projects': {
    title: 'Portfolio - BuildPro',
    description: 'View our successful projects and case studies',
  },
  '/pricing': {
    title: 'Pricing Plans - BuildPro',
    description: 'Flexible pricing plans for all business sizes',
  },
  '/contact': {
    title: 'Contact Us - BuildPro',
    description:
      'Get in touch with our team. We are ready to help you build your next project',
  },
};
