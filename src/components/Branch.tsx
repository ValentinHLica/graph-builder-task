import { FC } from "react";

import { TreeStructure, BranchType } from "../interface/treeData";
import AddBranch from "./AddBranch";

const Branch: FC<{
  onChange: (data: TreeStructure) => void;
  stateBranchData: TreeStructure;
}> = ({ onChange, stateBranchData }) => {
  const handleCheckboxClicked = (branchId: string, type: BranchType) => {
    const newData: TreeStructure = {};

    if (type === "tool") {
      const id = Math.random().toString();

      newData[id] = {
        id,
        name: Math.random().toString(),
        subOptions: {},
        type,
      };
    } else {
      for (let i = 0; i < 2; i++) {
        const id = Math.random().toString();

        newData[id] = {
          id,
          name: Math.random().toString(),
          subOptions: {},
          type,
        };
      }
    }

    console.log(newData);

    stateBranchData[branchId].subOptions = newData;
    //   type === "tool"
    //     ? {
    //         id: Math.random().toString(),
    //         name: Math.random().toString(),
    //         subOptions: {},
    //         type,
    //       }
    //     : {};

    // call onChange function given by parent
    onChange(stateBranchData);
  };

  const handleSubOptionsListChange = (
    branchId: string,
    subSelections: TreeStructure
  ) => {
    // add sub selections to current optionId
    // stateBranchData[branchId] = subSelections;
    // call onChange function given by parent
    onChange(stateBranchData);
  };

  return (
    <div>
      {Object.values(stateBranchData).map((branch, index) => (
        <ul key={index}>
          <AddBranch
            title={branch.name}
            onClick={(type) => {
              handleCheckboxClicked(branch.id, type);
            }}
            isEmpty={Object.values(branch.subOptions).length > 0}
          />

          {/* Base Case */}
          {Object.values(branch.subOptions).length > 0 &&
            stateBranchData[branch.id] && (
              <Branch
                stateBranchData={branch.subOptions}
                onChange={(subSelections) =>
                  handleSubOptionsListChange(branch.id, subSelections)
                }
              />
            )}
        </ul>
      ))}
    </div>
  );
};

export default Branch;
