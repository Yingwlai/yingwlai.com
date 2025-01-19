'use client'

import styles from './PageLayout.module.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

import { navigationItems } from '../../constants/navigation';
import useNavigationRedirect from '../../hooks/useNavigationRedirect'
import { useEffect } from 'react';

type PageLayoutProps = {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const shouldRedirect = useNavigationRedirect();

  useEffect(() => {
    if (shouldRedirect) {
      window.location.pathname = '/';
    }
  }, [shouldRedirect]);

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

export default PageLayout;