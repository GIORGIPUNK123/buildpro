import { Helmet } from 'react-helmet-async';
import { ReactNode } from 'react';
import { SEO_CONFIG } from '../config/seo';
import { useLanguage } from '../i18n/LanguageProvider';

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
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}: SEOProps) => {
  const { locale } = useLanguage();
  const config = SEO_CONFIG[locale];

  const seoTitle = title || config.title;
  const seoDescription = description || config.description;
  const seoKeywords = keywords || config.keywords;
  const seoImage = image || `${config.siteUrl}/og-image.png`;
  const seoUrl = url || config.siteUrl;

  const fullTitle = seoTitle.includes('BuildPro')
    ? seoTitle
    : `${seoTitle} | BuildPro`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={locale} />
      <title>{fullTitle}</title>
      <meta name='description' content={seoDescription} />
      {seoKeywords.length > 0 && (
        <meta name='keywords' content={seoKeywords.join(', ')} />
      )}
      <meta name='author' content='BuildPro' />
      <meta name='robots' content='index, follow' />
      <meta name='googlebot' content='index, follow' />

      {/* Canonical URL */}
      <link rel='canonical' href={seoUrl} />

      {/* Open Graph Tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={seoDescription} />
      <meta property='og:url' content={seoUrl} />
      <meta property='og:image' content={seoImage} />
      <meta property='og:site_name' content={config.siteName} />
      <meta property='og:locale' content={config.locale} />

      {/* Twitter Card Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={seoDescription} />
      <meta name='twitter:image' content={seoImage} />
      {config.twitterHandle && (
        <meta name='twitter:creator' content={config.twitterHandle} />
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
