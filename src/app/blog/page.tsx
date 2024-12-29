export const dynamic = 'force-dynamic';

import Layout from '../components/Layout/Layout';
import { BASE_URL_PATH } from '../constants/navigation';

const BlogPage = async () => {
  const { navigationItems } = await fetch(`${BASE_URL_PATH}/api/app-navigation`).then((response) => response.json());

  return (
    <Layout navigationItems={navigationItems}>
      <aside></aside>
      Blog page
    </Layout>
  );
};

export default BlogPage;
