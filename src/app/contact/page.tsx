import Layout from '../components/Layout/Layout';
import { BASE_URL_PATH } from '../constants/navigation';

const ContactPage = async () => {
  const { navigationItems } = await fetch(`${BASE_URL_PATH}/api/app-navigation`).then((response) => response.json());

  return (
    <Layout navigationItems={navigationItems}>
      Contact Page
    </Layout>
  );
};

export default ContactPage;