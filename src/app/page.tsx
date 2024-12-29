import Layout from "./components/Layout/Layout";
import { BASE_URL_PATH } from "./constants/navigation";

export default async function Home() {
  const { navigationItems } = await fetch(`${BASE_URL_PATH}/api/app-navigation`).then((response) => response.json());

  return (
    <Layout navigationItems={navigationItems}>
      Homepage
    </Layout>
  );
}
