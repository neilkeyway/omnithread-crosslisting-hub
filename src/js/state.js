import { PLATFORMS } from './platforms.js';

const STORAGE_KEYS = {
  PLATFORMS: 'omnithread_platforms_v1',
  CLOTHES: 'omnithread_clothes_v1',
  NOTIFICATIONS: 'omnithread_notifications_v1',
  SETTINGS: 'omnithread_settings_v1'
};

// Initial realistic apparel inventory with vector placeholder icons
const INITIAL_CLOTHES = [
  {
    id: 'item_01',
    title: 'Vintage Washed Heavyweight Boxy Moto Jacket',
    brand: 'AllSaints / Archive',
    category: 'jacket',
    size: 'L',
    condition: 'Excellent Pre-owned',
    color: 'Distressed Black',
    basePrice: 220,
    platformPrices: {
      fb_marketplace: 210,
      ebay: 235,
      depop: 220,
      grailed: 225,
      poshmark: 245
    },
    platforms: ['fb_marketplace', 'ebay', 'depop', 'grailed'],
    status: 'active',
    delistedPlatforms: [],
    soldDetails: null,
    description: 'Grain-treated vintage moto leather with custom oxidized zips, boxy torso cut, quilted lining. No flaws, pristine condition.',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: 'item_02',
    title: 'Sun-Faded Vintage Acid Wash Heavyweight Hoodie',
    brand: 'Balenciaga / Homme',
    category: 'hoodie',
    size: 'XL (Oversized)',
    condition: 'Gently Worn',
    color: 'Washed Charcoal',
    basePrice: 165,
    platformPrices: {
      depop: 165,
      ebay: 175,
      mercari: 168,
      vinted: 160
    },
    platforms: ['depop', 'ebay', 'mercari', 'vinted'],
    status: 'active',
    delistedPlatforms: [],
    soldDetails: null,
    description: 'Ultra heavyweight 500 GSM loopback cotton fleece. Drop shoulders with washed sun-bleach distress gradient across the hood and pouch pocket.',
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString()
  },
  {
    id: 'item_03',
    title: 'Distressed Selvedge Wide-Leg Carpenter Denim',
    brand: 'Carhartt WIP',
    category: 'jeans',
    size: '34 x 32',
    condition: 'New With Tags',
    color: 'Light Indigo',
    basePrice: 110,
    platformPrices: {
      fb_marketplace: 105,
      ebay: 120,
      depop: 110,
      poshmark: 125
    },
    platforms: ['fb_marketplace', 'ebay', 'depop', 'poshmark'],
    status: 'active',
    delistedPlatforms: [],
    soldDetails: null,
    description: 'Rigid 14oz Japanese selvedge denim. Triple needle stitch construction with hammer loop, utility stash pockets, and double knee reinforcement.',
    createdAt: new Date(Date.now() - 86400000 * 6).toISOString()
  },
  {
    id: 'item_04',
    title: '1998 Soundgarden Tour Single-Stitch Band Tee',
    brand: 'Winterland Vintage',
    category: 'tshirt',
    size: 'L',
    condition: 'True Vintage',
    color: 'Aged Black',
    basePrice: 145,
    platformPrices: {
      depop: 145,
      ebay: 155,
      grailed: 150
    },
    platforms: ['depop', 'ebay', 'grailed'],
    status: 'active',
    delistedPlatforms: [],
    soldDetails: null,
    description: 'Authentic 90s single stitch graphic tee on original Winterland tag. Natural fade, subtle pinhole on lower hem adds to vintage drape.',
    createdAt: new Date(Date.now() - 86400000 * 7).toISOString()
  },
  {
    id: 'item_05',
    title: 'Retro High OG Leather Court Sneakers',
    brand: 'Jordan Brand',
    category: 'sneakers',
    size: 'US 10.5',
    condition: 'Like New in Box',
    color: 'Bred / Varsity Red',
    basePrice: 280,
    platformPrices: {
      stockx: 295,
      ebay: 290,
      fb_marketplace: 275
    },
    platforms: ['ebay', 'fb_marketplace'],
    status: 'sold',
    delistedPlatforms: ['ebay'],
    soldDetails: {
      platformId: 'fb_marketplace',
      soldAt: new Date(Date.now() - 86400000 * 1).toISOString(),
      salePrice: 275,
      feePaid: 13.75,
      netPayout: 261.25,
      buyerUsername: 'marcus_kicks_sea'
    },
    description: 'Original box, extra red laces, receipt included. Worn once indoors for a photoshoot. Zero heel drag or toe creasing.',
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString()
  }
];

