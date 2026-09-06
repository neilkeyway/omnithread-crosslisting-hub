import { soundFx } from '../audio.js';
import { PLATFORMS } from '../platforms.js';

export class NotificationManager {
  constructor() {
    this.container = document.getElementById('toast-container');
  }

  showSaleAlert({ item, notification }) {
    // 1. Play joyful celebratory sound
    soundFx.playHappySaleChime();

    // 2. Create high-aesthetic luxury toast
    const toast = document.createElement('div');
    toast.className = 'sale-toast';
    toast.setAttribute('role', 'alert');

    const platform = PLATFORMS[notification.platformId] || { name: 'Marketplace', color: '#10b981' };

    const delistedHtml = notification.autoDelistedFrom && notification.autoDelistedFrom.length > 0
      ? `
        <div class="toast-delist-alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          <span>Auto-delisted from: <strong>${notification.autoDelistedFrom.map(p => PLATFORMS[p]?.shortName || p).join(', ')}</strong></span>
        </div>
      `
      : '';

    toast.innerHTML = `
      <div class="toast-icon-box" style="color: ${platform.color}; background: ${platform.bgColor || 'rgba(16, 185, 129, 0.15)'}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
          <path d="M12 6v2m0 8v2"/>
        </svg>
      </div>
      <div class="toast-content">
        <div class="toast-header">
          <span class="toast-tag" style="color: ${platform.color}">🎉 SALE CONFIRMED • ${platform.shortName || platform.name}</span>
          <span class="toast-time">Just now</span>
        </div>
        <div class="toast-title">${notification.itemTitle}</div>
        <div class="toast-details">
          Sold for <strong>$${notification.salePrice}</strong> to <em>${notification.buyer}</em> (Net Payout: <strong>$${notification.netPayout}</strong>)
        </div>
        ${delistedHtml}
      </div>
      <button class="toast-close-btn" aria-label="Close notification">&times;</button>
    `;

    toast.querySelector('.toast-close-btn').addEventListener('click', () => {
      toast.remove();
    });

    this.container.appendChild(toast);

    // Auto remove after 9 seconds
    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.animation = 'toast-slide-in 0.3s ease reverse forwards';
        setTimeout(() => toast.remove(), 300);
      }
    }, 9000);
  }

  showInfoToast(title, message) {
    const toast = document.createElement('div');
    toast.className = 'sale-toast';
    toast.style.borderColor = 'rgba(99, 102, 241, 0.5)';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5), 0 0 25px rgba(99, 102, 241, 0.2)';

    toast.innerHTML = `
      <div class="toast-icon-box" style="color: #818cf8; background: rgba(99, 102, 241, 0.15)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      </div>
      <div class="toast-content">
        <div class="toast-header">
          <span class="toast-tag" style="color: #818cf8">SYSTEM UPDATE</span>
          <span class="toast-time">Just now</span>
        </div>
        <div class="toast-title">${title}</div>
        <div class="toast-details">${message}</div>
      </div>
      <button class="toast-close-btn">&times;</button>
    `;

    toast.querySelector('.toast-close-btn').addEventListener('click', () => toast.remove());
    this.container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.remove();
      }
    }, 5000);
  }
}

export const notificationsUI = new NotificationManager();
