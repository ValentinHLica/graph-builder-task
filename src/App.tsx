import { FC, useState } from "react";

import { TreeStructure } from "./interface/treeData";

import Branch from "./components/Branch";
import AddBranch from "./components/AddBranch";
import { createNewBranch } from "./utils/helper";

const App: FC = () => {
  const [treeData, setTreeData] = useState<TreeStructure>({});

  return (
    <div>
      {Object.keys(treeData).length > 0 ? (
        <Branch
          onChange={(selectedOptions) => setTreeData({ ...selectedOptions })}
          stateBranchData={treeData}
        />
      ) : (
        <AddBranch
          isStart
          depth={0}
          onClick={(type) => {
            setTreeData(createNewBranch(type, 0));
          }}
          title="Add Branch"
        />
      )}
    </div>
  );
};

export default App;
