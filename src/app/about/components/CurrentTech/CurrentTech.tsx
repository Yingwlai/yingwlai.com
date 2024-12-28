import GridLayout from "@/app/components/Layout/GridLayout";
import SideInfo from "../SideInfo/SideInfo";

const CurrentTech = () => {
  return (
    <SideInfo title="Current Tech Stack">
      <GridLayout width={2}>
        <div>
          item 1
        </div>
        <div>
          item 2
        </div>
        <div>
          item 3
        </div>
        <div>
          item 4
        </div>
        <div>
          item 5
        </div>
      </GridLayout>
    </SideInfo>
  );
};

export default CurrentTech;