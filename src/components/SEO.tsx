import { Helmet } from 'react-helmet-async';
import { ReactNode } from 'react';
import { SEO_CONFIG } from '../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  children?: ReactNode;
}

export const SEO = ({
  title = SEO_CONFIG.siteName,
  description = SEO_CONFIG.description,
  keywords = SEO_CONFIG.keywords,
  image = `${SEO_CONFIG.siteUrl}/og-image.png`,
  url = SEO_CONFIG.siteUrl,
  type = 'website',
}: SEOProps) => {
  const fullTitle = title.includes('BuildPro') ? title : `${title} | BuildPro`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang='en' />
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      {keywords.length > 0 && (
        <meta name='keywords' content={keywords.join(', ')} />
      )}
      <meta name='author' content='BuildPro' />
      <meta name='robots' content='index, follow' />
      <meta name='googlebot' content='index, follow' />

      {/* Canonical URL */}
      <link rel='canonical' href={url} />

      {/* Open Graph Tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      <meta property='og:site_name' content={SEO_CONFIG.siteName} />
      <meta property='og:locale' content={SEO_CONFIG.locale} />

      {/* Twitter Card Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      {SEO_CONFIG.twitterHandle && (
        <meta name='twitter:creator' content={SEO_CONFIG.twitterHandle} />
      )}

      {/* Additional SEO Tags */}
      <meta name='format-detection' content='telephone=no' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
    </Helmet>
  );
};
