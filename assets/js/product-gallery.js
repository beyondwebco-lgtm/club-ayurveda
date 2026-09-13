/* ==========================================================================
   CLUB AAYURVEDA - Product Page Gallery & Interactive Details
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Gallery Image Switcher
  const mainImage = document.getElementById('mainGalleryImage');
  const thumbnailBtns = document.querySelectorAll('.thumbnail-btn');

  if (mainImage && thumbnailBtns.length > 0) {
    thumbnailBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const fullSrc = btn.getAttribute('data-img-src');
        if (fullSrc) {
          // Subtle opacity transition
          mainImage.style.opacity = '0.3';
          setTimeout(() => {
            mainImage.src = fullSrc;
            mainImage.style.opacity = '1';
          }, 150);

          thumbnailBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });
  }

  // Product Quantity Control on Product Page
  const productQtyInput = document.getElementById('productQtyInput');
  const qtyDecreaseBtn = document.getElementById('qtyDecreaseBtn');
  const qtyIncreaseBtn = document.getElementById('qtyIncreaseBtn');

  if (productQtyInput) {
    if (qtyDecreaseBtn) {
      qtyDecreaseBtn.addEventListener('click', () => {
        let val = parseInt(productQtyInput.value, 10) || 1;
        if (val > 1) productQtyInput.value = val - 1;
      });
    }

    if (qtyIncreaseBtn) {
      qtyIncreaseBtn.addEventListener('click', () => {
        let val = parseInt(productQtyInput.value, 10) || 1;
        productQtyInput.value = val + 1;
      });
    }
  }

  // Add to cart from Product Page
  const addToCartBtn = document.getElementById('productAddToCartBtn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const qty = parseInt(productQtyInput ? productQtyInput.value : 1, 10) || 1;
      const app = window.ClubAayurveda || window.ClubAyurveda;
      if (app && app.addToCart) {
        app.addToCart(qty);
      }
    });
  }

  // Buy Now (Instant Checkout)
  const buyNowBtn = document.getElementById('productBuyNowBtn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const qty = parseInt(productQtyInput ? productQtyInput.value : 1, 10) || 1;
      const subtotal = 699 * qty;
      const whatsappMsg = encodeURIComponent(
        `Hello Dr. Sayali & Club Aayurveda, I would like to instantly order ${qty} jar(s) of Shata Dhauta Ghrita (Total: ₹${subtotal}). Please share checkout details.`
      );
      window.open(`https://wa.me/919324635177?text=${whatsappMsg}`, '_blank');
    });
  }

  // Accordions for Product Info
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');
    if (header && body) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close other accordions in same container
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherBody = otherItem.querySelector('.accordion-body');
          if (otherBody) otherBody.style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    }
  });

  // Open the first accordion by default if present
  if (accordionItems.length > 0) {
    const firstItem = accordionItems[0];
    const firstBody = firstItem.querySelector('.accordion-body');
    firstItem.classList.add('active');
    if (firstBody) firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
  }
});
