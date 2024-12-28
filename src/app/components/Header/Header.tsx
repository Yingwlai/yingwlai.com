import { ComponentProps } from 'react';

import styles from './Header.module.css';

type HeaderProps = {
  
} & ComponentProps<'header'>

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <header className={`${styles.header} ${className || ''}`}>
      {children}
    </header>
  );
};

export default Header;
