// Supported Selling Platforms with fee profiles, branding, and status
export const PLATFORMS = {
  fb_marketplace: {
    id: 'fb_marketplace',
    name: 'Facebook Marketplace',
    shortName: 'FB Market',
    tagline: 'Local Pickup & Shipping',
    color: '#1877f2',
    bgColor: 'rgba(24, 119, 242, 0.15)',
    borderColor: 'rgba(24, 119, 242, 0.35)',
    feePercentage: 5, // 5% shipping fee or 0% local
    defaultMarkup: 0, // Keep same or slight discount for cash
    active: true,
    autoDelist: true,
    category: 'General / Local Resale',
    accountHandle: '@apparel_vault_fb',
    simulatedLatency: 800,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`
  },
  ebay: {
    id: 'ebay',
    name: 'eBay',
    shortName: 'eBay',
    tagline: 'Global Auction & Buy-It-Now',
    color: '#e53238',
    bgColor: 'rgba(229, 50, 56, 0.15)',
    borderColor: 'rgba(229, 50, 56, 0.35)',
    feePercentage: 13.25,
    defaultMarkup: 5, // +$5 to offset seller fees
    active: true,
    autoDelist: true,
    category: 'Global Marketplace',
    accountHandle: 'urban_apparel_store_official',
    simulatedLatency: 1100,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>`
  },
  depop: {
    id: 'depop',
    name: 'Depop',
    shortName: 'Depop',
    tagline: 'Youth & Vintage Streetwear Community',
    color: '#ff2300',
    bgColor: 'rgba(255, 35, 0, 0.15)',
    borderColor: 'rgba(255, 35, 0, 0.35)',
    feePercentage: 10,
    defaultMarkup: 0, // Baseline for trendy fashion
    active: true,
    autoDelist: true,
    category: 'Vintage & Streetwear',
    accountHandle: '@threads_curated',
    simulatedLatency: 900,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`
  },
  poshmark: {
    id: 'poshmark',
    name: 'Poshmark',
    shortName: 'Poshmark',
    tagline: 'Social Fashion & Closet Sharing',
    color: '#8b1d3d',
    bgColor: 'rgba(139, 29, 61, 0.18)',
    borderColor: 'rgba(139, 29, 61, 0.4)',
    feePercentage: 20,
    defaultMarkup: 8, // +$8 to offset 20% commission
    active: true,
    autoDelist: true,
    category: 'Designer & Apparel',
    accountHandle: '@posh_wardrobe_lux',
    simulatedLatency: 1200,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`
  },
  grailed: {
    id: 'grailed',
    name: 'Grailed',
    shortName: 'Grailed',
    tagline: 'Curated Menswear & High Fashion',
    color: '#e2e8f0',
    bgColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.25)',
    feePercentage: 9,
    defaultMarkup: 0,
    active: true,
    autoDelist: true,
    category: 'Luxury & Archival',
    accountHandle: 'grailed_archive_vault',
    simulatedLatency: 950,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  },
  mercari: {
    id: 'mercari',
    name: 'Mercari',
    shortName: 'Mercari',
    tagline: 'Fast Everyday Selling App',
    color: '#4986ff',
    bgColor: 'rgba(73, 134, 255, 0.15)',
    borderColor: 'rgba(73, 134, 255, 0.35)',
    feePercentage: 10,
    defaultMarkup: 2,
    active: true,
    autoDelist: true,
    category: 'Quick Liquidation',
    accountHandle: 'mercari_closet_fast',
    simulatedLatency: 850,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/></svg>`
  },
  vinted: {
    id: 'vinted',
    name: 'Vinted',
    shortName: 'Vinted',
    tagline: 'Zero Seller Fee Secondhand Platform',
    color: '#09b1ba',
    bgColor: 'rgba(9, 177, 186, 0.15)',
    borderColor: 'rgba(9, 177, 186, 0.35)',
    feePercentage: 0, // 0% seller fee
    defaultMarkup: -3, // Can price slightly cheaper and still earn high net
    active: true,
    autoDelist: true,
    category: 'Thrift & Secondhand',
    accountHandle: '@vinted_thrift_circle',
    simulatedLatency: 750,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
  },
  etsy: {
    id: 'etsy',
    name: 'Etsy',
    shortName: 'Etsy',
    tagline: 'Vintage & Handmade Goods',
    color: '#f1641e',
    bgColor: 'rgba(241, 100, 30, 0.15)',
    borderColor: 'rgba(241, 100, 30, 0.35)',
    feePercentage: 6.5,
    defaultMarkup: 3,
    active: false,
    autoDelist: true,
    category: 'Handmade & Vintage 20+ Yrs',
    accountHandle: 'StudioThreadVintage',
    simulatedLatency: 1000,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`
  },
  stockx: {
    id: 'stockx',
    name: 'StockX',
    shortName: 'StockX',
    tagline: 'Deadstock Sneakers & Streetwear',
    color: '#006340',
    bgColor: 'rgba(0, 99, 64, 0.2)',
    borderColor: 'rgba(0, 99, 64, 0.4)',
    feePercentage: 9,
    defaultMarkup: 5,
    active: false,
    autoDelist: true,
    category: 'Deadstock & Verification',
    accountHandle: 'verified_drop_seller',
    simulatedLatency: 1300,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`
  },
  goat: {
    id: 'goat',
    name: 'GOAT',
    shortName: 'GOAT',
    tagline: 'Sneakers, Apparel & Accessories',
    color: '#64748b',
    bgColor: 'rgba(100, 116, 139, 0.15)',
    borderColor: 'rgba(100, 116, 139, 0.35)',
    feePercentage: 9.5,
    defaultMarkup: 5,
    active: false,
    autoDelist: true,
    category: 'Sneakers & Streetwear',
    accountHandle: 'goat_closet_official',
    simulatedLatency: 1150,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 2 18 2 18 6 6 6 6 2"/><polygon points="3 6 21 6 21 10 3 10 3 6"/><polygon points="6 10 18 10 18 22 6 22 6 10"/></svg>`
  },
  vestiaire: {
    id: 'vestiaire',
    name: 'Vestiaire Collective',
    shortName: 'Vestiaire',
    tagline: 'Pre-owned Luxury & High End Designer',
    color: '#eab308',
    bgColor: 'rgba(234, 179, 8, 0.15)',
    borderColor: 'rgba(234, 179, 8, 0.35)',
    feePercentage: 12,
    defaultMarkup: 12,
    active: false,
    autoDelist: true,
    category: 'Certified Luxury',
    accountHandle: 'paris_vault_archive',
    simulatedLatency: 1400,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
  },
  asos_marketplace: {
    id: 'asos_marketplace',
    name: 'ASOS Marketplace',
    shortName: 'ASOS',
    tagline: 'Independent Brands & Vintage Boutiques',
    color: '#9333ea',
    bgColor: 'rgba(147, 51, 234, 0.15)',
    borderColor: 'rgba(147, 51, 234, 0.35)',
    feePercentage: 15,
    defaultMarkup: 6,
    active: false,
    autoDelist: true,
    category: 'Independent Boutiques',
    accountHandle: 'studio_thread_boutique',
    simulatedLatency: 1250,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
  }
};

