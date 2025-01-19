import { ComponentProps } from 'react';

import GridLayout from '@/app/components/Layout/GridLayout';

import TechStackContainer from '../TechStackContainer';

import { currentTechStackList } from '../../../constants/techstack';

type CurrentTechProps = {

} & ComponentProps<'aside'>

const CurrentTech: React.FC<CurrentTechProps> = () => {
  return (
    <TechStackContainer title="Current Tech Stack">
      <GridLayout width={2}>
        {currentTechStackList.map(techStack => <div key={techStack.id}>{techStack.name}</div>)}
      </GridLayout>
      <div>+</div>
    </TechStackContainer>
  );
};

export default CurrentTech;