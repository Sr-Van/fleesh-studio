import { STUDIO_INFO } from '../data/siteData';

export function generateSchemaLD(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: STUDIO_INFO.name,
    description: STUDIO_INFO.description,
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
