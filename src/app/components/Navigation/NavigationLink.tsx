import { ComponentProps } from 'react';
import Link, { LinkProps } from 'next/link';

import styles from './Navigation.module.css';

type NavigationLinkProps = {
  text: string;
  isActive: boolean;
  href: string;
} & ComponentProps<'a'> & LinkProps;

const NavigationLink: React.FC<NavigationLinkProps> = ({ text, isActive, href, className }) => {
  return (
    <Link href={href} className={`${className || ''} ${isActive ? styles.activeLink : ''}`}>
      {text}
    </Link>
  );
};

export default NavigationLink;