// Vector Placeholder Icons for Clothing Categories (No low-quality images, clean crisp SVG)
export const GARMENT_ICONS = {
  jacket: {
    id: 'jacket',
    label: 'Outerwear',
    color: '#818cf8',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M4 4 9 2l3 4 3-4 5 2 2 6-4 2v10H6V12L2 10 4 4z"/><path d="M12 6v16"/><path d="M9 2 6 8"/><path d="M15 2l3 6"/></svg>`
  },
  hoodie: {
    id: 'hoodie',
    label: 'Hoodie',
    color: '#f43f5e',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M3 7 9 3h6l6 4-2 6-3-1v10H8V12L5 13 3 7z"/><path d="M9 3v4a3 3 0 0 0 6 0V3"/><path d="M9 16h6v4H9z"/></svg>`
  },
  tshirt: {
    id: 'tshirt',
    label: 'T-Shirt',
    color: '#38bdf8',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M6 3 2 7l4 2v12h12V9l4-2-4-4a4 4 0 0 1-6 2 4 4 0 0 1-6-2z"/></svg>`
  },
  jeans: {
    id: 'jeans',
    label: 'Pants / Denim',
    color: '#60a5fa',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M5 3h14v4l-2 15h-4l-1-11-1 11H7L5 7V3z"/><path d="M5 7h14"/><path d="M10 7v3"/><path d="M14 7v3"/></svg>`
  },
  sneakers: {
    id: 'sneakers',
    label: 'Footwear',
    color: '#34d399',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M2 17h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"/><path d="M4 17V8a4 4 0 0 1 4-4h2l8 9h4v4"/><path d="M10 4v5"/><path d="M13 6v4"/></svg>`
  },
  sweater: {
    id: 'sweater',
    label: 'Knitwear',
    color: '#fbbf24',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M3 6 8 2h8l5 4-3 6-2-1v11H8V11L6 12 3 6z"/><path d="M9 2a3 3 0 0 0 6 0"/><line x1="8" y1="16" x2="16" y2="16"/><line x1="8" y1="19" x2="16" y2="19"/></svg>`
  },
  hat: {
    id: 'hat',
    label: 'Headwear',
    color: '#c084fc',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><path d="M2 18h20a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M4 16c0-5 3-9 8-9s8 4 8 9"/><line x1="2" y1="18" x2="22" y2="18"/></svg>`
  },
  accessory: {
    id: 'accessory',
    label: 'Accessories',
    color: '#ec4899',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="garment-svg-placeholder"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 14 14"/><path d="M12 2v3"/><path d="M12 19v3"/></svg>`
  }
};
