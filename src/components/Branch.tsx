import { FC } from "react";

import { StateBranchData, TreeBranch } from "../interface/treeData";

const Branch: FC<{
  branchData: TreeBranch[];
  stateBranchData: StateBranchData;
  onChange: (data: StateBranchData) => void;
}> = ({ branchData, onChange, stateBranchData }) => {
  const handleCheckboxClicked = (branchId: string) => {
    // is currently selected
    if (stateBranchData[branchId]) {
      // remove selected key from options list
      delete stateBranchData[branchId];
    } else {
      // is not currently selected
      // Add selected key to optionsList
      stateBranchData[branchId] = {};
    }

    // call onChange function given by parent
    onChange(stateBranchData);
  };

  const handleSubOptionsListChange = (
    branchId: string,
    subSelections: StateBranchData
  ) => {
    // add sub selections to current optionId
    stateBranchData[branchId] = subSelections;
    // call onChange function given by parent
    onChange(stateBranchData);
  };

  return (
    <div>
      {branchData.map((branch, index) => (
        <ul key={index}>
          <button
            // disabled={!!stateBranchData[branch.id]}
            onClick={() => {
              handleCheckboxClicked(branch.id);
            }}
          >
            {branch.name}
          </button>

          {/* Base Case */}
          {branch.subOptions.length > 0 && stateBranchData[branch.id] && (
            <Branch
              branchData={branch.subOptions}
              stateBranchData={stateBranchData[branch.id]}
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
