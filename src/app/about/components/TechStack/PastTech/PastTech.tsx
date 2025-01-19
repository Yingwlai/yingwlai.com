import { ComponentProps } from 'react';
import Link from 'next/link';

import GridLayout from '@/app/components/Layout/GridLayout';

import TechStackContainer from '../TechStackContainer';

import { pastTechStackList } from '../../../constants/techstack';

const PastTech: React.FC<ComponentProps<'aside'>> = () => {
  return (
    <TechStackContainer title="Past Tech Stack">
      <GridLayout width={2}>
        {pastTechStackList.map(techStack => <div key={techStack.id}>{techStack.name}</div>)}
      </GridLayout>
      <Link href="/about/past-tech">+</Link>
    </TechStackContainer>
  );
};

export default PastTech;