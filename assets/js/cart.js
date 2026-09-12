/* ==========================================================================
   CLUB AYURVEDA - Cart Drawer & Commerce Logic
   ========================================================================== */

(function() {
  // Demo Product Info
  const PRODUCT_DATA = {
    id: 'shata-dhauta-ghrita',
    name: 'Shata Dhauta Ghrita Moisturizer',
    subtitle: '100 Times Washed Ghee Skincare Ritual',
    price: 999,
    mrp: 1299,
    image: 'assets/images/product-clean.jpg',
    netQty: '50g / 1.76 oz'
  };

  // State
  let cart = {
    items: [
      {
        ...PRODUCT_DATA,
        quantity: 1
      }
    ]
  };

  // DOM Elements
  const cartOverlay = document.getElementById('cartDrawerOverlay');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotalPrice');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-btn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

  function updateCartUI() {
    const totalCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update Badges
    cartCountBadges.forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    }

    if (!cartItemsList) return;

    if (cart.items.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <p style="font-size: 1.1rem; margin-bottom: 1rem;">Your bag is currently empty.</p>
          <a href="product.html" class="btn btn-primary btn-sm" onclick="window.ClubAyurveda.closeCart()">Shop Shata Dhauta Ghrita</a>
        </div>
      `;
      if (cartCheckoutBtn) cartCheckoutBtn.disabled = true;
      return;
    }

    if (cartCheckoutBtn) cartCheckoutBtn.disabled = false;

    cartItemsList.innerHTML = cart.items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-meta">${item.netQty}</div>
          <div class="cart-item-price-row">
            <span style="font-weight: 700; color: var(--color-text-main);">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
            <div class="cart-qty-ctrl">
              <button type="button" class="cart-qty-btn decrease-qty" data-id="${item.id}">-</button>
              <span class="cart-qty-val">${item.quantity}</span>
              <button type="button" class="cart-qty-btn increase-qty" data-id="${item.id}">+</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach quantity event listeners
    cartItemsList.querySelectorAll('.decrease-qty').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = cart.items.find(i => i.id === id);
        if (item) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            cart.items = cart.items.filter(i => i.id !== id);
          }
          updateCartUI();
        }
      });
    });

    cartItemsList.querySelectorAll('.increase-qty').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = cart.items.find(i => i.id === id);
        if (item) {
          item.quantity++;
          updateCartUI();
        }
      });
    });
  }

  function openCart() {
    if (cartOverlay) {
      cartOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartOverlay) {
      cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function addToCart(qty = 1) {
    const existing = cart.items.find(i => i.id === PRODUCT_DATA.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.items.push({ ...PRODUCT_DATA, quantity: qty });
    }
    updateCartUI();
    openCart();
    if (window.ClubAyurveda && window.ClubAyurveda.showToast) {
      window.ClubAyurveda.showToast(`Added ${qty} item(s) to your bag`);
    }
  }

  // Event Bindings
  cartToggleBtns.forEach(btn => btn.addEventListener('click', openCart));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCart();
    });
  }

  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener('click', () => {
      const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const totalCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
      
      const whatsappMsg = encodeURIComponent(
        `Hello Club Ayurveda, I would like to order ${totalCount} unit(s) of Shata Dhauta Ghrita (Subtotal: ₹${subtotal}). Please confirm availability and payment details.`
      );
      window.open(`https://wa.me/919876543210?text=${whatsappMsg}`, '_blank');
      closeCart();
    });
  }

  // Expose methods to global scope
  window.ClubAyurveda = window.ClubAyurveda || {};
  window.ClubAyurveda.openCart = openCart;
  window.ClubAyurveda.closeCart = closeCart;
  window.ClubAyurveda.addToCart = addToCart;

  // Initial render
  document.addEventListener('DOMContentLoaded', updateCartUI);
})();
