/**
 * Example component showing proper SEO implementation
 * Use this as a template for your pages
 */

import { SEO } from './SEO';
import { StructuredData, getBreadcrumbSchema } from './StructuredData';
import { OptimizedImage } from '../utils/seoUtils';

export const ExamplePageWithSEO = () => {
  const breadcrumbs = [
    { name: 'Example Page', url: 'https://yourdomain.com/example' },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title='Professional Web Development Services | BuildPro'
        description='Expert web development services tailored to your business needs. We build responsive, fast, and SEO-friendly websites.'
        keywords={[
          'web development',
          'professional services',
          'custom solutions',
        ]}
        url='https://yourdomain.com/example'
      />

      {/* Breadcrumb Schema for Navigation */}
      <StructuredData
        type='BreadcrumbList'
        data={getBreadcrumbSchema(breadcrumbs)}
      />

      {/* Main Content */}
      <main className='container mx-auto px-4 py-12'>
        {/* H1 - Should appear exactly once per page */}
        <h1 className='text-4xl font-bold mb-4'>Your Main Page Title</h1>

        {/* Page Meta Description equivalent */}
        <p className='text-xl text-gray-600 mb-8'>
          This is your compelling page description that should match your meta
          description.
        </p>

        {/* H2 Section Headings */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Section Title</h2>
          <p>
            Add meaningful content here. Include your target keywords naturally
            throughout the text. Search engines look at content quality, so
            write for your users first.
          </p>

          {/* Optimized Image with proper alt text */}
          <OptimizedImage
            src='/images/example.jpg'
            alt='Descriptive alt text that explains the image content'
            width={800}
            height={600}
            className='my-6 rounded-lg'
            loading='lazy'
          />
        </section>

        {/* More sections with H2/H3 hierarchy */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Another Section</h2>

          <h3 className='text-2xl font-bold mb-3'>Subsection</h3>
          <p>
            Organize your content with proper heading hierarchy. This helps both
            users and search engines understand the structure of your page.
          </p>

          <ul className='list-disc list-inside space-y-2 my-4'>
            <li>Benefit or feature 1</li>
            <li>Benefit or feature 2</li>
            <li>Benefit or feature 3</li>
          </ul>
        </section>

        {/* Internal Links - Help SEO and user navigation */}
        <section className='my-12 bg-gray-50 p-6 rounded-lg'>
          <h2 className='text-2xl font-bold mb-4'>Related Resources</h2>
          <p>Link to your other pages internally:</p>
          <ul className='list-disc list-inside space-y-2'>
            <li>
              <a href='/services' className='text-blue-600 hover:underline'>
                Learn about our services
              </a>
            </li>
            <li>
              <a href='/projects' className='text-blue-600 hover:underline'>
                View our portfolio
              </a>
            </li>
            <li>
              <a href='/contact' className='text-blue-600 hover:underline'>
                Get in touch with us
              </a>
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className='my-12 bg-blue-600 text-white p-8 rounded-lg text-center'>
          <h2 className='text-3xl font-bold mb-4'>Ready to Get Started?</h2>
          <p className='text-lg mb-6'>
            Take the next step and partner with us for your next project.
          </p>
          <a
            href='/contact'
            className='bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100'
          >
            Contact Us Today
          </a>
        </section>
      </main>
    </>
  );
};

/**
 * SEO Implementation Tips:
 *
 * 1. Meta Tags:
 * - Every page needs unique title and description
 * - Title: 50-60 characters
 * - Description: 150-160 characters
 *
 * 2. Headings:
 * - Use exactly ONE <h1> per page
 * - Follow proper hierarchy: H1 → H2 → H3
 * - Include keywords naturally
 *
 * 3. Images:
 * - Always include descriptive alt text
 * - Compress images before uploading
 * - Use modern formats (WebP)
 * - Specify width/height to prevent layout shift
 *
 * 4. Content:
 * - Write for users, not search engines
 * - Use short paragraphs (2-3 sentences)
 * - Include lists and subheadings for readability
 * - Aim for 1000+ words on important pages
 *
 * 5. Links:
 * - Include 3-5 internal links per page
 * - Use descriptive anchor text
 * - Link to relevant pages
 *
 * 6. Performance:
 * - Optimize images
 * - Minimize CSS/JavaScript
 * - Enable caching
 * - Use a CDN
 */
