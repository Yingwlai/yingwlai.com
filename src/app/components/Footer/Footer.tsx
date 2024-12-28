import { ComponentProps } from 'react';

import styles from './Footer.module.css';

type FooterProps = {
  
} & ComponentProps<'header'>

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <header className={styles.footer}>
      {children}
    </header>
  );
};

export default Footer;
