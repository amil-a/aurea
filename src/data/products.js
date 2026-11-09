// Image URLs are Unsplash photo IDs. Swap any of them here — components fall back
// to a neutral placeholder automatically if an image fails to load.
export const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const formatPrice = (n) => `₹${n.toLocaleString('en-IN')}`;

export const images = {
  hero: img('photo-1713881842156-3d9ef36418cc', 1400),
  banner: img('photo-1441986300917-64674bd600d8', 1800),
  about: img('photo-1656614678709-8b8f0c3c1256', 1200),
};

export const categories = [
  { name: 'Clothing', image: img('photo-1490481651871-ab68de25d43d') },
  { name: 'Accessories', image: img('photo-1523275335684-37898b6baf30') },
  { name: 'Home', image: img('photo-1556228453-efd6c1ff04f6') },
  { name: 'Essentials', image: img('photo-1544816155-12df9643f363') },
];

export const products = [
  { id: 1, name: 'Linen Shirt', category: 'Clothing', price: 3490, featured: true, isNew: true,
    image: img('photo-1596755094514-f87e34085b2c'),
    description: 'A relaxed, garment-washed linen shirt with a soft collar and mother-of-pearl buttons. Breathable and made to soften with every wear.' },
  { id: 2, name: 'Linen Trousers', category: 'Clothing', price: 3990, featured: false, isNew: true,
    image: img('photo-1594938298603-c8148c4dae35'),
    description: 'Wide-leg trousers cut from heavyweight linen with an elasticated back waist and deep side pockets.' },
  { id: 3, name: 'Cotton Overshirt', category: 'Clothing', price: 4890, featured: true, isNew: false,
    image: img('photo-1591047139829-d91aecb6caea'),
    description: 'A structured overshirt in dense organic cotton twill. Layer it over tees or wear it alone as a light jacket.' },
  { id: 4, name: 'Wool Throw', category: 'Home', price: 5490, featured: true, isNew: true,
    image: img('photo-1580301762395-21ce84d00bc6'),
    description: 'A generous merino-blend throw with hand-knotted fringe. Warm without weight, in an undyed oat tone.' },
  { id: 5, name: 'Ceramic Vase', category: 'Home', price: 2790, featured: true, isNew: false,
    image: img('photo-1578500494198-246f612d3b3d'),
    description: 'Hand-thrown stoneware vase with a matte glaze and a softly irregular silhouette. Each piece is unique.' },
  { id: 6, name: 'Ceramic Mug', category: 'Essentials', price: 1190, featured: true, isNew: true,
    image: img('photo-1514228742587-6b1558fcca3d'),
    description: 'A 300ml stoneware mug with a thumb-rest handle and speckled glaze. Dishwasher and microwave safe.' },
  { id: 7, name: 'Leather Tote', category: 'Accessories', price: 8990, featured: true, isNew: false,
    image: img('photo-1590874103328-eac38a683ce7'),
    description: 'Vegetable-tanned leather tote with an unlined interior and a single inner pocket. Develops a rich patina over time.' },
  { id: 8, name: 'Woven Bag', category: 'Accessories', price: 4290, featured: false, isNew: true,
    image: img('photo-1590736969955-71cc94801759'),
    description: 'Hand-woven natural fibre bag with leather handles and a magnetic closure. Light, roomy, and built for warm days.' },
  { id: 9, name: 'Minimal Watch', category: 'Accessories', price: 11900, featured: true, isNew: true,
    image: img('photo-1523275335684-37898b6baf30'),
    description: 'A 36mm brushed steel watch with a sand dial, sapphire-coated glass and a calfskin strap.' },
  { id: 10, name: 'Leather Card Holder', category: 'Essentials', price: 1990, featured: false, isNew: false,
    image: img('photo-1627123424574-724758594e93'),
    description: 'A slim four-slot card holder in full-grain leather with hand-painted edges.' },
  { id: 11, name: 'Stoneware Bowl', category: 'Home', price: 1890, featured: false, isNew: true,
    image: img('photo-1610701596007-11502861dcfa'),
    description: 'A wide serving bowl with a reactive glaze that pools at the rim. Suited to everyday meals and slow breakfasts.' },
  { id: 12, name: 'Beeswax Candle', category: 'Essentials', price: 990, featured: true, isNew: false,
    image: img('photo-1603006905003-be475563bc59'),
    description: 'A hand-poured beeswax candle with a cotton wick. Burns clean for roughly 40 hours.' },
];
