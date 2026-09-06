import { store } from '../state.js';
import { PLATFORMS } from '../platforms.js';
import { notificationsUI } from './notifications.js';

export function renderPlatforms(container) {
  function renderView() {
    const platformsList = Object.values(store.platforms);
    const activeCount = platformsList.filter(p => p.active).length;

    container.innerHTML = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>Selling Platforms & Channel Bridges</h1>
          <p>Toggle and configure active marketplaces. Enable auto-delist protection to ensure items are pulled when sold on another channel.</p>
        </div>
        <div class="header-actions">
          <div style="font-size: 0.85rem; background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3); color: #a5b4fc; padding: 0.5rem 1rem; border-radius: var(--radius-full); font-weight: 700;">
            ${activeCount} of ${platformsList.length} Marketplaces Active
          </div>
        </div>
      </div>

      <div class="platforms-grid">
        ${platformsList.map(p => {
          return `
            <div class="platform-manage-card" style="${!p.active ? 'opacity: 0.7;' : ''}">
              <div class="platform-manage-header">
                <div class="platform-brand-info">
                  <div class="platform-icon-large" style="background: ${p.bgColor}; color: ${p.color}; border: 1px solid ${p.borderColor};">
                    ${p.iconSvg}
                  </div>
                  <div class="platform-title-group">
                    <h3>${p.name}</h3>
                    <div class="platform-category-tag">${p.category}</div>
                  </div>
                </div>

                <label class="toggle-switch" title="Toggle active platform">
                  <input type="checkbox" class="plat-toggle-active" data-id="${p.id}" ${p.active ? 'checked' : ''} />
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
                ${p.tagline}
              </div>

              <div class="platform-stats-row">
                <div class="platform-stat-item">
                  <span class="platform-stat-label">Marketplace Fee</span>
                  <span class="platform-stat-value" style="color: ${p.color};">${p.feePercentage}%</span>
                </div>
                <div class="platform-stat-item">
                  <span class="platform-stat-label">Default Price Offset</span>
                  <span class="platform-stat-value">
                    ${p.defaultMarkup >= 0 ? `+$${p.defaultMarkup}` : `-$${Math.abs(p.defaultMarkup)}`}
                  </span>
                </div>
              </div>

              <div class="platform-settings-toggle">
                <span>Account Status:</span>
                <span style="font-weight: 600; color: ${p.active ? 'var(--color-success)' : 'var(--text-muted)'}; display: flex; align-items: center; gap: 0.35rem;">
                  <span class="platform-dot ${p.active ? 'pulse' : ''}" style="background: ${p.active ? 'var(--color-success)' : 'var(--text-muted)'};"></span>
                  ${p.active ? (p.accountHandle || 'Connected') : 'Disconnected'}
                </span>
              </div>

              <div class="platform-settings-toggle">
                <span title="When an item sells on any channel, immediately delist from this platform">
                  Auto-Delist Protection:
                </span>
                <label class="toggle-switch" style="width: 36px; height: 20px;">
                  <input type="checkbox" class="plat-toggle-delist" data-id="${p.id}" ${p.autoDelist ? 'checked' : ''} />
                  <span class="toggle-slider" style="border-radius: 20px;"></span>
                </label>
              </div>

              <div style="margin-top: 1.25rem; display: flex; gap: 0.5rem;">
                <button class="btn btn-secondary btn-config-platform" data-id="${p.id}" style="width: 100%; font-size: 0.8rem; padding: 0.45rem;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                  <span>Configure Settings & Auth</span>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Active toggles
    container.querySelectorAll('.plat-toggle-active').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const id = e.target.getAttribute('data-id');
        store.togglePlatformActive(id);
        notificationsUI.showInfoToast('Platform Updated', `${store.platforms[id].name} is now ${store.platforms[id].active ? 'Active' : 'Disabled'}.`);
        renderView();
      });
    });

    // Auto-delist toggles
    container.querySelectorAll('.plat-toggle-delist').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const id = e.target.getAttribute('data-id');
        store.togglePlatformAutoDelist(id);
        renderView();
      });
    });

    // Configure Modal
    container.querySelectorAll('.btn-config-platform').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const p = store.platforms[id];
        openPlatformConfigModal(p);
      });
    });
  }

  function openPlatformConfigModal(p) {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.className = 'modal-root';

    modalRoot.innerHTML = `
      <div class="modal-window">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 38px; height: 38px; border-radius: var(--radius-md); background: ${p.bgColor}; color: ${p.color}; display: flex; align-items: center; justify-content: center;">
              ${p.iconSvg}
            </div>
            <div>
              <h2 class="modal-title">${p.name} Settings</h2>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${p.category}</div>
            </div>
          </div>
          <button id="modal-close-btn" class="toast-close-btn" style="position: static; font-size: 1.5rem;">&times;</button>
        </div>

        <div class="form-group">
          <label>Seller Account Handle / Username</label>
          <input type="text" id="cfg-handle" value="${p.accountHandle || ''}" placeholder="e.g. @your_brand_store" />
        </div>

        <div class="form-group">
          <label>Default Price Offset ($ USD added/subtracted on listing)</label>
          <input type="number" id="cfg-markup" value="${p.defaultMarkup || 0}" step="1" />
          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; display: block;">
            Marketplace fee is <strong>${p.feePercentage}%</strong>. Adding a +$5 to +$10 offset protects your profit margins against seller fees.
          </span>
        </div>

        <div class="form-group" style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: var(--radius-md); border: 1px solid var(--bg-card-border);">
          <div style="font-weight: 700; color: #fff; font-size: 0.85rem; margin-bottom: 0.3rem;">API Authentication & OAuth Status</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
            Simulated live OAuth bridge with token exchange and webhook listeners.
          </div>
          <button id="btn-reauth" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            <span>Re-authenticate Credentials</span>
          </button>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1.5rem;">
          <button id="modal-cancel-btn" class="btn btn-secondary">Cancel</button>
          <button id="modal-save-btn" class="btn btn-primary">Save Settings</button>
        </div>
      </div>
    `;

    const closeModal = () => {
      modalRoot.className = 'modal-root hidden';
      modalRoot.innerHTML = '';
    };

    modalRoot.querySelector('#modal-close-btn').addEventListener('click', closeModal);
    modalRoot.querySelector('#modal-cancel-btn').addEventListener('click', closeModal);

    modalRoot.querySelector('#btn-reauth').addEventListener('click', (e) => {
      e.target.innerHTML = 'Connecting...';
      setTimeout(() => {
        e.target.innerHTML = '✓ Authenticated Successfully';
        notificationsUI.showInfoToast('OAuth Refreshed', `Connected and synchronized with ${p.name} APIs.`);
      }, 700);
    });

    modalRoot.querySelector('#modal-save-btn').addEventListener('click', () => {
      const handle = modalRoot.querySelector('#cfg-handle').value.trim();
      const markup = Number(modalRoot.querySelector('#cfg-markup').value) || 0;

      p.accountHandle = handle;
      p.defaultMarkup = markup;
      store.save('omnithread_platforms_v1', store.platforms);
      closeModal();
      notificationsUI.showInfoToast('Saved', `${p.name} settings updated.`);
      renderView();
    });
  }

  renderView();
}
