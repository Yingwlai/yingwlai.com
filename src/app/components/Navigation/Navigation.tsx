'use client'
import { ComponentProps } from 'react';

import NavigationLink from './NavigationLink';
import styles from './Navigation.module.css';

import List from '../List/List';
import ListItem from '../List/ListItem';

import useGetCurrentPath from '../../hooks/useGetCurrentUrl';

type NavigationProps = {
  navigationItems: Array<{ id: string; href: string; text: string; disabled: boolean; }>;
} & ComponentProps<'nav'>;

const Navigation: React.FC<NavigationProps> = ({ navigationItems }) => {
  const { currentPath } = useGetCurrentPath();

  return (
    <nav className={styles['navigation-container']}>
      <NavigationLink href="/" className={`${styles.link}`} text="Home" isActive={currentPath === '/'} />
      <List className={styles['navigation-list-container']}>
        {navigationItems.map(({ id, href, text, disabled }) =>
          <ListItem key={id}>
            <NavigationLink
              href={disabled ? '' : href}
              text={text}
              className={`${styles.link} ${disabled && styles.disabled}`}
              aria-disabled={disabled}
              isActive={currentPath === href}
            />
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default Navigation;
