import { store } from '../state.js';
import { PLATFORMS, GARMENT_ICONS } from '../platforms.js';
import { notificationsUI } from './notifications.js';

export function renderInventory(container) {
  let filterStatus = 'all'; // 'all', 'active', 'sold'
  let filterPlatform = 'all';
  let searchQuery = '';

  function renderView() {
    let filteredClothes = store.clothes.filter(item => {
      if (filterStatus !== 'all' && item.status !== filterStatus) return false;
      if (filterPlatform !== 'all' && (!item.platforms || !item.platforms.includes(filterPlatform))) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchTitle = (item.title || '').toLowerCase().includes(q);
        const matchBrand = (item.brand || '').toLowerCase().includes(q);
        const matchSize = (item.size || '').toLowerCase().includes(q);
        const matchColor = (item.color || '').toLowerCase().includes(q);
        if (!matchTitle && !matchBrand && !matchSize && !matchColor) return false;
      }
      return true;
    });

    container.innerHTML = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>Wardrobe Inventory & Sync Status</h1>
          <p>Browse and manage all cross-listed garments across Facebook Marketplace, eBay, Depop, and connected channels.</p>
        </div>
        <div class="header-actions">
          <button id="btn-inv-new" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Cross-List New Garment</span>
          </button>
        </div>
      </div>

      <!-- Controls: Search & Filters -->
      <div class="inventory-controls">
        <div class="search-input-wrap">
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input type="text" id="inv-search" placeholder="Search by garment title, brand, size, or wash..." value="${searchQuery}" />
        </div>

        <div class="filter-chips">
          <button class="filter-chip ${filterStatus === 'all' ? 'active' : ''}" data-status="all">
            All (${store.clothes.length})
          </button>
          <button class="filter-chip ${filterStatus === 'active' ? 'active' : ''}" data-status="active">
            Active (${store.clothes.filter(c => c.status === 'active').length})
          </button>
          <button class="filter-chip ${filterStatus === 'sold' ? 'active' : ''}" data-status="sold">
            Sold (${store.clothes.filter(c => c.status === 'sold').length})
          </button>
        </div>

        <div style="min-width: 180px;">
          <select id="inv-platform-filter" style="padding: 0.5rem 0.75rem; font-size: 0.85rem;">
            <option value="all" ${filterPlatform === 'all' ? 'selected' : ''}>All Platforms</option>
            ${Object.values(store.platforms).filter(p => p.active).map(p => `
              <option value="${p.id}" ${filterPlatform === p.id ? 'selected' : ''}>${p.name}</option>
            `).join('')}
          </select>
        </div>
      </div>

      <!-- Garment Cards Grid -->
      ${filteredClothes.length === 0 ? `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
          </div>
          <h3>No garments match your filters</h3>
          <p>Try clearing your search filters or add a new clothing item to cross-post to your selling channels.</p>
          <button class="btn btn-secondary" id="btn-clear-filters">Reset Filters</button>
        </div>
      ` : `
        <div class="clothes-grid">
          ${filteredClothes.map(item => {
            const iconConfig = GARMENT_ICONS[item.category] || GARMENT_ICONS.jacket;
            const isSold = item.status === 'sold';
            const sold = item.soldDetails || {};
            const soldPlatform = PLATFORMS[sold.platformId];

            return `
              <div class="cloth-card ${isSold ? 'sold-status' : ''}" data-id="${item.id}">
                <div class="cloth-thumbnail-wrap">
                  ${item.photos && item.photos.length > 0 ? `
                    <img src="${item.photos[0]}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;" />
                  ` : `
                    <!-- Crisp Vector Placeholder Icon -->
                    <div style="color: ${iconConfig.color};">
                      ${iconConfig.svg}
                    </div>
                  `}

                  <span class="cloth-status-tag ${isSold ? 'sold' : 'active'}">
                    ${isSold ? 'SOLD OUT' : 'LIVE & SYNCED'}
                  </span>

                  <span class="cloth-price-tag">
                    $${item.basePrice}
                  </span>
                </div>

                <div class="cloth-details">
                  <div class="cloth-meta-top">
                    <span class="cloth-brand">${item.brand}</span>
                    <span class="cloth-size">Size ${item.size} • ${item.color || 'Standard'}</span>
                  </div>

                  <h3 class="cloth-title">${item.title}</h3>
                  <p class="cloth-desc">${item.description || 'No description provided.'}</p>

                  <div class="cloth-platforms-listed">
                    <div class="cloth-platforms-label">
                      <span>Channel Sync & Platform Pricing:</span>
                      <span style="font-weight: 700; color: #fff;">${item.platforms ? item.platforms.length : 0} Channels</span>
                    </div>

                    <div class="cloth-platforms-chips">
                      ${(item.platforms || []).map(pid => {
                        const p = PLATFORMS[pid];
                        if (!p) return '';
                        const platformPrice = (item.platformPrices && item.platformPrices[pid]) || item.basePrice;
                        return `
                          <div class="platform-pill" style="color: ${p.color}; background: ${p.bgColor}; border-color: ${p.borderColor}; font-size: 0.72rem; padding: 0.25rem 0.55rem;">
                            <span>${p.shortName || p.name}:</span>
                            <strong style="color: #fff; margin-left: 0.2rem;">$${platformPrice}</strong>
                          </div>
                        `;
                      }).join('')}
                    </div>

                    ${isSold ? `
                      <div style="margin-top: 0.85rem; padding: 0.65rem 0.85rem; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md);">
                        <div style="font-size: 0.75rem; color: #10b981; font-weight: 700; display: flex; justify-content: space-between;">
                          <span>Sold via ${sold.platformName || soldPlatform?.name || 'Platform'}</span>
                          <span>Net: $${sold.netPayout}</span>
                        </div>
                        <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 0.2rem;">
                          Buyer: <strong>${sold.buyerUsername}</strong>
                        </div>
                        ${item.delistedPlatforms && item.delistedPlatforms.length > 0 ? `
                          <div style="font-size: 0.68rem; color: #a5b4fc; margin-top: 0.35rem; display: flex; align-items: center; gap: 0.25rem;">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            <span>Protected & auto-delisted from: ${item.delistedPlatforms.map(p => PLATFORMS[p]?.shortName || p).join(', ')}</span>
                          </div>
                        ` : ''}
                      </div>
                    ` : ''}
                  </div>

                  <div class="cloth-card-actions">
                    ${!isSold ? `
                      <button class="btn btn-success btn-sell-item" data-id="${item.id}" style="flex: 1; font-size: 0.78rem; padding: 0.5rem 0.6rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        <span>Simulate Sale</span>
                      </button>
                      <button class="btn btn-secondary btn-edit-prices" data-id="${item.id}" style="font-size: 0.78rem; padding: 0.5rem 0.75rem;" title="Adjust prices per platform">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        <span>Adjust Prices</span>
                      </button>
                    ` : `
                      <button class="btn btn-secondary btn-relist-item" data-id="${item.id}" style="flex: 1; font-size: 0.8rem; padding: 0.5rem 0.75rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                        <span>Relist Everywhere</span>
                      </button>
                    `}
                    <button class="btn btn-secondary btn-delete-item" data-id="${item.id}" style="padding: 0.5rem; color: var(--color-danger);" title="Delete listing">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    `;

    // Search input
    const searchInp = container.querySelector('#inv-search');
    if (searchInp) {
      searchInp.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderView();
      });
    }

    // Status filter chips
    container.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        filterStatus = chip.getAttribute('data-status');
        renderView();
      });
    });

    // Platform select filter
    const platFilter = container.querySelector('#inv-platform-filter');
    if (platFilter) {
      platFilter.addEventListener('change', (e) => {
        filterPlatform = e.target.value;
        renderView();
      });
    }

    // Reset filters
    const clearBtn = container.querySelector('#btn-clear-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        filterStatus = 'all';
        filterPlatform = 'all';
        searchQuery = '';
        renderView();
      });
    }

    // "Cross-List New Garment"
    const newBtn = container.querySelector('#btn-inv-new');
    if (newBtn) newBtn.addEventListener('click', () => store.setTab('composer'));

    // "Simulate Sale" for specific item
    container.querySelectorAll('.btn-sell-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = store.clothes.find(c => c.id === id);
        if (!item) return;

        const availablePlatforms = item.platforms && item.platforms.length > 0 ? item.platforms : ['depop'];
        const randomPlatform = availablePlatforms[Math.floor(Math.random() * availablePlatforms.length)];

        const buyers = ['retro_street_co', 'drip_curator_nyc', 'grail_hunter', 'tokyo_vintage_finds'];
        const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];

        const result = store.recordSale({
          itemId: item.id,
          platformId: randomPlatform,
          buyerUsername: randomBuyer
        });

        if (result) {
          notificationsUI.showSaleAlert(result);
          renderView();
        }
      });
    });

    // "Adjust Prices" Modal
    container.querySelectorAll('.btn-edit-prices').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = store.clothes.find(c => c.id === id);
        if (!item) return;
        openPriceAdjusterModal(item);
      });
    });

    // Relist item
    container.querySelectorAll('.btn-relist-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = store.clothes.find(c => c.id === id);
        if (item) {
          item.status = 'active';
          item.soldDetails = null;
          item.delistedPlatforms = [];
          store.save('omnithread_clothes_v1', store.clothes);
          notificationsUI.showInfoToast('Item Relisted', `"${item.title}" is now active across all platforms.`);
          store.notify();
        }
      });
    });

    // Delete item
    container.querySelectorAll('.btn-delete-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Are you sure you want to remove this garment listing?')) {
          store.deleteCloth(id);
          renderView();
        }
      });
    });
  }

  // Price adjustment modal for individual platforms
  function openPriceAdjusterModal(item) {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.className = 'modal-root';

    modalRoot.innerHTML = `
      <div class="modal-window">
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Adjust Channel Prices</h2>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
              Fine-tune the price for "${item.title}" per marketplace.
            </p>
          </div>
          <button id="modal-close-btn" class="toast-close-btn" style="position: static; font-size: 1.5rem;">&times;</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          ${(item.platforms || []).map(pid => {
            const p = PLATFORMS[pid];
            if (!p) return '';
            const currentPrice = (item.platformPrices && item.platformPrices[pid]) || item.basePrice;
            return `
              <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--bg-card-border);">
                <div style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: ${p.color};">${p.iconSvg}</span>
                  <div>
                    <strong style="color: #fff; font-size: 0.9rem;">${p.name}</strong>
                    <div style="font-size: 0.72rem; color: var(--text-muted);">${p.feePercentage}% fee</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <span style="color: var(--text-muted);">$</span>
                  <input type="number" 
                         class="modal-price-input" 
                         data-platform="${p.id}" 
                         value="${currentPrice}" 
                         style="width: 90px; text-align: right; padding: 0.4rem 0.5rem; font-weight: 700;" />
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
          <button id="modal-cancel-btn" class="btn btn-secondary">Cancel</button>
          <button id="modal-save-btn" class="btn btn-primary">Save & Sync Changes</button>
        </div>
      </div>
    `;

    const closeModal = () => {
      modalRoot.className = 'modal-root hidden';
      modalRoot.innerHTML = '';
    };

    modalRoot.querySelector('#modal-close-btn').addEventListener('click', closeModal);
    modalRoot.querySelector('#modal-cancel-btn').addEventListener('click', closeModal);

    modalRoot.querySelector('#modal-save-btn').addEventListener('click', () => {
      modalRoot.querySelectorAll('.modal-price-input').forEach(inp => {
        const pid = inp.getAttribute('data-platform');
        const val = Number(inp.value) || item.basePrice;
        store.updateClothPrice(item.id, pid, val);
      });
      closeModal();
      notificationsUI.showInfoToast('Prices Updated', `Updated prices for "${item.title}" across connected channels.`);
      renderView();
    });
  }

  renderView();
}
