'use client';

import Summary from './components/Summary/Summary';

import Layout from '../components/Layout/Layout';
import useGetNavigationItems from '../hooks/useGetNavigationItems';

const AboutPage = () => {
  const { navigationItems } = useGetNavigationItems();

  return (
    <Layout navigationItems={navigationItems}>
      <Summary />
    </Layout>
  );
};

export default AboutPage;
