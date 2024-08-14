document.addEventListener('DOMContentLoaded', () => {
  const teamContent = document.getElementById('team-content');

  const teamMembers = [
    {
      imgSrc: 'img/team1.jpeg',
      altText: 'Chef Aria Davenport',
      name: 'Chef Aria Davenport',
      position: 'Executive Chef',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      imgSrc: 'img/team2.jpeg',
      altText: 'Chef Mei Ling',
      name: 'Chef Mei Ling',
      position: 'Executive Chef',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      imgSrc: 'img/team3.jpeg',
      altText: 'Chef Emily White',
      name: 'Chef Emily White',
      position: 'Executive Chef',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      imgSrc: 'img/team4.jpeg',
      altText: 'Chef Carlos Rodríguez',
      name: 'Chef Carlos Rodríguez',
      position: 'Executive Chef',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
  ];

  teamMembers.forEach((member) => {
    const teamMember = document.createElement('div');
    teamMember.className = 'team__member';

    teamMember.innerHTML = `
            <div class="team__member-content">
                <div class="team__member-img">
                    <img src="${member.imgSrc}" alt="${member.altText}" class="team__img">
                </div>
                <h3 class="team__member-name">${member.name}</h3>
                <p class="team__member-position">${member.position}</p>
                <div class="team__member-social">
                    <a href="${member.socialLinks.facebook}" class="team__social-link"><i class="fa-brands fa-facebook"></i></a>
                    <a href="${member.socialLinks.twitter}" class="team__social-link"><i class="fa-brands fa-twitter"></i></a>
                    <a href="${member.socialLinks.instagram}" class="team__social-link"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        `;

    teamContent.appendChild(teamMember);
  });
});
