export const GET = async () => {
  return Response.json({ navigationItems: [
    {
      id: 'about-page',
      href: '/about',
      text: 'about'
    },
    {
      id: 'blog-page',
      href: '/blog',
      text: 'blog'
    },
    {
      id: 'projects-page',
      href: '/projects',
      text: 'projects'
    },
    {
      id: 'contact-page',
      href: '/contact',
      text: 'contact'
    }
  ] }, { status: 200 });
}
