import { store } from './state.js';
import { renderNavbar } from './components/navbar.js';
import { renderAuthGateway } from './components/authGateway.js';
import { renderDashboardHero } from './components/dashboardHeroView.js';
import { renderDashboard } from './components/dashboardView.js';
import { renderComposer } from './components/composerView.js';
import { renderInventory } from './components/inventoryView.js';
import { renderPlatforms } from './components/platformsView.js';
import { renderSalesFeed } from './components/salesFeedView.js';
import { soundFx } from './audio.js';

const navbarRoot = document.getElementById('navbar-root');
const mainContent = document.getElementById('main-content');

function renderApp() {
  // If user is not signed into their hub, show the landing & sign up / log in gateway
  if (!store.currentUser) {
    navbarRoot.innerHTML = '';
    navbarRoot.style.display = 'none';
    renderAuthGateway(mainContent);
    return;
  }

  // User is logged into their personal hub
  navbarRoot.style.display = 'block';
  renderNavbar(navbarRoot);

  switch (store.currentTab) {
    case 'dashboard':
      // The rotating lookbook hero that rotates visuals every visit
      renderDashboardHero(mainContent);
      break;
    case 'command':
      // The dedicated Sales Command Center category
      renderDashboard(mainContent);
      break;
    case 'composer':
      renderComposer(mainContent);
      break;
    case 'inventory':
      renderInventory(mainContent);
      break;
    case 'platforms':
      renderPlatforms(mainContent);
      break;
    case 'sales':
      renderSalesFeed(mainContent);
      break;
    default:
      renderDashboardHero(mainContent);
  }
}

// Subscribe to state updates
store.subscribe(() => {
  renderApp();
});

// Initialize audio context on first user click anywhere
window.addEventListener('click', () => {
  soundFx.init();
}, { once: true });

// Initial render
renderApp();
