export const BASE_URL_PATH = process.env.NODE_ENV === 'production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000';
export const navigationItems = [
  {
    id: 'about-page',
    href: '/about',
    text: 'about',
    disabled: false
  },
  {
    id: 'blog-page',
    href: '/blog',
    text: 'blog',
    disabled: true
  },
  {
    id: 'projects-page',
    href: '/projects',
    text: 'projects',
    disabled: true
  },
  {
    id: 'contact-page',
    href: '/contact',
    text: 'contact',
    disabled: true
  }
];