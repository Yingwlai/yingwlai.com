import { ComponentProps } from 'react';


import styles from './Link.module.css'

type LinkProps = {
  linkText: string;
} & ComponentProps<'a'>;

const Link: React.FC<LinkProps> = ({ linkText, href, className }) => {
  return (
    <a href={href} className={`${styles.link} ${className || ''}`}>
      {linkText}
    </a>
  );
};

export default Link;
