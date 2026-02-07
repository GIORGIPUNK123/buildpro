/**
 * Image optimization utilities for SEO
 * Ensure all images have proper alt text, dimensions, and lazy loading
 */

import { createElement } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'auto' | 'sync' | 'async';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  decoding = 'async',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding={decoding}
    />
  );
};

/**
 * Semantic HTML heading component with proper hierarchy
 */
export const Heading: React.FC<{
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}> = ({ level, children, className }) => {
  const HeadingTag = `h${level}` as const;

  return createElement(HeadingTag, { className }, children);
};

/**
 * SEO utility for structured text content
 */
export const SEOText = (text: string) => {
  return text
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
};

/**
 * Generate SEO-friendly URLs
 */
export const generateSEOUrl = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
};
