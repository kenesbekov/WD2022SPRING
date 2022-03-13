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
  
  categoryType: string;
  likes: number;
  liked: boolean;
  removed: boolean;
}

export const products = [
  {
    id: 1,
    name: 'Mac Studio',
    price: 1999,
    description: 'Extreme performance from the Apple M1 Max or M1 Ultra chip to unleash your creativity',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207723410',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-2-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207723396',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-3-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207723358',
    rating: 5,
    url: 'https://www.amazon.com/Apple-Studio-Ultra-20%E2%80%91core-48%E2%80%91core/dp/B09V3FDLHX/ref=sr_1_1?crid=B60AUMOU9HXX&keywords=Mac+studio&qid=1647116881&sprefix=mac+studio%2Caps%2C415&sr=8-1',
  
    categoryType: 'Mac',
    likes: 136,
    liked: false,
    removed: false
  },
  
  {
    id: 2,
    name: 'Mac Mini',
    price: 699,
    description: 'Apple M1 chip for a giant leap in CPU, GPU, and machine learning performance',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1635186947000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1635186947000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-3-202111?wid=728&hei=666&fmt=png-alpha&.v=1635186948000',
    rating: 4.7,
    url: 'https://www.amazon.com/2020-Apple-Mini-256GB-Storage/dp/B08N5PHB83/ref=sr_1_1?crid=7M4OL8AHIFL1&keywords=Mac+mini&qid=1647117010&sprefix=mac+studio%2Caps%2C705&sr=8-1',

    categoryType: 'Mac',
    likes: 127,
    liked: false,
    removed: false
  },
  {
    id: 3,
    name: 'iMac 24',
    price: 1299,
    description: '24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=980&hei=1000&fmt=jpeg&qlt=95&.v=1625868688000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202111?wid=728&hei=666&fmt=png-alpha&.v=1635186200000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202111?wid=728&hei=666&fmt=png-alpha&.v=1635186199000',
    rating: 4.7,
    url: 'https://www.amazon.com/dp/B0932FPBV8/?_encoding=UTF8&psc=1',

    categoryType: 'Mac',
    likes: 172,
    liked: false,
    removed: false
  },
  {
    id: 4,
    name: 'MacBook Pro 16',
    price: 2499,
    description: '16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1635206712000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1635206712000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-3-202111_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1635183625000',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MacBook-16-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQK9DK5/ref=sr_1_1?crid=3TGP6CV00QUCH&keywords=MacBook+Pro+16&qid=1647117199&sprefix=%2Caps%2C673&sr=8-1',

    categoryType: 'Mac',
    likes: 162,
    liked: false,
    removed: false
  },
  {
    id: 5,
    name: 'MacBook Pro 14',
    price: 1999,
    description: '14-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1635183223000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1635183221000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-3-202111_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1635183378000',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MacBook-14-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQWSQK7/ref=sr_1_1?crid=25TIKCJ4HMDX9&keywords=MacBook+Pro+14&qid=1647117326&sprefix=macbook+pro+16%2Caps%2C748&sr=8-1',

    categoryType: 'Mac',
    likes: 120,
    liked: false,
    removed: false
  },

  {
    id: 6,
    name: 'iPhone 13 Pro',
    price: 999,
    description: '6.1-inch Super Retina XDR displayfootnote¹ with ProMotion for a faster, more responsive feel',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1644989935267',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone13pro-digitalmat-gallery-1-202203_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1645574660350',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone13pro-digitalmat-gallery-5-202203?wid=728&hei=666&fmt=png-alpha&.v=1645574658502',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-iPhone-Alpine-Carrier-Subscription/dp/B09V3HQPSD/ref=sr_1_1?crid=NZZ9U70TAR0K&keywords=iPhone+13+pro&qid=1647120288&sprefix=iphone+13+pro%2Caps%2C498&sr=8-1',

    categoryType: 'iPhone',
    likes: 120,
    liked: false,
    removed: false
  },
  {
    id: 7,
    name: 'iPhone 13',
    price: 699,
    description: '6.1-inch Super Retina XDR display,footnote¹ now 28% brighter',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646335268199',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone13-digitalmat-gallery-2-202203?wid=728&hei=666&fmt=png-alpha&.v=1644988764167',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone13-digitalmat-gallery-5-202203?wid=728&hei=666&fmt=png-alpha&.v=1644988764132',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B09V3HQP7J/ref=sr_1_1?crid=6551Q7XMMOFK&keywords=iPhone+13&qid=1647120341&sprefix=iphone+13+%2Caps%2C293&sr=8-1',

    categoryType: 'iPhone',
    likes: 210,
    liked: false,
    removed: false
  },
  {
    id: 8,
    name: 'iPhone SE',
    price: 429,
    description: '4.7-inch Retina HD displayfootnote¹ that’s bright, colorful, and sharp',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=jpeg&qlt=95&.v=1646415838921',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphonese-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1644987579596',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphonese-digitalmat-gallery-2-202203?wid=728&hei=666&fmt=jpeg&qlt=95&.v=1646075827246',
    rating: 4.4,
    url: 'https://www.amazon.com/Apple-iPhone-Generation-64GB-Black/dp/B08R98BFZS/ref=sr_1_2?crid=1M5BX8P4VA6Z&keywords=iPhone+se&qid=1647120490&sprefix=iphone+13%2Caps%2C861&sr=8-2',

    categoryType: 'iPhone',
    likes: 136,
    liked: false,
    removed: false
  },
  {
    id: 9,
    name: 'iPhone 12',
    price: 599,
    description: '6.1-inch Super Retina XDR displayfootnote¹ for great contrast and incredible color accuracy',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone12purple-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646335268265',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone12-digitalmat-gallery-1-202111_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1635980933000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone12-digitalmat-gallery-3-202111_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1636673255000',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFN8K6T/ref=sr_1_1?keywords=iPhone+12&qid=1647120581&sr=8-1',

    categoryType: 'iPhone',
    likes: 105,
    liked: false,
    removed: false
  },
  {
    id: 10,
    name: 'iPhone 11',
    price: 499,
    description: '6.1-inch Liquid Retina HD display',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone-11-202108?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646502984732',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1635178715000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-digitalmat-gallery-5-202111?wid=728&hei=666&fmt=png-alpha&.v=1635178712000',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-Carrier-Subscription-Cricket-Wireless/dp/B084GSMNRN/ref=sr_1_1?keywords=iPhone+11&qid=1647120672&sr=8-1',

    categoryType: 'iPhone',
    likes: 120,
    liked: false,
    removed: false
  },

  {
    id: 11,
    name: 'iPad Pro',
    price: 799,
    description: 'iPad Pro 11-inch, Apple M1 chip for next-level performance',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627413382000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1635185148000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1637012932000',
    rating: 4.7,
    url: 'https://www.amazon.com/2021-Apple-12-9-inch-Wi%E2%80%91Fi-128GB/dp/B0932BKSLP/ref=sr_1_1?crid=2J3V3QVR6VFA5&keywords=iPad+pro&qid=1647120754&sprefix=ipad+p%2Caps%2C597&sr=8-1',

    categoryType: 'iPad',
    likes: 102,
    liked: false,
    removed: false
  },
  {
    id: 12,
    name: 'iPad Air',
    price: 599,
    description: 'Apple M1 chip powers next-level performance and all-day battery lifefootnote¹',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-air-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1644963446761',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadair-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1644962768135',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadair-digitalmat-gallery-2-202203_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1645724601636',
    rating: 4.6,
    url: 'https://www.amazon.com/2022-Apple-10-9-inch-Wi-Fi-256GB/dp/B09V3JDWSL/ref=sr_1_1?crid=1W6TFNDB78OOS&keywords=iPad+air&qid=1647120834&sprefix=ipad+a%2Caps%2C475&sr=8-1',

    categoryType: 'iPad',
    likes: 120,
    liked: false,
    removed: false
  },
  {
    id: 13,
    name: 'iPad',
    price: 329,
    description: 'The A13 Bionic chip with Neural Engine makes everything you do more responsive',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-202109?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1630640992000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-digitalmat-gallery-2-202111?wid=730&hei=666&fmt=png-alpha&.v=1635183151000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-digitalmat-gallery-3-202111?wid=730&hei=666&fmt=png-alpha&.v=1635183152000',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-iPad-10-2-Inch-Wi-Fi-128GB/dp/B07XR5B32Q/ref=sr_1_1?crid=248Z3N95NK4SB&keywords=iPad&qid=1647120910&sprefix=ipad+ai%2Caps%2C1203&sr=8-1',

    categoryType: 'iPad',
    likes: 136,
    liked: false,
    removed: false
  },
  {
    id: 14,
    name: 'iPad mini',
    price: 499,
    description: 'A15 Bionic chip for incredible performance and all-day battery lifefootnote¹',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1630457637000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-digitalmat-gallery-1-202111?wid=730&hei=666&fmt=png-alpha&.v=1635183174000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-digitalmat-gallery-2-202111?wid=730&hei=666&fmt=png-alpha&.v=1635183177000',
    rating: 4.8,
    url: 'https://www.amazon.com/2021-Apple-iPad-Mini-Wi-Fi/dp/B09G9FW785/ref=sr_1_1?crid=IYWVCNNK7ENY&keywords=iPad+mini&qid=1647120959&sprefix=ipad+%2Caps%2C448&sr=8-1',

    categoryType: 'iPad',
    likes: 120,
    liked: false,
    removed: false
  },
  {
    id: 16,
    name: 'Apple Watch Series 7',
    price: 399,
    description: 'Largest Always-On Retina display yet',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s7-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1645382414936',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s7-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1645480234025',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s7-digitalmat-gallery-2-202203?wid=728&hei=666&fmt=png-alpha&.v=1645227535451',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-Watch-Midnight-Aluminum-Sport/dp/B09HF6XBPF/ref=sr_1_2?crid=2APQ09HNU19AF&keywords=apple+watch+series+7&qid=1647121126&sprefix=Apple+Watch%2Caps%2C485&sr=8-2',

    categoryType: 'Apple Watch',
    likes: 183,
    liked: false,
    removed: false
  },
  {
    id: 17,
    name: 'Apple Watch SE',
    price: 279,
    description: 'Track all your favorite workouts, like swimming, running, Pilates, and Tai Chi',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1645382412806',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1645227534622',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-2-202203?wid=728&hei=666&fmt=png-alpha&.v=1646695634888',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-Watch-GPS-40mm-Starlight/dp/B09G9FS5YN/ref=sr_1_3?crid=3EEG25PH9XJND&keywords=apple+watch+series+se&qid=1647121210&sprefix=apple+watch+series+7%2Caps%2C1180&sr=8-3',

    categoryType: 'Apple Watch',
    likes: 120,
    liked: false,
    removed: false
  },
  {
    id: 18,
    name: 'Apple Watch Series 3',
    price: 199,
    description: 'Track daily activity on Apple Watch and see your trends in the Fitness app on iPhone',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s3-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1633547153000',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s3-digitalmat-gallery-1-202111?wid=728&hei=666&fmt=png-alpha&.v=1636062467000',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s3-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1634601134000',
    rating: 4.6,
    url: 'https://www.amazon.com/Apple-Watch-Space-Aluminum-Black/dp/B0799R5M8P/ref=sr_1_1?crid=355CGWLZQNTC9&keywords=apple+watch+series+3&qid=1647121271&sprefix=apple+watch+series+7%2Caps%2C279&sr=8-1',

    categoryType: 'Apple Watch',
    likes: 120,
    liked: false,
    removed: false
  },
  {
    id: 19,
    name: 'Apple Watch Nike Series 7',
    price: 399,
    description: 'Customize with Nike bands and exclusive watch faces, and the Nike Run Club app',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-nike-202203?wid=680&hei=528&fmt=jpeg&qlt=95&.v=1645382412788',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-nike-s7-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1645227535124',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-nike-s7-digitalmat-gallery-2-202203?wid=728&hei=666&fmt=png-alpha&.v=1645227533377',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-Watch-Nike-Midnight-Anthracite/dp/B09PQFY655/ref=sr_1_1?crid=2WA67OOR2XH5F&keywords=apple+watch+series+7+nike&qid=1647121345&sprefix=apple+watch+series+7+nik%2Caps%2C312&sr=8-1',

    categoryType: 'Apple Watch',
    likes: 183,
    liked: false,
    removed: false
  },
  {
    id: 19,
    name: 'Apple Watch Hermès',
    price: 1299,
    description: 'Exclusive Hermès bands and watch faces',

    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-hermes-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1645382414043',
    image2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-hermes-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1645227535759',
    image3: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-hermes-digitalmat-gallery-3-202203?wid=728&hei=666&fmt=png-alpha&.v=1645227534510',
    rating: 4.9,
    url: 'https://www.amazon.com/Apple-Cellular-Graphite-Stainless-Milanese/dp/B09HF4LPR5/ref=sr_1_1?keywords=Apple+Watch+Hermès&qid=1647121413&sr=8-1',

    categoryType: 'Apple Watch',
    likes: 182,
    liked: false,
    removed: false
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/