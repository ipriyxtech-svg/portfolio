import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOConfig, generateStructuredData } from '../config/seo.config';

interface SEOProps {
  page?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  page,
  title,
  description,
  keywords,
  image,
  url,
  type
}) => {
  const location = useLocation();
  
  // Get SEO config for the page
  const pageConfig = page ? getSEOConfig(page) : null;

  const seoConfig = {
    title:
      title ||
      pageConfig?.title ||
      "Priyanshu Rai | Blockchain Developer | Web3 & Cybersecurity",

    // ✅ FIXED (pehle galat tha)
    description:
      description ||
      pageConfig?.description ||
      "Blockchain Developer specializing in Solidity, Ethereum, Web3 and Full Stack Development.",

    keywords:
      keywords ||
      pageConfig?.keywords ||
      "Priyanshu Rai, Blockchain Developer, Web3 Developer, Solidity, Ethereum, Cybersecurity, React Developer",

    // ✅ PUBLIC IMAGE (abhi local use karo)
    image:
      image ||
      pageConfig?.image ||
      "/og-image.png",

    // ⚠️ DEPLOY KE BAAD CHANGE KARNA
    url:
      url ||
      pageConfig?.url ||
      `https://portfolio-ipriyxtech-svgs-projects.vercel.app${location.pathname}`,

    type: type || pageConfig?.type || "website"
  };

  const currentUrl = seoConfig.url;

  useEffect(() => {
    // Title
    document.title = seoConfig.title;

    // Meta update functions
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateNameTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Open Graph
    updateMetaTag('og:title', seoConfig.title);
    updateMetaTag('og:description', seoConfig.description);
    updateMetaTag('og:image', seoConfig.image);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:type', seoConfig.type);

    // Twitter
    updateMetaTag('twitter:title', seoConfig.title);
    updateMetaTag('twitter:description', seoConfig.description);
    updateMetaTag('twitter:image', seoConfig.image);
    updateMetaTag('twitter:url', currentUrl);

    // Basic meta
    updateNameTag('description', seoConfig.description);
    updateNameTag('keywords', seoConfig.keywords);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Structured Data
    if (page) {
      const structuredData = generateStructuredData(page);
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

  }, [seoConfig, currentUrl, page]);

  return null;
};

export default SEO;