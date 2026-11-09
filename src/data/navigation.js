export const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'New Arrivals', href: '#new' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
];

export const footerColumns = [
  { title: 'Explore', links: ['Shop', 'New Arrivals', 'Collections', 'About'].map((l, i) => ({ label: l, href: navLinks[i].href })) },
  { title: 'Customer', links: ['Contact', 'Shipping', 'Returns', 'FAQ'].map((l) => ({ label: l, href: '#top' })) },
  { title: 'Social', links: ['Instagram', 'Pinterest', 'Facebook'].map((l) => ({ label: l, href: '#top' })) },
];
