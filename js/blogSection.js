document.addEventListener('DOMContentLoaded', () => {
  const blogContent = document.getElementById('blog-content');

  const blogPosts = [
    {
      imgSrc: 'img/blog1.jpeg',
      altText: 'Blog-1',
      date: 'July 25, 2023',
      title: 'New Cooking Trends',
      excerpt:
        'Explore the newest trends in the culinary world. Discover how modern techniques and tools are revolutionizing meal preparation.',
      link: '#',
    },
    {
      imgSrc: 'img/blog2.jpeg',
      altText: 'Blog-2',
      date: 'August 10, 2023',
      title: 'Trends in Food & Nutrition',
      excerpt:
        'Explore new trends in food and nutrition. Learn about popular diets and healthy eating practices in today’s evolving culinary world.',
      link: '#',
    },
    {
      imgSrc: 'img/blog3.jpeg',
      altText: 'Blog-3',
      date: 'September 5, 2023',
      title: 'Innovations in Cooking',
      excerpt:
        'Check out the latest innovations in cooking. New techniques and tools are changing how we prepare meals in our kitchens.',
      link: '#',
    },
  ];

  blogPosts.forEach((post) => {
    const blogPost = document.createElement('article');
    blogPost.className = 'blog__post';

    blogPost.innerHTML = `
            <div class="blog__post-main">
                <img src="${post.imgSrc}" alt="${post.altText}" class="blog__post-img">
                <div class="blog__post-text">
                    <time class="blog__post-date">${post.date}</time>
                    <h4 class="blog__post-title">${post.title}</h4>
                    <p class="blog__post-excerpt">${post.excerpt}</p>
                    <div class="blog__post-btn">
                        <a href="${post.link}" class="blog__post-link">Learn More</a>
                        <i class="fa-solid fa-arrow-right blog__post-icon"></i>
                    </div>
                </div>
            </div>
        `;

    blogContent.appendChild(blogPost);
  });
});
