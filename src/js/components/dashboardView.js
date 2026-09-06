import { store } from '../state.js';
import { PLATFORMS, GARMENT_ICONS } from '../platforms.js';

export function renderDashboard(container) {
  const metrics = store.getMetrics();
  const recentSales = store.clothes.filter(c => c.status === 'sold');
  const activeClothes = store.clothes.filter(c => c.status === 'active');
  const activePlatformsList = Object.values(store.platforms).filter(p => p.active);

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-group">
        <h1>Seller Command Center</h1>
        <p>Real-time cross-channel inventory synchronization, platform analytics, and automated multi-delisting protection.</p>
      </div>
      <div class="header-actions">
        <button id="btn-goto-composer" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>Cross-List New Item</span>
        </button>
        <button id="btn-goto-platforms" class="btn btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
          <span>Manage Platforms</span>
        </button>
      </div>
    </div>

    <!-- Top Key Metrics Cards -->
    <div class="metrics-grid">
      <div class="metric-card" style="--card-accent: #10b981;">
        <div class="metric-header">
          <span class="metric-label">Total Gross Sales</span>
          <div class="metric-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
        </div>
        <div class="metric-value">$${metrics.grossRevenue.toFixed(2)}</div>
        <div class="metric-sub positive">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
          <span>100% synchronized payout calculation</span>
        </div>
      </div>

      <div class="metric-card" style="--card-accent: #6366f1;">
        <div class="metric-header">
          <span class="metric-label">Net Take-Home Profit</span>
          <div class="metric-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
        </div>
        <div class="metric-value">$${metrics.netProfit.toFixed(2)}</div>
        <div class="metric-sub">
          <span>After platform fees & deductions</span>
        </div>
      </div>

      <div class="metric-card" style="--card-accent: #06b6d4;">
        <div class="metric-header">
          <span class="metric-label">Active Cross-Listings</span>
          <div class="metric-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          </div>
        </div>
        <div class="metric-value">${metrics.activeCrossListingsCount}</div>
        <div class="metric-sub">
          <span>Across ${metrics.activeItemsCount} distinct apparel garments</span>
        </div>
      </div>

      <div class="metric-card" style="--card-accent: #f59e0b;">
        <div class="metric-header">
          <span class="metric-label">Active Channel Bridges</span>
          <div class="metric-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
        </div>
        <div class="metric-value">${metrics.totalChannelsActive} / 12</div>
        <div class="metric-sub">
          <span>Zero-latency auto-delist protection ON</span>
        </div>
      </div>
    </div>

    <!-- Active Channel Status Pill Bar -->
    <div class="content-panel" style="margin-bottom: 2rem;">
      <div class="panel-header">
        <div class="panel-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          <span>Live Channel Synchronization Status</span>
        </div>
        <span style="font-size: 0.8rem; color: var(--color-success); display: flex; align-items: center; gap: 0.4rem;">
          <span class="platform-dot pulse" style="background: var(--color-success)"></span>
          All channels responsive & listening
        </span>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        ${Object.values(store.platforms).map(p => `
          <div class="platform-pill ${p.active ? 'active' : ''}" 
               style="--pill-color: ${p.color}; --pill-bg: ${p.bgColor}; --pill-border: ${p.borderColor};">
            <span class="platform-dot ${p.active ? 'pulse' : ''}"></span>
            <strong>${p.shortName || p.name}</strong>
            <span style="opacity: 0.75; font-size: 0.7rem;">(${p.active ? 'Connected' : 'Disabled'})</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 2 Column Layout: Recent Sales & Active Inventory Spotlight -->
    <div class="dashboard-columns">
      <!-- Left Column: Active Items Ready to Sell -->
      <div class="content-panel">
        <div class="panel-header">
          <div class="panel-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            <span>Active Cross-Listed Clothes (${activeClothes.length})</span>
          </div>
          <button id="btn-view-all-inventory" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;">View All Catalog &rarr;</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${activeClothes.slice(0, 3).map(item => {
            const iconConfig = GARMENT_ICONS[item.category] || GARMENT_ICONS.jacket;
            return `
              <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--bg-card-border); gap: 1rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(255,255,255,0.04); display: flex; align-items: center; justify-content: center; color: ${iconConfig.color};">
                    ${iconConfig.svg}
                  </div>
                  <div>
                    <div style="font-weight: 700; color: #fff; font-size: 0.95rem; margin-bottom: 0.2rem;">${item.title}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted); display: flex; gap: 0.75rem;">
                      <span>${item.brand}</span>
                      <span>•</span>
                      <span>Size ${item.size}</span>
                      <span>•</span>
                      <span style="color: var(--color-success); font-weight: 600;">$${item.basePrice} base</span>
                    </div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; justify-content: flex-end;">
                  ${(item.platforms || []).map(pid => {
                    const p = PLATFORMS[pid];
                    return p ? `
                      <span class="platform-pill" style="padding: 0.2rem 0.5rem; font-size: 0.7rem; color: ${p.color}; background: ${p.bgColor}; border-color: ${p.borderColor};">
                        ${p.shortName || p.name}
                      </span>
                    ` : '';
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Right Column: Auto-Delist & Sales Protection Feed -->
      <div class="content-panel">
        <div class="panel-header">
          <div class="panel-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Sales & Auto-Delist Logs</span>
          </div>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${recentSales.length} Completed</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          ${recentSales.length === 0 ? `
            <div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.85rem;">
              No sales logged yet. Click "Simulate Sale Alert" above to trigger one!
            </div>
          ` : recentSales.map(item => {
            const sold = item.soldDetails || {};
            const platform = PLATFORMS[sold.platformId] || { name: sold.platformId, color: '#10b981' };
            return `
              <div style="background: var(--bg-surface); border-radius: var(--radius-md); padding: 1rem; border: 1px solid rgba(16, 185, 129, 0.2);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                  <span style="font-size: 0.75rem; font-weight: 700; color: ${platform.color}; text-transform: uppercase;">
                    Sold on ${sold.platformName || platform.name}
                  </span>
                  <span style="font-family: var(--font-display); font-weight: 700; color: var(--color-success); font-size: 1rem;">
                    +$${sold.salePrice || item.basePrice}
                  </span>
                </div>
                <div style="font-size: 0.85rem; font-weight: 600; color: #fff; margin-bottom: 0.35rem;">
                  ${item.title}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                  Buyer: <strong>${sold.buyerUsername}</strong> • Net Payout: <strong style="color: #fff;">$${sold.netPayout}</strong>
                </div>
                ${item.delistedPlatforms && item.delistedPlatforms.length > 0 ? `
                  <div style="font-size: 0.7rem; color: #a5b4fc; background: rgba(99, 102, 241, 0.12); padding: 0.3rem 0.5rem; border-radius: var(--radius-sm); display: flex; align-items: center; gap: 0.3rem;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span>Delisted from: ${item.delistedPlatforms.map(p => PLATFORMS[p]?.shortName || p).join(', ')}</span>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  // Attach navigation buttons
  const compBtn = container.querySelector('#btn-goto-composer');
  if (compBtn) compBtn.addEventListener('click', () => store.setTab('composer'));

  const platBtn = container.querySelector('#btn-goto-platforms');
  if (platBtn) platBtn.addEventListener('click', () => store.setTab('platforms'));

  const invBtn = container.querySelector('#btn-view-all-inventory');
  if (invBtn) invBtn.addEventListener('click', () => store.setTab('inventory'));
}
