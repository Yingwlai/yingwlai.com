import styles from './Layout.module.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

type LayoutProps = {
  navigationItems: Array<{ id: string; href: string; text: string;}>;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ navigationItems, children }) => {
  return (
    <>
      <Header>
        <Navigation navigationItems={navigationItems} />
      </Header>
      <main className={styles.content}>
        {children}
      </main>
      <Footer>
        Footer
      </Footer>
    </>
  );
};

export default Layout;