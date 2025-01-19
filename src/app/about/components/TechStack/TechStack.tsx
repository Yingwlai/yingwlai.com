import { ComponentProps } from "react";

import styles from './TechStack.module.css';

import CurrentTech from "./CurrentTech/CurrentTech";
import PastTech from "./PastTech/PastTech";
import SideInfo from '../SideInfo/SideInfo';


const TechStack: React.FC<ComponentProps<'section'>> = () => {
  return (
    <SideInfo title="Tech Stack" className={styles.container}>
        <CurrentTech />
        <PastTech />
    </SideInfo>
  )
};

export default TechStack