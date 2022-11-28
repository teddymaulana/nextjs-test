const NEXT_PUBLIC_API_URL = 'https://cocoandeve-strapi-rg4t4.ondigitalocean.app';

export function getStrapiURL(path: any) {
  return `${NEXT_PUBLIC_API_URL || 'https://cocoandeve-strapi-rg4t4.ondigitalocean.app'}/api${path}`;
}

export async function getHomepage() {
  const baseUrl = getStrapiURL(`/homepage/get-homepage`);

  const res = await fetch(baseUrl);
  const data = await res.json();

  return data;
}

export async function getHeroCarousel() {
  const baseUrl = getStrapiURL(`/homepage/hero-carousel`);

  const res = await fetch(baseUrl);
  const data = await res.json();

  return data;
}
