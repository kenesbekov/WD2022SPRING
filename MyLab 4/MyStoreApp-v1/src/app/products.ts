export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  image: string;
  image2: string;
  image3: string;
  rating: number;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Pro Display XDR',
    price: 4999,
    description: '32-inch 6K Retina displayFootnote1 provides astoundingly sharp and detailed imagery',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1635206791000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1635206790000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-3-202111?wid=728&hei=666&fmt=png-alpha&.v=1635206789000',
    rating: 4.5,
    url: 'https://www.amazon.com/Apple-32-inch-Pro-Display-Retina/dp/B082M1P2ZQ/ref=sr_1_2?keywords=pro+display+xdr&qid=1647116380&sprefix=pro+dis%2Caps%2C398&sr=8-2'
  },
  {
    id: 2,
    name: 'Mac Pro',
    price: 5999,
    description: 'Intel Xeon W processor configurable up to 28 cores',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1636480313000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1636480313000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-3-202111?wid=728&hei=666&fmt=png-alpha&.v=1636480312000',
    rating: 5,
    url: 'https://www.apple.com/shop/buy-mac'
  },
  {
    id: 3,
    name: 'Studio Display',
    price: 1599,
    description: '27-inch 5K Retina display draws you in with 14.7 million pixels and one billion colors',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207692041',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-2-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207692037',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-3-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207691982',
    rating: 4.6,
    url: 'https://www.amazon.com/Apple-Studio-Display-Nano-Texture-Height-Adjustable/dp/B09V3HR5DJ/ref=sr_1_2?crid=3RPF8YMUVODKM&keywords=Studio+Display&qid=1647116760&sprefix=mac+pro+desktop%2Caps%2C1387&sr=8-2'
  },
  {
    id: 4,
    name: 'Mac Studio',
    price: 1999,
    description: 'Extreme performance from the Apple M1 Max or M1 Ultra chip to unleash your creativity',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207723410',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-2-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207723396',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-3-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207723358',
    rating: 5,
    url: 'https://www.amazon.com/Apple-Studio-Ultra-20%E2%80%91core-48%E2%80%91core/dp/B09V3FDLHX/ref=sr_1_1?crid=B60AUMOU9HXX&keywords=Mac+studio&qid=1647116881&sprefix=mac+studio%2Caps%2C415&sr=8-1'
  },
  
  {
    id: 5,
    name: 'Mac Mini',
    price: 699,
    description: 'Apple M1 chip for a giant leap in CPU, GPU, and machine learning performance',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1635186947000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1635186947000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-3-202111?wid=728&hei=666&fmt=png-alpha&.v=1635186948000',
    rating: 4.7,
    url: 'https://www.amazon.com/2020-Apple-Mini-256GB-Storage/dp/B08N5PHB83/ref=sr_1_1?crid=7M4OL8AHIFL1&keywords=Mac+mini&qid=1647117010&sprefix=mac+studio%2Caps%2C705&sr=8-1'
  },
  {
    id: 6,
    name: 'iMac 24',
    price: 1299,
    description: '24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=980&hei=1000&fmt=jpeg&qlt=95&.v=1625868688000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202111?wid=728&hei=666&fmt=png-alpha&.v=1635186200000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202111?wid=728&hei=666&fmt=png-alpha&.v=1635186199000',
    rating: 4.7,
    url: 'https://www.amazon.com/dp/B0932FPBV8/?_encoding=UTF8&psc=1'
  },
  {
    id: 7,
    name: 'MacBook Pro 16',
    price: 2499,
    description: '16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1635206712000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1635206712000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-3-202111_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1635183625000',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MacBook-16-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQK9DK5/ref=sr_1_1?crid=3TGP6CV00QUCH&keywords=MacBook+Pro+16&qid=1647117199&sprefix=%2Caps%2C673&sr=8-1'
  },
  {
    id: 8,
    name: 'MacBook Pro 14',
    price: 1999,
    description: '14-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1635183223000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1635183221000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-3-202111_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1635183378000',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MacBook-14-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQWSQK7/ref=sr_1_1?crid=25TIKCJ4HMDX9&keywords=MacBook+Pro+14&qid=1647117326&sprefix=macbook+pro+16%2Caps%2C748&sr=8-1'
  },
  {
    id: 9,
    name: 'MacBook Pro 13',
    price: 1299,
    description: '13-inch, 16GB RAM, 256GB SSD Storage',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1636156358000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1635187938000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-3-202111?wid=728&hei=666&fmt=png-alpha&.v=1635187939000',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08T4R9D7M/ref=sr_1_3?keywords=MacBook+Pro+13&qid=1647117412&sr=8-3'
  },
  {
    id: 10,
    name: 'MacBook Air',
    price: 999,
    description: 'Apple M1 Chip, 13” Retina Display, 8GB RAM, 512GB SSD',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1636156358000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-3-202111?wid=728&hei=666&fmt=png-alpha&.v=1635187293000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-4-202111?wid=728&hei=666&fmt=png-alpha&.v=1636244921000',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-MacBook-13-inch-512GB-Storage/dp/B08N5LFLC3/ref=sr_1_1?crid=31GAGTJ2Q3TJX&keywords=MacBook+air&qid=1647117487&sprefix=macbook+air%2Caps%2C354&sr=8-1'
  },
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/