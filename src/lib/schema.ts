import { STUDIO_INFO } from '../data/siteData';
import { getAbsoluteUrl, getTranslations, type Locale } from '../i18n';

export function generateSchemaLD(locale: Locale): string {
  const t = getTranslations(locale);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: STUDIO_INFO.name,
    url: getAbsoluteUrl(locale),
    inLanguage: t.htmlLang,
    description: t.seo.schemaDescription,
    email: STUDIO_INFO.email,
    sameAs: [
      STUDIO_INFO.twitterUrl,
      ...STUDIO_INFO.behanceCollections.map((item) => item.url),
    ],
    knowsAbout: [
      'YouTube Thumbnails',
      'Roblox Thumbnails',
      'Minecraft Thumbnails',
      '3D Rendering',
      'Art Direction for Content Creators',
    ],
  };

  return JSON.stringify(schema);
}
