// Hamburger menu toggle (all pages)
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

// Contact form — opens mailto with pre-filled body (contact.html only)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name     = document.getElementById('name').value;
    const phone    = document.getElementById('phone').value;
    const email    = document.getElementById('email').value;
    const appliance = document.getElementById('appliance').value;
    const issue    = document.getElementById('issue').value;
    const subject  = `Appliance Repair Request — ${appliance}`;
    const body     = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAppliance: ${appliance}\n\nIssue:\n${issue}`;
    window.location.href = `mailto:expertservicenc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
