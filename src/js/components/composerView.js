import { store } from '../state.js';
import { PLATFORMS, GARMENT_ICONS } from '../platforms.js';
import { soundFx } from '../audio.js';
import { notificationsUI } from './notifications.js';

export function renderComposer(container) {
  let selectedCategory = 'jacket';
  let basePrice = 120;
  let uploadedPhotos = []; // array of { id, url, name }
  
  // Track custom price overrides per platform
  const customPrices = {};
  
  // Pre-calculate initial platform prices based on default markups
  Object.values(store.platforms).forEach(p => {
    if (p.active) {
      customPrices[p.id] = basePrice + (p.defaultMarkup || 0);
    }
  });

  // Track checked platforms
  const checkedPlatforms = new Set(
    Object.values(store.platforms).filter(p => p.active).map(p => p.id)
  );

  function calculateProfits(price, feePercent) {
    const fee = (price * (feePercent / 100));
    const profit = Math.max(0, price - fee);
    return { fee: fee.toFixed(2), profit: profit.toFixed(2) };
  }

  // Pre-built AI Presets for rapid intelligent generation
  const AI_PRESETS = {
    carhartt: {
      prompt: 'Vintage Carhartt Detroit Chore Coat Distressed Brown',
      title: 'Vintage 90s Carhartt J97 Detroit Chore Jacket Blanket-Lined',
      brand: 'Carhartt WIP',
      category: 'jacket',
      size: 'L',
      condition: 'True Vintage Distressed',
      color: 'Faded Hamilton Brown',
      basePrice: 195,
      description: 'Authentic 1990s USA-made Carhartt Detroit jacket (J97) in iconic Hamilton brown canvas. Heavyweight duck cotton with striped blanket lining, corduroy collar, and zip chest pocket. Natural patina, authentic distressing and sun fade throughout. Pristine vintage drape.'
    },
    stussy: {
      prompt: 'Stussy 8-Ball Mohair Knitted Sweater Cardigan',
      title: 'Stussy 8-Ball Brushed Mohair Knit Cardigan',
      brand: 'Stussy',
      category: 'sweater',
      size: 'XL (Oversized)',
      condition: 'Brand New With Tags',
      color: 'Bone / Black',
      basePrice: 240,
      description: 'Sold-out Stussy 8-Ball mohair blend cardigan. Ultra-soft hairy yarn texture with jacquard 8-Ball graphic across the back. Horn buttons, rib-knit cuffs and hem. 100% deadstock with original store tags and dust bag.'
    },
    nike_dunk: {
      prompt: 'Nike Dunk Low Retro Panda Black White',
      title: 'Nike Dunk Low Retro "Panda" Black / White',
      brand: 'Nike Sportswear',
      category: 'sneakers',
      size: 'US 10.5',
      condition: 'Brand New With Tags',
      color: 'White / Black',
      basePrice: 135,
      description: 'Classic two-tone smooth leather construction with perforated toe box, padded low-cut collar, and rubber traction outsole. Completely unworn in original box with receipt.'
    },
    balenciaga: {
      prompt: 'Balenciaga Oversized Heavyweight Washed Zip Hoodie',
      title: 'Balenciaga Homme Washed Loopback Zip Hoodie',
      brand: 'Balenciaga',
      category: 'hoodie',
      size: 'L',
      condition: 'Pristine Pre-Owned',
      color: 'Washed Charcoal',
      basePrice: 420,
      description: 'Signature drop-shoulder exaggerated cocoon silhouette in 600 GSM organic loopback fleece. Distressed sleeve cuffs and subtle enzyme-washed sun fading across hood seams. Includes brand hanger and authenticity card.'
    }
  };

  function applyAIPreset(preset) {
    container.querySelector('#item-title').value = preset.title;
    container.querySelector('#item-brand').value = preset.brand;
    container.querySelector('#item-size').value = preset.size;
    container.querySelector('#item-condition').value = preset.condition;
    container.querySelector('#item-color').value = preset.color;
    container.querySelector('#item-desc').value = preset.description;
    container.querySelector('#item-base-price').value = preset.basePrice;

    selectedCategory = preset.category;
    basePrice = preset.basePrice;

    // Recalculate platform prices
    Object.values(store.platforms).forEach(p => {
      if (p.active) {
        customPrices[p.id] = basePrice + (p.defaultMarkup || 0);
      }
    });

    renderView();
    notificationsUI.showInfoToast('OmniAI Generated', `Generated listing & market price estimate for "${preset.title}"!`);
  }

  function renderView() {
    container.innerHTML = `
      <div class="view-header">
        <div class="view-title-group">
          <h1>Universal Cross-Listing Composer</h1>
          <p>Upload photos, generate titles & descriptions with OmniAI, adjust platform pricing, and broadcast everywhere in one click.</p>
        </div>
      </div>

      <!-- OmniAI Studio Generation Banner -->
      <div class="ai-generator-panel">
        <div class="ai-generator-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="ai-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              OmniAI Studio
            </span>
            <span style="font-size: 0.85rem; font-weight: 700; color: #fff;">Smart Title, Description & Resell Price Estimator</span>
          </div>
          <span style="font-size: 0.75rem; color: #cbd5e1;">Multi-Marketplace Algorithm v2.4</span>
        </div>

        <div style="font-size: 0.82rem; color: #e2e8f0; margin-bottom: 0.75rem;">
          Type in keywords (e.g. garment type, brand, era) or choose a quick prompt to automatically craft an SEO-optimized title, compelling description, and estimated price:
        </div>

        <div class="ai-input-row">
          <input type="text" id="ai-prompt-input" placeholder="e.g. Vintage 90s Carhartt Detroit jacket blanket lined faded brown" style="flex: 1; background: rgba(15, 20, 32, 0.7); border-color: rgba(168, 85, 247, 0.4);" />
          <button id="btn-ai-generate-action" class="btn-ai-generate">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <span>Generate with AI</span>
          </button>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem; flex-wrap: wrap;">
          <span style="font-size: 0.72rem; color: var(--text-muted);">Quick AI Prompts:</span>
          <span class="ai-chip" data-preset="carhartt">🔥 Vintage Carhartt Detroit ($195 est.)</span>
          <span class="ai-chip" data-preset="stussy">🎱 Stussy 8-Ball Mohair ($240 est.)</span>
          <span class="ai-chip" data-preset="nike_dunk">👟 Nike Dunk Panda ($135 est.)</span>
          <span class="ai-chip" data-preset="balenciaga">🧥 Balenciaga Oversized Hoodie ($420 est.)</span>
        </div>
      </div>

      <div class="composer-grid">
        <!-- Left Column: Apparel Details & Photos -->
        <div class="content-panel">
          <form id="composer-form">
            <!-- 1. Garment Photo Uploader -->
            <div class="form-section">
              <div class="form-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                <span>1. Garment Photography & Listing Photos</span>
              </div>

              <div class="photo-uploader-dropzone" id="photo-dropzone">
                <input type="file" id="photo-file-input" multiple accept="image/*" style="display: none;" />
                <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; pointer-events: none;">
                  <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(99, 102, 241, 0.15); display: flex; align-items: center; justify-content: center; color: var(--accent-primary);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  </div>
                  <strong style="color: #fff; font-size: 0.95rem;">Click or Drag Photos Here to Upload</strong>
                  <span style="font-size: 0.78rem; color: var(--text-muted);">
                    PNG, JPG, WEBP. Photos will automatically be attached to all cross-posted listings.
                  </span>
                </div>
              </div>

              <!-- Uploaded Previews -->
              ${uploadedPhotos.length > 0 ? `
                <div class="photo-previews-grid">
                  ${uploadedPhotos.map((p, idx) => `
                    <div class="photo-preview-card">
                      <img src="${p.url}" alt="Garment photo" />
                      ${idx === 0 ? '<span class="photo-cover-badge">Cover</span>' : ''}
                      <button type="button" class="photo-remove-btn" data-idx="${idx}" title="Remove photo">&times;</button>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>

            <!-- 2. Garment Placeholder Icon Picker -->
            <div class="form-section">
              <div class="form-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
                <span>2. Select Garment Category Icon</span>
              </div>
              <div class="garment-icon-picker">
                ${Object.values(GARMENT_ICONS).map(icon => `
                  <div class="garment-icon-card ${icon.id === selectedCategory ? 'selected' : ''}" data-cat="${icon.id}">
                    <div style="color: ${icon.color};">
                      ${icon.svg}
                    </div>
                    <span>${icon.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 3. Basic Apparel Attributes -->
            <div class="form-section">
              <div class="form-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>3. Apparel Details & Specifications</span>
              </div>

              <div class="form-group">
                <label for="item-title">Listing Title *</label>
                <input type="text" id="item-title" required placeholder="e.g. Vintage 90s Heavyweight Washed Leather Biker Jacket" value="Vintage 90s Heavyweight Boxy Moto Jacket" />
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label for="item-brand">Brand / Designer *</label>
                  <input type="text" id="item-brand" required placeholder="e.g. Acne Studios, Nike, Carhartt WIP" value="Archive Studio" />
                </div>
                <div class="form-group">
                  <label for="item-size">Size *</label>
                  <select id="item-size">
                    <option value="XS">Extra Small (XS)</option>
                    <option value="S">Small (S)</option>
                    <option value="M" selected>Medium (M)</option>
                    <option value="L">Large (L)</option>
                    <option value="XL">Extra Large (XL)</option>
                    <option value="XXL">XXL</option>
                    <option value="32x32">32 x 32 (Pants)</option>
                    <option value="US 10.5">US 10.5 (Shoes)</option>
                  </select>
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label for="item-condition">Garment Condition</label>
                  <select id="item-condition">
                    <option value="Brand New With Tags">Brand New With Tags (BNWT)</option>
                    <option value="Pristine Pre-Owned" selected>Pristine Pre-Owned</option>
                    <option value="Gently Worn">Gently Worn / Good Condition</option>
                    <option value="True Vintage Distressed">True Vintage Distressed</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="item-color">Colorway / Wash</label>
                  <input type="text" id="item-color" placeholder="e.g. Washed Obsidian, Olive Drab" value="Washed Black" />
                </div>
              </div>

              <div class="form-group">
                <label for="item-base-price">Universal Base Asking Price ($ USD) *</label>
                <input type="number" id="item-base-price" min="5" step="1" required value="${basePrice}" />
                <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; display: block;">
                  Adjusting this automatically recalibrates platform prices across all channels below.
                </span>
              </div>

              <div class="form-group">
                <label for="item-desc">Garment Description & Measurements</label>
                <textarea id="item-desc" rows="4" placeholder="Mention fit, measurements (pit-to-pit, length), fabric weight, and shipping notes...">Grain-treated heavyweight leather with custom oxidized zips, boxy torso cut, quilted lining. No flaws, pristine condition. Ships same day.</textarea>
              </div>
            </div>
          </form>
        </div>

        <!-- Right Column: Multi-Channel Cross-Posting & Pricing Overrides -->
        <div class="content-panel">
          <div class="panel-header">
            <div class="panel-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
              <span>4. Multi-Channel Broadcast Engine</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--color-success); font-weight: 600;">
              ${checkedPlatforms.size} channels selected
            </span>
          </div>

          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1rem;">
            Toggle which platforms you want to post to. You can adjust the price for individual platforms (e.g. higher on eBay/Poshmark to offset fees, lower on Facebook for local pickup) anytime.
          </p>

          <table class="platform-price-table">
            <tbody>
              ${Object.values(store.platforms).filter(p => p.active).map(p => {
                const currentPrice = customPrices[p.id] ?? (basePrice + (p.defaultMarkup || 0));
                const { fee, profit } = calculateProfits(currentPrice, p.feePercentage);
                const isChecked = checkedPlatforms.has(p.id);

                return `
                  <tr class="platform-price-row" style="${!isChecked ? 'opacity: 0.5;' : ''}">
                    <td class="platform-price-cell" style="width: 40px;">
                      <label class="toggle-switch">
                        <input type="checkbox" class="channel-check" data-platform="${p.id}" ${isChecked ? 'checked' : ''} />
                        <span class="toggle-slider"></span>
                      </label>
                    </td>
                    <td class="platform-price-cell">
                      <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: ${p.color};">${p.iconSvg}</span>
                        <div>
                          <div style="font-weight: 700; color: #fff; font-size: 0.85rem;">${p.name}</div>
                          <div style="font-size: 0.7rem; color: var(--text-muted);">${p.feePercentage}% fee • est. -$${fee}</div>
                        </div>
                      </div>
                    </td>
                    <td class="platform-price-cell" style="width: 130px;">
                      <div style="display: flex; align-items: center; gap: 0.25rem;">
                        <span style="color: var(--text-muted); font-size: 0.85rem;">$</span>
                        <input type="number" 
                               class="platform-price-input" 
                               data-platform="${p.id}" 
                               value="${currentPrice}" 
                               step="1" 
                               min="1" 
                               style="padding: 0.4rem 0.5rem; font-size: 0.85rem; font-weight: 700; text-align: right;"
                               ${!isChecked ? 'disabled' : ''} />
                      </div>
                      <div style="font-size: 0.68rem; color: var(--color-success); text-align: right; margin-top: 0.2rem;">
                        Net: $${profit}
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>

          <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.08);">
            <button id="btn-broadcast-submit" class="btn btn-primary" style="width: 100%; padding: 0.9rem; font-size: 1rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <span>Publish & Cross-Post to ${checkedPlatforms.size} Platforms</span>
            </button>
            <div style="text-align: center; margin-top: 0.75rem; font-size: 0.75rem; color: var(--text-muted);">
              ⚡ Auto-delisting protection is armed: when sold on any platform, listings on other channels will immediately deactivate.
            </div>
          </div>
        </div>
      </div>
    `;

    // Photo Dropzone events
    const dropzone = container.querySelector('#photo-dropzone');
    const fileInput = container.querySelector('#photo-file-input');

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());

      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });

      dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
      });

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleFiles(e.dataTransfer.files);
        }
      });

      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleFiles(e.target.files);
        }
      });
    }

    function handleFiles(files) {
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (event) => {
            uploadedPhotos.push({
              id: 'photo_' + Date.now() + Math.random(),
              name: file.name,
              url: event.target.result
            });
            renderView();
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // Remove photo
    container.querySelectorAll('.photo-remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = Number(btn.getAttribute('data-idx'));
        uploadedPhotos.splice(idx, 1);
        renderView();
      });
    });

    // AI Prompt input action
    const aiBtn = container.querySelector('#btn-ai-generate-action');
    if (aiBtn) {
      aiBtn.addEventListener('click', () => {
        const query = container.querySelector('#ai-prompt-input').value.trim();
        if (!query) {
          applyAIPreset(AI_PRESETS.carhartt);
          return;
        }
        // Generate customized output from keywords
        const words = query.toLowerCase();
        let cat = 'jacket';
        if (words.includes('hoodie') || words.includes('sweatshirt')) cat = 'hoodie';
        else if (words.includes('pant') || words.includes('jean') || words.includes('denim')) cat = 'jeans';
        else if (words.includes('shoe') || words.includes('sneaker') || words.includes('boot')) cat = 'sneakers';
        else if (words.includes('shirt') || words.includes('tee')) cat = 'tshirt';
        else if (words.includes('knit') || words.includes('sweater') || words.includes('cardigan')) cat = 'sweater';

        const generatedPreset = {
          title: query.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + ' (Curated Archive)',
          brand: query.split(' ')[0].toUpperCase(),
          category: cat,
          size: 'L',
          condition: 'Pristine Pre-Owned',
          color: 'Custom Tone',
          basePrice: 165,
          description: `Authentic curated ${query}. High quality materials, premium vintage cut with natural drape. Flawless stitching, sanitized and ships same business day.`
        };

        applyAIPreset(generatedPreset);
      });
    }

    // AI Quick chips
    container.querySelectorAll('.ai-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const key = chip.getAttribute('data-preset');
        if (AI_PRESETS[key]) {
          applyAIPreset(AI_PRESETS[key]);
        }
      });
    });

    // Garment Category selection
    container.querySelectorAll('.garment-icon-card').forEach(card => {
      card.addEventListener('click', () => {
        selectedCategory = card.getAttribute('data-cat');
        renderView();
      });
    });

    // Base price input change
    const basePriceInput = container.querySelector('#item-base-price');
    if (basePriceInput) {
      basePriceInput.addEventListener('input', (e) => {
        basePrice = Number(e.target.value) || 0;
        Object.values(store.platforms).forEach(p => {
          if (p.active) {
            customPrices[p.id] = basePrice + (p.defaultMarkup || 0);
          }
        });
        renderView();
      });
    }

    // Platform toggle checkboxes
    container.querySelectorAll('.channel-check').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const pid = e.target.getAttribute('data-platform');
        if (e.target.checked) {
          checkedPlatforms.add(pid);
        } else {
          checkedPlatforms.delete(pid);
        }
        renderView();
      });
    });

    // Platform custom price inputs
    container.querySelectorAll('.platform-price-input').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const pid = e.target.getAttribute('data-platform');
        customPrices[pid] = Number(e.target.value) || 0;
      });
    });

    // Submit & Broadcast
    const submitBtn = container.querySelector('#btn-broadcast-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = container.querySelector('#item-title').value.trim();
        const brand = container.querySelector('#item-brand').value.trim();
        const size = container.querySelector('#item-size').value;
        const condition = container.querySelector('#item-condition').value;
        const color = container.querySelector('#item-color').value;
        const desc = container.querySelector('#item-desc').value;

        if (!title) {
          alert('Please enter a listing title.');
          return;
        }

        if (checkedPlatforms.size === 0) {
          alert('Please select at least one selling platform to publish to.');
          return;
        }

        startBroadcastSimulation({
          title,
          brand,
          size,
          condition,
          color,
          category: selectedCategory,
          basePrice,
          platformPrices: { ...customPrices },
          platforms: Array.from(checkedPlatforms),
          photos: uploadedPhotos.map(p => p.url),
          description: desc
        });
      });
    }
  }

  // Multi-platform cross-posting simulation modal
  function startBroadcastSimulation(itemData) {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.className = 'modal-root';

    const platformsToSync = itemData.platforms;
    let stepIndex = 0;

    modalRoot.innerHTML = `
      <div class="modal-window">
        <div class="modal-header">
          <h2 class="modal-title" style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="platform-dot pulse" style="background: var(--accent-primary); width: 10px; height: 10px;"></span>
            Instant Cross-Listing Engine
          </h2>
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">LIVE BROADCAST</span>
        </div>

        <div style="margin-bottom: 1rem;">
          <div style="font-weight: 700; color: #fff; font-size: 1rem; margin-bottom: 0.25rem;">
            ${itemData.title}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">
            Syncing item metadata, ${itemData.photos?.length || 0} photo(s), pricing overrides, and garment specs across ${platformsToSync.length} selling channels.
          </div>
        </div>

        <div class="sync-progress-bar-wrap">
          <div id="sync-progress-bar" class="sync-progress-bar-inner"></div>
        </div>

        <div class="sync-steps-list" id="sync-steps-list">
          ${platformsToSync.map(pid => {
            const p = PLATFORMS[pid] || { name: pid, color: '#fff' };
            return `
              <div class="sync-step-item pending" id="step-item-${pid}">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <span style="color: ${p.color};">${p.iconSvg || ''}</span>
                  <div>
                    <strong style="color: #fff; font-size: 0.85rem;">${p.name}</strong>
                    <span style="color: var(--text-muted); font-size: 0.75rem; margin-left: 0.4rem;">($${itemData.platformPrices[pid] || itemData.basePrice})</span>
                  </div>
                </div>
                <span class="step-status-tag" style="font-size: 0.75rem; color: var(--text-muted);">
                  Queued...
                </span>
              </div>
            `;
          }).join('')}
        </div>

        <div id="modal-actions-area" style="margin-top: 1.5rem; text-align: right; display: none;">
          <button id="btn-modal-finish" class="btn btn-success" style="width: 100%;">
            Listing Live Everywhere! Open Wardrobe Inventory &rarr;
          </button>
        </div>
      </div>
    `;

    const progressBar = document.getElementById('sync-progress-bar');
    const actionsArea = document.getElementById('modal-actions-area');

    function processNextPlatform() {
      if (stepIndex >= platformsToSync.length) {
        progressBar.style.width = '100%';
        soundFx.playSyncCompleteSound();
        actionsArea.style.display = 'block';

        store.addClothListing(itemData);

        document.getElementById('btn-modal-finish').addEventListener('click', () => {
          modalRoot.className = 'modal-root hidden';
          modalRoot.innerHTML = '';
          store.setTab('inventory');
        });
        return;
      }

      const currentPlatformId = platformsToSync[stepIndex];
      const stepElem = document.getElementById(`step-item-${currentPlatformId}`);
      if (stepElem) {
        stepElem.className = 'sync-step-item';
        stepElem.querySelector('.step-status-tag').innerHTML = `
          <span style="color: var(--color-cyan); display: flex; align-items: center; gap: 0.3rem;">
            <span class="platform-dot pulse" style="background: var(--color-cyan)"></span>
            Publishing schema & photos...
          </span>
        `;
      }

      const percent = Math.round(((stepIndex + 0.5) / platformsToSync.length) * 100);
      progressBar.style.width = percent + '%';

      setTimeout(() => {
        if (stepElem) {
          stepElem.className = 'sync-step-item completed';
          stepElem.querySelector('.step-status-tag').innerHTML = `
            <span style="color: var(--color-success); font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              Live & Synced
            </span>
          `;
        }
        stepIndex++;
        const finishPercent = Math.round((stepIndex / platformsToSync.length) * 100);
        progressBar.style.width = finishPercent + '%';
        processNextPlatform();
      }, 450);
    }

    setTimeout(processNextPlatform, 300);
  }

  renderView();
}
