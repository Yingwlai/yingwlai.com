import Summary from './components/Summary/Summary';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';

import Layout from '../components/Layout/PageLayout';

const AboutPage = () => {
  return (
    <Layout>
      <Summary />
      <Experience />
      <Education />
    </Layout>
  );
};

export default AboutPage;
