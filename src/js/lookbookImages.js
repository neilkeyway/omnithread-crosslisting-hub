// Curated Royalty-Free (Unsplash License) High-Fashion & Streetwear Visuals
export const LOOKBOOK_IMAGES = [
  {
    id: 'look_01',
    title: 'Archive Noir: The Autumn Lookbook',
    tag: 'EDITORIAL COLLECTION • VOL. 01',
    subtitle: 'High-contrast oversized layering, distressed grain textures, and architectural silhouettes.',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=85',
    mood: 'Avant-Garde Streetwear'
  },
  {
    id: 'look_02',
    title: 'Vintage Leather & Raw Selvedge Archive',
    tag: 'HERITAGE APPAREL • VOL. 02',
    subtitle: 'Classic heavy outerwear, distressed double-knee denim, and timeless utilitarian craftsmanship.',
    url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1920&q=85',
    mood: 'Vintage Moto & Heritage'
  },
  {
    id: 'look_03',
    title: 'Tokyo Cyber Drip & Minimalist Knitwear',
    tag: 'GLOBAL CAPSULE • VOL. 03',
    subtitle: 'Deconstructed wool knits, wide-leg trouser tailoring, and monochromatic aesthetic flow.',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1920&q=85',
    mood: 'Tokyo Cyber Minimal'
  },
  {
    id: 'look_04',
    title: 'Studio Wardrobe: The Reseller Vault',
    tag: 'CURATED RAILS • VOL. 04',
    subtitle: 'Synchronized cross-platform boutique apparel ready for instant multi-channel dispatch.',
    url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920&q=85',
    mood: 'Studio Curation'
  },
  {
    id: 'look_05',
    title: 'Modern High Fashion & Street Tailoring',
    tag: 'RUNWAY ESSENTIALS • VOL. 05',
    subtitle: 'Bold color palettes, statement coats, and progressive urban couture.',
    url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1920&q=85',
    mood: 'Runway Statement'
  }
];

let currentIndex = 0;

export function getNextLookbookImage() {
  currentIndex = (currentIndex + 1) % LOOKBOOK_IMAGES.length;
  return LOOKBOOK_IMAGES[currentIndex];
}

export function getCurrentLookbookImage() {
  return LOOKBOOK_IMAGES[currentIndex];
}
