import { FC, useState } from "react";

import { StateBranchData, TreeBranch } from "./interface/treeData";
import treeDataJson from "./data/treeData.json";

import Branch from "./components/Branch";

const App: FC = () => {
  const [treeData, setTreeData] = useState<StateBranchData>({});

  return (
    <div>
      <Branch
        branchData={treeDataJson as TreeBranch[]}
        onChange={(selectedOptions) => setTreeData({ ...selectedOptions })}
        stateBranchData={treeData}
      />
    </div>
  );
};

export default App;
