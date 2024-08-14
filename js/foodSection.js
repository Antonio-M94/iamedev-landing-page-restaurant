document.addEventListener('DOMContentLoaded', () => {
  const menuContent = document.getElementById('menu-content');

  const menuItems = [
    {
      imgSrc: 'img/food1.jpeg',
      altText: 'Potato Croquettes',
      title: 'Potato Croquettes',
      description:
        'Crispy on the outside, creamy cheese inside. Perfect as a side dish or snack.',
      price: '$34',
    },
    {
      imgSrc: 'img/food2.jpeg',
      altText: 'Grilled Chicken Wings',
      title: 'Grilled Chicken Wings',
      description:
        'Tender wings coated in savory sauce. A satisfying appetizer or main course.',
      price: '$22',
    },
    {
      imgSrc: 'img/food3.jpeg',
      altText: 'Baked Wedge Potatoes',
      title: 'Baked Wedge Potatoes',
      description:
        'Crispy and seasoned, served with tangy ranchera sauce. A tasty side dish.',
      price: '$14',
    },
    {
      imgSrc: 'img/food4.jpeg',
      altText: 'Broccoli Soup',
      title: 'Broccoli Soup',
      description:
        'A creamy soup with fresh broccoli and a hint of garlic. Perfect as a starter or light meal.',
      price: '$16',
    },
    {
      imgSrc: 'img/food5.jpeg',
      altText: 'Kebab Skewer',
      title: 'Kebab Skewer',
      description:
        'Juicy skewers grilled to perfection, served with fresh vegetables and tangy sauce.',
      price: '$20',
    },
    {
      imgSrc: 'img/food6.jpeg',
      altText: 'Thai Ramen',
      title: 'Thai Ramen',
      description:
        'Spicy broth with tender noodles, fresh vegetables, and meat or tofu. Balanced flavors.',
      price: '$24',
    },
    {
      imgSrc: 'img/food7.jpeg',
      altText: 'Vietnamese Fried Chicken',
      title: 'Vietnamese Fried Chicken',
      description:
        'Crispy chicken marinated in spices, served with pickled vegetables and a tangy sauce.',
      price: '$22',
    },
    {
      imgSrc: 'img/food8.jpeg',
      altText: 'Fruit Salad',
      title: 'Fruit Salad',
      description:
        'A refreshing mix of seasonal fruits with a light citrus dressing. Perfect as a dessert or side dish.',
      price: '$12',
    },
    {
      imgSrc: 'img/food9.jpeg',
      altText: 'Pavlova Cake',
      title: 'Pavlova Cake',
      description:
        'A meringue base topped with whipped cream and fresh fruits. Light, sweet, and tangy.',
      price: '$18',
    },
    {
      imgSrc: 'img/food10.jpeg',
      altText: 'Sundae',
      title: 'Sundae',
      description:
        'Classic vanilla ice cream with hot fudge, whipped cream, and a cherry. Optional toppings available.',
      price: '$14',
    },
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu__item';

    menuItem.innerHTML = `
            <div class="menu__item-content">
                <div class="menu__item-img">
                    <img src="${item.imgSrc}" alt="${item.altText}" class="menu__img">
                </div>
                <div class="menu__item-text">
                    <h4 class="menu__item-title">${item.title}</h4>
                    <p class="menu__item-description">${item.description}</p>
                    <h5 class="menu__item-price">${item.price}</h5>
                </div>
            </div>
        `;

    menuContent.appendChild(menuItem);
  });
});
