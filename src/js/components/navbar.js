import { store } from '../state.js';
import { soundFx } from '../audio.js';
import { notificationsUI } from './notifications.js';

export function renderNavbar(container) {
  const unreadCount = store.getUnreadCount();
  const currentTab = store.currentTab;

  container.innerHTML = `
    <div class="nav-container">
      <div class="brand-wrapper" id="nav-brand-logo">
        <div class="brand-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          </svg>
        </div>
        <div class="brand-text">
          <div class="brand-title">
            OMNITHREAD
            <span class="brand-badge">Cross-Lister</span>
          </div>
          <div class="brand-subtitle">Apparel Multi-Channel Sync Hub</div>
        </div>
      </div>

      <nav>
        <ul class="nav-links">
          <li>
            <button class="nav-link-btn ${currentTab === 'dashboard' ? 'active' : ''}" data-tab="dashboard" title="Aesthetic Fashion Lookbook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              <span>Lookbook Dashboard</span>
            </button>
          </li>
          <li>
            <button class="nav-link-btn ${currentTab === 'command' ? 'active' : ''}" data-tab="command" title="Sales Command Center & Financials">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              <span>Sales Command Center</span>
            </button>
          </li>
          <li>
            <button class="nav-link-btn ${currentTab === 'composer' ? 'active' : ''}" data-tab="composer" title="List Once, Sell Everywhere with AI & Photos">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
              <span>Cross-Lister Studio</span>
            </button>
          </li>
          <li>
            <button class="nav-link-btn ${currentTab === 'inventory' ? 'active' : ''}" data-tab="inventory">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
              <span>Wardrobe Inventory</span>
            </button>
          </li>
          <li>
            <button class="nav-link-btn ${currentTab === 'platforms' ? 'active' : ''}" data-tab="platforms">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              <span>Platforms (${Object.values(store.platforms).filter(p => p.active).length})</span>
            </button>
          </li>
          <li>
            <button class="nav-link-btn ${currentTab === 'sales' ? 'active' : ''}" data-tab="sales">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              <span>Sales Feed</span>
            </button>
          </li>
        </ul>
      </nav>

      <div class="nav-actions">
        <!-- Happy Audio Test Button -->
        <button id="btn-test-sound" class="btn btn-secondary" title="Listen to Happy Sale Chime" style="padding: 0.5rem 0.85rem; font-size: 0.8rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
          <span>Happy Chime</span>
        </button>

        <!-- Quick Simulate Sale Action -->
        <button id="btn-quick-sale" class="btn btn-success" style="font-size: 0.82rem; padding: 0.5rem 1rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          <span>Simulate Sale Alert</span>
        </button>

        <!-- Bell Notification Counter -->
        <button id="btn-bell-notif" class="btn-icon-only" aria-label="Notifications">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
          </svg>
          ${unreadCount > 0 ? `<span class="notification-count">${unreadCount}</span>` : ''}
        </button>
      </div>
    </div>
  `;

  // Attach Event Listeners
  container.querySelectorAll('.nav-link-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      store.setTab(tab);
    });
  });

  const brand = container.querySelector('#nav-brand-logo');
  if (brand) {
    brand.addEventListener('click', () => store.setTab('dashboard'));
  }

  // Audio preview button
  const soundBtn = container.querySelector('#btn-test-sound');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundFx.playHappySaleChime();
      notificationsUI.showInfoToast('Audio Preview', 'Playing joyful cash register chime! 🎶');
    });
  }

  // Quick sale simulation trigger
  const saleBtn = container.querySelector('#btn-quick-sale');
  if (saleBtn) {
    saleBtn.addEventListener('click', () => {
      const activeItems = store.clothes.filter(c => c.status === 'active');
      if (activeItems.length === 0) {
        alert('All items are currently sold! Create a new apparel listing first or relist an item.');
        return;
      }
      const randomItem = activeItems[Math.floor(Math.random() * activeItems.length)];
      const availablePlatforms = randomItem.platforms && randomItem.platforms.length > 0 
        ? randomItem.platforms 
        : ['depop', 'ebay', 'fb_marketplace'];
      const randomPlatform = availablePlatforms[Math.floor(Math.random() * availablePlatforms.length)];

      const buyers = ['alex_streetstyle', 'vintage_curator_nyc', 'thrift_queen_sf', 'kicks_collector_99', 'retro_drip_jp'];
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];

      const result = store.recordSale({
        itemId: randomItem.id,
        platformId: randomPlatform,
        buyerUsername: randomBuyer
      });

      if (result) {
        notificationsUI.showSaleAlert(result);
      }
    });
  }

  // Bell opens sales feed
  const bellBtn = container.querySelector('#btn-bell-notif');
  if (bellBtn) {
    bellBtn.addEventListener('click', () => {
      store.markAllNotificationsRead();
      store.setTab('sales');
    });
  }
}
