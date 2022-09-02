import { FC } from "react";

import { TreeStructure, BranchType } from "../interface/treeData";
import { createNewBranch } from "../utils/helper";
import AddBranch from "./AddBranch";

const Branch: FC<{
  onChange: (data: TreeStructure) => void;
  stateBranchData: TreeStructure;
}> = ({ onChange, stateBranchData }) => {
  const handleCheckboxClicked = (
    branchId: string,
    type: BranchType,
    depth: number
  ) => {
    stateBranchData[branchId].subOptions = createNewBranch(type, depth);

    onChange(stateBranchData);
  };

  const handleNameChange = (branchId: string, name: string) => {
    stateBranchData[branchId].name = name;

    onChange(stateBranchData);
  };

  return (
    <div>
      {Object.values(stateBranchData).map((branch, index) => (
        <ul key={index}>
          <AddBranch
            depth={branch.depth}
            title={branch.name}
            onClick={(type) => {
              handleCheckboxClicked(branch.id, type, branch.depth);
            }}
            onChange={(name) => {
              handleNameChange(branch.id, name);
            }}
            isEmpty={Object.values(branch.subOptions).length > 0}
          />

          {Object.values(branch.subOptions).length > 0 &&
            stateBranchData[branch.id] && (
              <Branch
                stateBranchData={branch.subOptions}
                onChange={() => onChange(stateBranchData)}
              />
            )}
        </ul>
      ))}
    </div>
  );
};

export default Branch;
