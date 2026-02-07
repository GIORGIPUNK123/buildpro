import { SEO_CONFIG } from '../config/seo';

type Priority = '1.0' | '0.8' | '0.6' | '0.4';

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: Priority;
}

export const generateSitemap = (routes: SitemapEntry[]): string => {
  const allRoutes: SitemapEntry[] = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/services', changefreq: 'monthly', priority: '0.8' },
    { url: '/projects', changefreq: 'weekly', priority: '0.8' },
    { url: '/pricing', changefreq: 'monthly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' },
    ...routes,
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      return `
  <url>
    <loc>${SEO_CONFIG.siteUrl}${route.url}</loc>
    ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ''}
    ${route.changefreq ? `<changefreq>${route.changefreq}</changefreq>` : ''}
    ${route.priority ? `<priority>${route.priority}</priority>` : '<priority>0.8</priority>'}
  </url>`;
    })
    .join('')}
</urlset>`;

  return sitemapXml;
};

// To use this in a Vite build, you can integrate it in vite.config.ts
// Or create a sitemap.xml file manually in the public folder
