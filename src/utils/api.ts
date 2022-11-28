const NEXT_PUBLIC_API_URL = 'http://localhost:1337';

export function getStrapiURL(path) {
  return `${NEXT_PUBLIC_API_URL || 'http://localhost:1337'}/api${path}`;
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
