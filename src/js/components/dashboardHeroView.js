import { getNextLookbookImage, getCurrentLookbookImage } from '../lookbookImages.js';
import { store } from '../state.js';

export function renderDashboardHero(container) {
  // Rotate to the next image automatically every time user visits/returns to dashboard
  const look = getNextLookbookImage();

  container.innerHTML = `
    <div class="lookbook-hero-container" id="lookbook-hero" style="background-image: url('${look.url}');">
      <div class="lookbook-hero-overlay"></div>

      <!-- Top Right Shuffle / Refresh Visual Button -->
      <div class="lookbook-controls">
        <button id="btn-cycle-look" class="btn-cycle-image" title="Shuffle aesthetic image">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          <span>Cycle Visual (${look.mood})</span>
        </button>
      </div>

      <!-- Bottom Hero Content -->
      <div class="lookbook-content">
        <div class="lookbook-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span id="look-tag-text">${look.tag}</span>
        </div>

        <h1 class="lookbook-title" id="look-title-text">${look.title}</h1>
        <p class="lookbook-subtitle" id="look-subtitle-text">${look.subtitle}</p>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
          <button id="btn-hero-list" class="btn btn-primary" style="padding: 0.85rem 1.6rem; font-size: 0.95rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Cross-List An Item</span>
          </button>

          <button id="btn-hero-command" class="btn btn-secondary" style="background: rgba(15, 20, 32, 0.85); backdrop-filter: blur(16px); padding: 0.85rem 1.6rem; font-size: 0.95rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            <span>Sales Command Center</span>
          </button>

          <button id="btn-hero-inventory" class="btn btn-secondary" style="background: rgba(15, 20, 32, 0.85); backdrop-filter: blur(16px); padding: 0.85rem 1.6rem; font-size: 0.95rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>
            <span>Wardrobe Inventory</span>
          </button>
        </div>
      </div>
    </div>
  `;

  // Cycle button
  const cycleBtn = container.querySelector('#btn-cycle-look');
  if (cycleBtn) {
    cycleBtn.addEventListener('click', () => {
      const next = getNextLookbookImage();
      const hero = container.querySelector('#lookbook-hero');
      if (hero) hero.style.backgroundImage = `url('${next.url}')`;
      container.querySelector('#look-tag-text').textContent = next.tag;
      container.querySelector('#look-title-text').textContent = next.title;
      container.querySelector('#look-subtitle-text').textContent = next.subtitle;
      cycleBtn.querySelector('span').textContent = `Cycle Visual (${next.mood})`;
    });
  }

  // Quick Action navigation
  const listBtn = container.querySelector('#btn-hero-list');
  if (listBtn) listBtn.addEventListener('click', () => store.setTab('composer'));

  const cmdBtn = container.querySelector('#btn-hero-command');
  if (cmdBtn) cmdBtn.addEventListener('click', () => store.setTab('command'));

  const invBtn = container.querySelector('#btn-hero-inventory');
  if (invBtn) invBtn.addEventListener('click', () => store.setTab('inventory'));
}
