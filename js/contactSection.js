document.addEventListener('DOMContentLoaded', () => {
  const contactContent = document.getElementById('contact-content');

  const contactData = {
    sections: [
      {
        title: 'GoldFish',
        subtitle: 'Connect With Us',
        socialLinks: [
          { platform: 'facebook', url: '#', iconClass: 'fa-facebook' },
          { platform: 'twitter', url: '#', iconClass: 'fa-twitter' },
          { platform: 'instagram', url: '#', iconClass: 'fa-instagram' },
        ],
      },
      {
        title: 'Menu Links',
        items: [
          { text: 'Home', href: '#home' },
          { text: 'About', href: '#about' },
          { text: 'Menu', href: '#menu' },
          { text: 'Team', href: '#team' },
          { text: 'Blog', href: '#blog' },
          { text: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Our Foods',
        items: [
          { text: 'Foie Gras', href: '#' },
          { text: 'Beef Wellington', href: '#' },
          { text: 'Lobster Thermidor', href: '#' },
          { text: 'Truffle Risotto', href: '#' },
          { text: 'Peking Duck', href: '#' },
        ],
      },
      {
        title: 'Contact',
        address: [
          { iconClass: 'fa-location-dot', text: '1234 La Ivan, Comayagua' },
          { iconClass: 'fa-envelope', text: 'goldfish@testmail.com' },
          { iconClass: 'fa-phone', text: '(504) 99 99 9999' },
        ],
      },
    ],
  };

  contactData.sections.forEach((section) => {
    const contactBox = document.createElement('div');
    contactBox.className = 'contact__box';

    let content = `<h2>${section.title}</h2>`;

    if (section.subtitle) {
      content += `<h3>${section.subtitle}</h3>`;
    }

    if (section.socialLinks) {
      const socialLinks = section.socialLinks
        .map(
          (link) => `
                <a href="${link.url}">
                    <i class="fa-brands ${link.iconClass}"></i>
                </a>
            `
        )
        .join('');
      content += `<div class="contact__social">${socialLinks}</div>`;
    }

    if (section.items) {
      const items = section.items
        .map(
          (item) => `
                <li><a href="${item.href}">${item.text}</a></li>
            `
        )
        .join('');
      content += `<ul>${items}</ul>`;
    }

    if (section.address) {
      const addressItems = section.address
        .map(
          (item) => `
                <i class="fa-solid ${item.iconClass}">
                    <span>${item.text}</span>
                </i>
            `
        )
        .join('');
      content += `<div class="contact__address">${addressItems}</div>`;
    }

    contactBox.innerHTML = content;
    contactContent.appendChild(contactBox);
  });
});
