const NEXT_PUBLIC_API_URL = 'https://cocoandeve-strapi-rg4t4.ondigitalocean.app';
// const NEXT_PUBLIC_API_URL = 'http://localhost:1337';

export function getStrapiURL(path: any) {
  return `${NEXT_PUBLIC_API_URL || 'https://cocoandeve-strapi-rg4t4.ondigitalocean.app'}/api${path}`;
}

export async function getHomepage() {
  const baseUrl = getStrapiURL(`/homepage/get-homepage`);
  const res = await fetch(baseUrl);
  const data = await res.json();

  const productsUrl = getStrapiURL(`/homepage/products-carousel`);

  const productsRes = await fetch(productsUrl);
  const productData = await productsRes.json();

  return { ...data, productData }; 
}

export async function getHeroCarousel() {
  const baseUrl = getStrapiURL(`/homepage/hero-carousel`);

  const res = await fetch(baseUrl);
  const data = await res.json();

  return data;
}

export async function getRealResults() {
  const baseUrl = getStrapiURL(`/customer-reviews/all?show_on_homepage=true`);

  const res = await fetch(baseUrl);
  const data = await res.json();

  return data;
}