import Layout from '../components/Layout/Layout';
import { BASE_URL_PATH } from '../constants/navigation';

const ProjectsPage = async () => {
  const { navigationItems } = await fetch(`${BASE_URL_PATH}/api/app-navigation`).then((response) => response.json());

  return (
    <Layout navigationItems={navigationItems}>
      Projects Page
    </Layout>
  );
};

export default ProjectsPage;