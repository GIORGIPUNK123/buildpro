import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '../config/seo';

interface StructuredDataProps {
  type:
    | 'Organization'
    | 'LocalBusiness'
    | 'Product'
    | 'Article'
    | 'BreadcrumbList';
  data: Record<string, any>;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  const schemaData = {
    ...baseStructure,
    ...data,
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

// Organization Schema
export const organizationSchema = {
  '@type': 'Organization',
  name: 'BuildPro',
  url: SEO_CONFIG.siteUrl,
  logo: `${SEO_CONFIG.siteUrl}/logo.png`,
  description: SEO_CONFIG.description,
  sameAs: [
    'https://www.linkedin.com/company/buildpro', // Update with your URLs
    'https://twitter.com/buildpro',
    'https://www.instagram.com/buildpro',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: 'buildprogeo@gmail.com', // Update with your email
    availableLanguage: ['en', 'ge'],
  },
};

// Local Business Schema
export const localBusinessSchema = {
  '@type': 'LocalBusiness',
  name: 'BuildPro',
  image: `${SEO_CONFIG.siteUrl}/logo.png`,
  description: SEO_CONFIG.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: '00000',
    addressCountry: 'US',
  },
  telephone: '+1-123-456-7890', // Update with your phone
  priceRange: '$$',
};

// Breadcrumb Schema
export const getBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => {
  const breadcrumbs = [{ name: 'Home', url: SEO_CONFIG.siteUrl }, ...items];

  return {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
