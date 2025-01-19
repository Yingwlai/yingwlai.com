import styles from './SkillLevel.module.css';

import SideInfo from '../SideInfo/SideInfo'
import Rating from '../Rating/Rating';
import { generalSkillList } from '../../constants/skillLevel';

const SkillLevel = () => {
  return (
    <SideInfo title="Skill Level" className={styles.container}>
      {/* <Rating skillTitle="HTML" step={0} value={4} maxValue={10} />
      <Rating skillTitle="CSS" step={0} value={4} maxValue={10} />
      <Rating skillTitle="JavaScript" step={0} value={4} maxValue={10} />
      <Rating skillTitle="React.js" step={0} value={4} maxValue={10} />
      <Rating skillTitle="Jenkins" step={0} value={4} maxValue={10} />
      <Rating skillTitle="React-Testing-Library" step={0} value={4} maxValue={10} /> */}
      {generalSkillList.map(skill => 
        <Rating key={skill.id} skillTitle={skill.name} step={0} value={skill.skillLevel} maxValue={10} />
      )}
    </SideInfo>
  );
};

export default SkillLevel;