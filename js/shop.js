/* shop.js — fetches shop.json and renders product cards */

function renderShopCard(item) {
  const visual = item.photo
    ? `<img src="${item.photo}" alt="${item.name}">`
    : `<svg viewBox="0 0 140 140" ${item.iconColor ? `style="color:${item.iconColor}"` : ''}><use href="#${item.icon}"/></svg>`;
  return `
    <div class="shop-item">
      <div class="shop-img ${item.photo ? 'shop-img-photo' : (item.bgClass || '')}">
        ${visual}
      </div>
      <div class="shop-body">
        <div class="shop-name">${item.name}</div>
        <div class="shop-desc">${item.description}</div>
        <div class="shop-foot">
          <div class="shop-price">$${item.price}</div>
          <button class="shop-btn" onclick="showToast('&quot;${item.name}&quot; added to bag! ✦')">Add</button>
        </div>
      </div>
    </div>`;
}

window.loadShop = function() {
  const grid = document.getElementById('shop-grid');
  if (!grid) return;

  fetch('/data/shop.json')
    .then(r => r.json())
    .then(data => {
      grid.innerHTML = data.items.map(renderShopCard).join('');
    })
    .catch(() => {
      grid.innerHTML = '<p class="loading-placeholder">Could not load shop items.</p>';
    });
};
