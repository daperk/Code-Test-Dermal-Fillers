const navItems = document.querySelectorAll('.nav-item');
const heroHeading = document.querySelector('.hero-heading');
const heroText = document.querySelector('.hero-text');

const contentMap = {
  'Dermal Fillers': {
    heading: 'Dermal Fillers',
    text: `Facial volume loss begins in most people once they hit their mid-30s. Don’t let the loss of youthful volume dictate your appearance! Take action with our collection of Dermal Fillers, such as Restylane ® and Juvederm®. Our dermal fillers are FDA-approved to lift and add volume to wrinkles, fine lines, or enhance your lips. Experience smoother, younger-looking skin today!`
  },
  'CoolSculpting Elite': {
    heading: 'CoolSculpting Elite',
    text: `CoolSculpting Elite is the latest advancement in non-surgical fat reduction treatments. Target and eliminate fat cells with precision, giving you a slimmer, more contoured appearance.`
  },
  'QWO': {
    heading: 'QWO',
    text: `QWO is the first FDA-approved injectable treatment for cellulite in the buttocks. Smooth out dimples and get a firmer appearance with this revolutionary treatment.`
  },
  'Botox': {
    heading: 'Botox',
    text: `Botox is a popular treatment to smooth out wrinkles and fine lines. Our Botox treatments are quick and effective, helping you look and feel younger without surgery.`
  },
  'Laser Treatments': {
    heading: 'Laser Treatments',
    text: `Laser treatments are an effective way to improve skin texture and tone. From skin resurfacing to hair removal, we offer the latest laser technology to meet your needs.`
  },
  'Microneedling': {
    heading: 'Microneedling',
    text: `Microneedling is a minimally invasive treatment designed to rejuvenate your skin by boosting collagen production. It's a great option for reducing the appearance of scars, wrinkles, and large pores.`
  }
};

navItems.forEach(item => {
  item.addEventListener('click', function() {
    navItems.forEach(nav => nav.classList.remove('active'));

    this.classList.add('active');
    const content = contentMap[this.textContent.trim()];

    // Update  hero section 
    heroHeading.textContent = content.heading;
    heroText.textContent = content.text;
  });
});
