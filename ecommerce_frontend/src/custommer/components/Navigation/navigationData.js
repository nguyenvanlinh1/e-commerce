export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"tops", href: `{women/clothing/tops}` },
              { name: 'Shirt', id:"women_shirts"},
              { name: 'Dresses', id:"dresses", href: '#' },
              { name: 'Jeans', id:"women_jeans", href: '#' },
              { name: 'Sweaters', id: 'sweaters' },
              { name: 'T-Shirts', id: 'women_t_shirts' },
              { name: 'Jackets', id: 'jacket' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'women_watches' },
              { name: 'Wallets', id: 'women_wallets' },
              { name: 'Bags', id: 'women_bags' },
              { name: 'Sunglasses', id: 'women_sunglasses' },
              { name: 'Hats', id: 'women_hats' },
              { name: 'Belts', id: 'women_belts' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', id: 'full_nelson' },
              { name: 'My Way', id: 'my_way' },
              { name: 'Re-Arranged', id: 're-arranged' },
              { name: 'Counterfeit', id: 'counterfeit' },
              { name: 'Significant Other', id: 'significant_other' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Shirts', id: 'men_shirts' },
              { name: 'Trousers', id: 'trousers' },
              { name: 'Men Jeans', id: 'men_jeans' },
              { name: 'Sweaters', id: 'sweaters' },
              { name: 'T-Shirts', id: 'men_t_shirts' },
              { name: 'Jackets', id: 'jackets' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'men_watches' },
              { name: 'Wallets', id: 'men_wallets' },
              { name: 'Bags', id: 'men_bags' },
              { name: 'Sunglasses', id: 'men_sunglasses' },
              { name: 'Hats', id: 'men_hats' },
              { name: 'Belts', id: 'men_belts' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }