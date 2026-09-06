import { store } from '../state.js';
import { PLATFORMS } from '../platforms.js';
import { notificationsUI } from './notifications.js';

export function renderSalesFeed(container) {
  const notifs = store.notifications;
  const soldItems = store.clothes.filter(c => c.status === 'sold');

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-group">
        <h1>Sales Events & Real-Time Notifications</h1>
        <p>Live audit trail of completed sales, platform payouts, and cross-channel auto-delisting logs.</p>
      </div>
      <div class="header-actions">
        <button id="btn-trigger-sale-feed" class="btn btn-success">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>Trigger New Simulated Sale</span>
        </button>
      </div>
    </div>

    <div class="dashboard-columns">
      <!-- Left: Notifications Log -->
      <div class="content-panel">
        <div class="panel-header">
          <div class="panel-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span>Live Sale Activity Feed (${notifs.length})</span>
          </div>
          <button id="btn-clear-notifs" class="btn btn-secondary" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">Clear All</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${notifs.length === 0 ? `
            <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
              No notifications yet. Trigger a sale or cross-post a new clothing item!
            </div>
          ` : notifs.map(n => {
            const isSale = n.type === 'sale';
            const platform = PLATFORMS[n.platformId] || { name: 'Marketplace', color: '#10b981' };

            return `
              <div style="background: var(--bg-surface); border: 1px solid ${isSale ? 'rgba(16, 185, 129, 0.3)' : 'var(--bg-card-border)'}; border-radius: var(--radius-md); padding: 1.25rem; position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span class="platform-dot" style="background: ${isSale ? 'var(--color-success)' : 'var(--accent-primary)'};"></span>
                    <span style="font-weight: 700; font-size: 0.85rem; color: ${isSale ? 'var(--color-success)' : '#fff'}; text-transform: uppercase; letter-spacing: 0.05em;">
                      ${n.title}
                    </span>
                  </div>
                  <span style="font-size: 0.75rem; color: var(--text-muted);">
                    ${new Date(n.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <div style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 0.35rem;">
                  ${n.itemTitle}
                </div>

                ${isSale ? `
                  <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.6rem;">
                    Sold to buyer <strong>${n.buyer}</strong> on <span style="color: ${platform.color}; font-weight: 600;">${platform.name}</span> for <strong>$${n.salePrice}</strong>. 
                    Net payout after fee: <strong style="color: #fff;">$${n.netPayout}</strong>.
                  </div>
                  ${n.autoDelistedFrom && n.autoDelistedFrom.length > 0 ? `
                    <div style="font-size: 0.72rem; color: #a5b4fc; background: rgba(99, 102, 241, 0.12); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); display: flex; align-items: center; gap: 0.4rem;">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Auto-delist active: instantly deactivated on <strong>${n.autoDelistedFrom.map(p => PLATFORMS[p]?.shortName || p).join(', ')}</strong></span>
                    </div>
                  ` : ''}
                ` : `
                  <div style="font-size: 0.8rem; color: var(--text-secondary);">
                    Broadcasted to ${n.platforms ? n.platforms.length : 0} channels: ${(n.platforms || []).map(p => PLATFORMS[p]?.shortName || p).join(', ')}
                  </div>
                `}
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Right: Payout Breakdown & Platform Revenue Distribution -->
      <div class="content-panel">
        <div class="panel-header">
          <div class="panel-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/></svg>
            <span>Sales By Marketplace</span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          ${Object.values(store.platforms).filter(p => p.active).map(p => {
            const count = soldItems.filter(c => c.soldDetails && c.soldDetails.platformId === p.id).length;
            const revenue = soldItems.filter(c => c.soldDetails && c.soldDetails.platformId === p.id)
              .reduce((sum, c) => sum + (c.soldDetails.salePrice || 0), 0);

            return `
              <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface); padding: 0.85rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--bg-card-border);">
                <div style="display: flex; align-items: center; gap: 0.6rem;">
                  <span style="color: ${p.color};">${p.iconSvg}</span>
                  <div>
                    <div style="font-weight: 700; color: #fff; font-size: 0.85rem;">${p.name}</div>
                    <div style="font-size: 0.72rem; color: var(--text-muted);">${count} items sold</div>
                  </div>
                </div>
                <div style="text-align: right;">
                  <div style="font-family: var(--font-display); font-weight: 700; color: #fff; font-size: 0.95rem;">
                    $${revenue.toFixed(2)}
                  </div>
                  <div style="font-size: 0.7rem; color: var(--color-success);">
                    Fee: ${p.feePercentage}%
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  // Clear notifs
  const clearBtn = container.querySelector('#btn-clear-notifs');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      store.notifications = [];
      store.save('omnithread_notifications_v1', []);
      store.notify();
    });
  }

  // Trigger simulated sale button
  const trigBtn = container.querySelector('#btn-trigger-sale-feed');
  if (trigBtn) {
    trigBtn.addEventListener('click', () => {
      const activeItems = store.clothes.filter(c => c.status === 'active');
      if (activeItems.length === 0) {
        alert('All items are sold! Relist or add a new garment first.');
        return;
      }
      const randomItem = activeItems[Math.floor(Math.random() * activeItems.length)];
      const availablePlatforms = randomItem.platforms && randomItem.platforms.length > 0 ? randomItem.platforms : ['ebay'];
      const randomPlatform = availablePlatforms[Math.floor(Math.random() * availablePlatforms.length)];

      const buyers = ['tokyo_drip', 'melbourne_vintage', 'london_streetwear', 'nyc_hype_beast'];
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];

      const result = store.recordSale({
        itemId: randomItem.id,
        platformId: randomPlatform,
        buyerUsername: randomBuyer
      });

      if (result) {
        notificationsUI.showSaleAlert(result);
        renderSalesFeed(container);
      }
    });
  }
}
