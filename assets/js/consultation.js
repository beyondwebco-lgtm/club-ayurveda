/* ==========================================================================
   CLUB AYURVEDA - Consultation Modal & Form Handling
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const consultModalOverlay = document.getElementById('consultationModalOverlay');
  const consultModalCloseBtn = document.getElementById('consultModalCloseBtn');
  const consultTriggers = document.querySelectorAll('.consultation-modal-trigger');

  function openConsultationModal(preselectedConcern = null) {
    if (consultModalOverlay) {
      if (preselectedConcern) {
        const concernInput = consultModalOverlay.querySelector(`input[name="concern"][value="${preselectedConcern}"]`);
        if (concernInput) concernInput.checked = true;
      }
      consultModalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeConsultationModal() {
    if (consultModalOverlay) {
      consultModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  consultTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const concern = btn.getAttribute('data-concern');
      openConsultationModal(concern);
    });
  });

  if (consultModalCloseBtn) {
    consultModalCloseBtn.addEventListener('click', closeConsultationModal);
  }

  if (consultModalOverlay) {
    consultModalOverlay.addEventListener('click', (e) => {
      if (e.target === consultModalOverlay) closeConsultationModal();
    });
  }

  // Handle Form Submissions (Both Modal & Contact Page Form)
  const consultationForms = document.querySelectorAll('.consultation-booking-form');
  consultationForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const name = formData.get('fullName') || 'Client';
      const phone = formData.get('phone') || '';
      const email = formData.get('email') || '';
      const city = formData.get('city') || '';
      const mode = formData.get('consultMode') || 'Online Video';
      const concern = formData.get('concern') || 'General Wellness';
      const date = formData.get('prefDate') || 'Earliest Available';

      // WhatsApp formatted message
      const msg = encodeURIComponent(
        `*New Consultation Request - Club Ayurveda*\n\n` +
        `• *Name:* ${name}\n` +
        `• *Phone:* ${phone}\n` +
        `• *Email:* ${email}\n` +
        `• *City:* ${city}\n` +
        `• *Consultation Mode:* ${mode}\n` +
        `• *Primary Concern:* ${concern}\n` +
        `• *Preferred Date:* ${date}\n\n` +
        `_Request sent via Club Ayurveda website demo._`
      );

      // Close modal if submitting from modal
      closeConsultationModal();

      if (window.ClubAyurveda && window.ClubAyurveda.showToast) {
        window.ClubAyurveda.showToast(`Thank you, ${name}. Redirecting to WhatsApp concierge...`);
      }

      // Open WhatsApp after brief feedback
      setTimeout(() => {
        window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
        form.reset();
      }, 700);
    });
  });

  // Expose
  window.ClubAyurveda = window.ClubAyurveda || {};
  window.ClubAyurveda.openConsultModal = openConsultationModal;
  window.ClubAyurveda.closeConsultModal = closeConsultationModal;
});
