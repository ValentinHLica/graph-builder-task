import { FC, useState } from "react";

import JSONPretty from "react-json-pretty";

import { TreeStructure } from "./interface/treeData";

import Branch from "./components/Branch";
import AddBranch from "./components/AddBranch";

import { createNewBranch } from "./utils/helper";

const App: FC = () => {
  const [treeData, setTreeData] = useState<TreeStructure>({});

  return (
    <div>
      {Object.keys(treeData).length > 0 ? (
        <>
          <Branch
            onChange={(selectedOptions) => setTreeData({ ...selectedOptions })}
            stateBranchData={treeData}
          />

          <JSONPretty id="json-pretty" data={treeData}></JSONPretty>
        </>
      ) : (
        <AddBranch
          depth={0}
          onClick={(type) => {
            setTreeData(createNewBranch(type, 0));
          }}
        />
      )}
    </div>
  );
};

export default App;
