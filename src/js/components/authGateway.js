import { RESELL_BACKGROUNDS } from '../resellBackgrounds.js';
import { store } from '../state.js';
import { notificationsUI } from './notifications.js';

let intervalId = null;
let currentBgIndex = 0;

export function renderAuthGateway(container) {
  // Clear any existing timer
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  let isSignUp = false;

  container.innerHTML = `
    <div class="auth-gateway-wrap">
      <!-- Crossfading Dual Background Layers -->
      <div id="auth-bg-a" class="auth-bg-layer active" style="background-image: url('${RESELL_BACKGROUNDS[0].url}');"></div>
      <div id="auth-bg-b" class="auth-bg-layer" style="background-image: url('${RESELL_BACKGROUNDS[1].url}');"></div>
      <div class="auth-overlay-scrim"></div>

      <!-- Resell Background Caption -->
      <div class="auth-bg-caption" id="auth-bg-caption">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/></svg>
        <span id="caption-text">${RESELL_BACKGROUNDS[0].title}</span>
      </div>

      <!-- Main Content Hero & Auth Card -->
      <div class="auth-center-content">
        <!-- Big Brand Title & Subtitle -->
        <div class="auth-header-block">
          <div class="auth-pill-badge">
            <span class="platform-dot pulse" style="background: #10b981;"></span>
            <span>MULTI-CHANNEL SELLING HUB</span>
          </div>

          <h1 class="auth-main-title">OMNITHREAD</h1>

          <p class="auth-sub-desc">
            The unified apparel cross-listing hub. Broadcast garments once to Facebook Marketplace, eBay, Depop, Poshmark, and 10+ platforms with real-time auto-delisting protection.
          </p>
        </div>

        <!-- Auth Card -->
        <div class="auth-card">
          <div class="auth-card-tabs">
            <button type="button" class="auth-tab-btn active" id="tab-login">Sign In</button>
            <button type="button" class="auth-tab-btn" id="tab-signup">Create Hub Account</button>
          </div>

          <form id="auth-form" class="auth-form-element">
            <div class="form-group" style="text-align: left; margin-bottom: 1.25rem;">
              <label for="auth-email" style="font-size: 0.85rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem; display: block;">
                Seller Email Address
              </label>
              <div style="position: relative;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted);">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <input type="email" id="auth-email" required placeholder="seller@yourbrand.com" style="padding-left: 2.75rem; background: #0c101a; border-color: rgba(255,255,255,0.15); height: 48px;" value="reseller@omnithread.io" />
              </div>
              <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem; display: block;">
                Each email loads a personal, isolated inventory hub and marketplace sync settings.
              </span>
            </div>

            <button type="submit" class="btn btn-primary auth-submit-btn" id="btn-auth-submit" style="width: 100%; height: 50px; font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem;">
              <span>Access Your Item Hub</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>

            <!-- Quick Demo Button -->
            <button type="button" id="btn-quick-demo" class="btn btn-secondary" style="width: 100%; height: 44px; font-size: 0.85rem; background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1);">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <span>Instant Guest Reseller Demo</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  // Start 10-second smooth background crossfade
  const bgA = container.querySelector('#auth-bg-a');
  const bgB = container.querySelector('#auth-bg-b');
  const captionText = container.querySelector('#caption-text');
  let currentLayer = 'a';

  intervalId = setInterval(() => {
    currentBgIndex = (currentBgIndex + 1) % RESELL_BACKGROUNDS.length;
    const nextBg = RESELL_BACKGROUNDS[currentBgIndex];

    if (currentLayer === 'a') {
      bgB.style.backgroundImage = `url('${nextBg.url}')`;
      bgB.classList.add('active');
      bgA.classList.remove('active');
      currentLayer = 'b';
    } else {
      bgA.style.backgroundImage = `url('${nextBg.url}')`;
      bgA.classList.add('active');
      bgB.classList.remove('active');
      currentLayer = 'a';
    }

    if (captionText) {
      captionText.textContent = nextBg.title;
    }
  }, 10000); // changes smoothly every 10 seconds

  // Tab switching
  const tabLogin = container.querySelector('#tab-login');
  const tabSignup = container.querySelector('#tab-signup');
  const submitBtn = container.querySelector('#btn-auth-submit');

  tabLogin.addEventListener('click', () => {
    isSignUp = false;
    tabLogin.classList.add('active');
    tabSignup.classList.remove('active');
    submitBtn.querySelector('span').textContent = 'Access Your Item Hub';
  });

  tabSignup.addEventListener('click', () => {
    isSignUp = true;
    tabSignup.classList.add('active');
    tabLogin.classList.remove('active');
    submitBtn.querySelector('span').textContent = 'Create My Item Hub';
  });

  // Submit form
  const form = container.querySelector('#auth-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = container.querySelector('#auth-email').value.trim();
    if (!email) return;

    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }

    store.login(email);
    notificationsUI.showInfoToast('Welcome Back!', `Logged in to personal hub: ${email}`);
  });

  // Instant demo button
  container.querySelector('#btn-quick-demo').addEventListener('click', () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    store.login('demo_reseller@omnithread.io');
    notificationsUI.showInfoToast('Demo Mode', 'Exploring as demo reseller with preloaded wardrobe items.');
  });
}
