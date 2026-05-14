/* menu.js — fetches menu.json and renders items. Used on menu.html and index.html */

const CATEGORY_META = {
  milk:     { label: 'Milk Teas',          emoji: '🍵' },
  fruit:    { label: 'Fruit Teas',          emoji: '🍓' },
  smoothie: { label: 'Smoothies',           emoji: '🥭' },
  coffee:   { label: 'Coffee Boba',         emoji: '☕' },
  season:   { label: 'Seasonal Specials',   emoji: '🌸' },
};

const TAG_PILLS = {
  popular:  '<span class="pill pill-pop">Popular</span>',
  vegan:    '<span class="pill pill-vegan">Vegan</span>',
  new:      '<span class="pill pill-new">New</span>',
  seasonal: '<span class="pill pill-season">Seasonal</span>',
};

function renderMenuCard(item) {
  const pills = (item.tags || []).map(t => TAG_PILLS[t] || '').join('');
  return `
    <div class="menu-item" data-cat="${item.category}">
      <div class="menu-item-head">
        <div class="menu-item-name">${item.name}</div>
        <div class="menu-item-price">$${item.price}</div>
      </div>
      <div class="menu-item-desc">${item.description}</div>
      <div class="menu-item-pills">${pills}</div>
    </div>`;
}

// Render all categories on menu.html
function renderFullMenu(items) {
  const wrap = document.getElementById('menu-content');
  if (!wrap) return;

  const byCategory = {};
  items.forEach(item => {
    if (!byCategory[item.category]) byCategory[item.category] = [];
    byCategory[item.category].push(item);
  });

  const order = ['milk', 'fruit', 'smoothie', 'coffee', 'season'];
  let html = '';

  order.forEach(cat => {
    if (!byCategory[cat]) return;
    const meta = CATEGORY_META[cat];
    html += `
      <div class="menu-section">
        <div class="menu-cat-label">${meta.label} ${meta.emoji}</div>
        <div class="menu-grid" data-category="${cat}">
          ${byCategory[cat].map(renderMenuCard).join('')}
        </div>
      </div>`;
  });

  // Customize note
  html += `
    <div class="menu-section">
      <div style="background:var(--green-pale); border:2.5px solid var(--green-dark); border-radius:24px; padding:28px; text-align:center; transform:rotate(-0.5deg)">
        <div class="menu-cat-label" style="justify-content:center; margin-bottom:10px">✦ Customize Your Cup ✦</div>
        <p style="font-family:'Caveat',cursive; font-size:1.25rem; color:var(--green-dark); line-height:1.4">
          All drinks come in 16oz or 24oz. Pick your sugar level (0–100%), ice level, and choice of boba.
          Ask about dairy-free &amp; allergy-friendly options!
        </p>
      </div>
    </div>`;

  wrap.innerHTML = html;
}

// Render only featured items on index.html
function renderFeaturedMenu(items) {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const featured = items.filter(i => i.featured);
  grid.innerHTML = featured.length
    ? featured.map(renderMenuCard).join('')
    : '<p class="loading-placeholder">No featured items yet.</p>';
}

// Tab filtering on menu.html
function initMenuTabs() {
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      document.querySelectorAll('.menu-item').forEach(item => {
        item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
}

// Entry point — call from each page
window.loadMenu = function() {
  const grid = document.getElementById('featured-grid');
  const full  = document.getElementById('menu-content');

  fetch('/data/menu.json')
    .then(r => r.json())
    .then(data => {
      if (grid) renderFeaturedMenu(data.items);
      if (full) { renderFullMenu(data.items); initMenuTabs(); }
    })
    .catch(() => {
      if (grid) grid.innerHTML = '<p class="loading-placeholder">Could not load menu items.</p>';
      if (full) document.getElementById('menu-content').innerHTML = '<p class="loading-placeholder">Could not load menu items.</p>';
    });
};
