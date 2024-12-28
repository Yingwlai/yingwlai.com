export const dynamic = 'force-dynamic';

import Summary from './components/Summary/Summary';

import Layout from '../components/Layout/Layout';
import { BASE_URL_PATH } from '../constants/navigation';

const AboutPage = async () => {
  const { navigationItems } = await fetch(`${BASE_URL_PATH}/api/app-navigation`)
    .then((response) => response.json());

  return (
    <Layout navigationItems={navigationItems}>
      <Summary />
    </Layout>
  );
};

export default AboutPage;