const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif_01',
    type: 'sale',
    itemId: 'item_05',
    title: 'Item Sold on Facebook Marketplace!',
    itemTitle: 'Retro High OG Leather Court Sneakers',
    platformId: 'fb_marketplace',
    salePrice: 275,
    netPayout: 261.25,
    buyer: 'marcus_kicks_sea',
    autoDelistedFrom: ['ebay'],
    timestamp: new Date(Date.now() - 86400000 * 1).toISOString(),
    unread: false
  }
];

class StateManager {
  constructor() {
    this.listeners = [];
    this.currentTab = 'dashboard'; // 'dashboard', 'composer', 'inventory', 'platforms', 'sales'
    this.init();
  }

  init() {
    this.platforms = this.load(STORAGE_KEYS.PLATFORMS, PLATFORMS);
    this.clothes = this.load(STORAGE_KEYS.CLOTHES, INITIAL_CLOTHES);
    this.notifications = this.load(STORAGE_KEYS.NOTIFICATIONS, INITIAL_NOTIFICATIONS);
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn('Error reading from localStorage:', e);
      return fallback;
    }
  }

  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn('Error saving to localStorage:', e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(this); } catch (e) { console.error('State subscriber error:', e); }
    });
  }

  setTab(tab) {
    this.currentTab = tab;
    this.notify();
  }

  // --- Platform Actions ---
  togglePlatformActive(platformId) {
    if (this.platforms[platformId]) {
      this.platforms[platformId].active = !this.platforms[platformId].active;
      this.save(STORAGE_KEYS.PLATFORMS, this.platforms);
      this.notify();
    }
  }

  togglePlatformAutoDelist(platformId) {
    if (this.platforms[platformId]) {
      this.platforms[platformId].autoDelist = !this.platforms[platformId].autoDelist;
      this.save(STORAGE_KEYS.PLATFORMS, this.platforms);
      this.notify();
    }
  }

  updatePlatformMarkup(platformId, newMarkup) {
    if (this.platforms[platformId]) {
      this.platforms[platformId].defaultMarkup = Number(newMarkup);
      this.save(STORAGE_KEYS.PLATFORMS, this.platforms);
      this.notify();
    }
  }

  // --- Clothes Catalog Actions ---
  addClothListing(itemData) {
    const newItem = {
      id: 'item_' + Date.now().toString(36),
      title: itemData.title,
      brand: itemData.brand || 'Unbranded',
      category: itemData.category || 'jacket',
      size: itemData.size || 'M',
      condition: itemData.condition || 'Pre-owned',
      color: itemData.color || 'Standard',
      basePrice: Number(itemData.basePrice) || 50,
      platformPrices: itemData.platformPrices || {},
      platforms: itemData.platforms || [],
      photos: itemData.photos || [],
      status: 'active',
      delistedPlatforms: [],
      soldDetails: null,
      description: itemData.description || '',
      createdAt: new Date().toISOString()
    };

    this.clothes.unshift(newItem);
    this.save(STORAGE_KEYS.CLOTHES, this.clothes);

    // Add activity notification
    this.addNotification({
      type: 'cross_post',
      itemId: newItem.id,
      title: `Successfully Cross-Listed on ${newItem.platforms.length} Platforms`,
      itemTitle: newItem.title,
      platforms: newItem.platforms,
      timestamp: new Date().toISOString(),
      unread: true
    });

    this.notify();
    return newItem;
  }

  updateClothPrice(itemId, platformId, newPrice) {
    const item = this.clothes.find(c => c.id === itemId);
    if (item) {
      if (!item.platformPrices) item.platformPrices = {};
      item.platformPrices[platformId] = Number(newPrice);
      this.save(STORAGE_KEYS.CLOTHES, this.clothes);
      this.notify();
    }
  }

  deleteCloth(itemId) {
    this.clothes = this.clothes.filter(c => c.id !== itemId);
    this.save(STORAGE_KEYS.CLOTHES, this.clothes);
    this.notify();
  }

  // --- Real-time Sale & Auto-Delist Trigger ---
  recordSale({ itemId, platformId, buyerUsername }) {
    const item = this.clothes.find(c => c.id === itemId);
    if (!item) return null;

    const platformConfig = this.platforms[platformId] || PLATFORMS[platformId];
    const salePrice = (item.platformPrices && item.platformPrices[platformId]) 
      ? Number(item.platformPrices[platformId]) 
      : Number(item.basePrice);

    const feeRate = platformConfig ? platformConfig.feePercentage : 10;
    const feePaid = +(salePrice * (feeRate / 100)).toFixed(2);
    const netPayout = +(salePrice - feePaid).toFixed(2);

    // Identify which other platforms this item was active on to auto-delist
    const otherActivePlatforms = (item.platforms || []).filter(p => p !== platformId);
    
    // Auto-delist from other platforms where autoDelist is enabled
    const autoDelistedFrom = otherActivePlatforms.filter(p => {
      const pConf = this.platforms[p];
      return pConf ? pConf.autoDelist : true;
    });

    // Update item status
    item.status = 'sold';
    item.delistedPlatforms = autoDelistedFrom;
    item.soldDetails = {
      platformId,
      platformName: platformConfig ? platformConfig.name : platformId,
      soldAt: new Date().toISOString(),
      salePrice,
      feePaid,
      netPayout,
      buyerUsername: buyerUsername || 'vintage_buyer_' + Math.floor(1000 + Math.random() * 9000)
    };

    this.save(STORAGE_KEYS.CLOTHES, this.clothes);

    // Create celebratory Sale Notification
    const notif = {
      id: 'notif_' + Date.now(),
      type: 'sale',
      itemId: item.id,
      title: `Sold on ${platformConfig ? platformConfig.name : 'Marketplace'}!`,
      itemTitle: item.title,
      platformId,
      salePrice,
      netPayout,
      buyer: item.soldDetails.buyerUsername,
      autoDelistedFrom,
      timestamp: new Date().toISOString(),
      unread: true
    };

    this.notifications.unshift(notif);
    this.save(STORAGE_KEYS.NOTIFICATIONS, this.notifications);

    this.notify();
    return { item, notification: notif };
  }

  addNotification(notif) {
    this.notifications.unshift({
      id: 'notif_' + Date.now(),
      unread: true,
      ...notif
    });
    this.save(STORAGE_KEYS.NOTIFICATIONS, this.notifications);
    this.notify();
  }

  markAllNotificationsRead() {
    this.notifications.forEach(n => n.unread = false);
    this.save(STORAGE_KEYS.NOTIFICATIONS, this.notifications);
    this.notify();
  }

  getUnreadCount() {
    return this.notifications.filter(n => n.unread).length;
  }

  // --- Metrics & Analytics Calculators ---
  getMetrics() {
    const activeClothes = this.clothes.filter(c => c.status === 'active');
    const soldClothes = this.clothes.filter(c => c.status === 'sold');
    
    let totalGrossRevenue = 0;
    let totalNetProfit = 0;
    const platformSalesCount = {};

    soldClothes.forEach(c => {
      if (c.soldDetails) {
        totalGrossRevenue += c.soldDetails.salePrice || 0;
        totalNetProfit += c.soldDetails.netPayout || 0;
        const pid = c.soldDetails.platformId;
        platformSalesCount[pid] = (platformSalesCount[pid] || 0) + 1;
      }
    });

    const activeListingsTotal = activeClothes.reduce((acc, c) => acc + (c.platforms ? c.platforms.length : 0), 0);

    return {
      activeItemsCount: activeClothes.length,
      totalChannelsActive: Object.values(this.platforms).filter(p => p.active).length,
      activeCrossListingsCount: activeListingsTotal,
      soldItemsCount: soldClothes.length,
      grossRevenue: totalGrossRevenue,
      netProfit: totalNetProfit,
      platformSalesCount
    };
  }
}

export const store = new StateManager();
