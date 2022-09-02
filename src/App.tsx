import { FC, useCallback, useEffect, useState } from "react";

import { TreeStructure, TreeBranch } from "./interface/treeData";
import treeDataJson from "./data/treeData.json";

import Branch from "./components/Branch";
import AddBranch from "./components/AddBranch";
import { structureTreeData } from "./utils/helper";

const App: FC = () => {
  const [treeData, setTreeData] = useState<TreeStructure>({});

  const structureTree = useCallback((data: TreeBranch[]) => {
    return structureTreeData(data);
  }, []);

  useEffect(() => {
    if (treeDataJson.length > 0) {
      setTreeData(structureTree(treeDataJson as TreeBranch[]));
    }
  }, [structureTree]);

  return (
    <div>
      {Object.keys(treeData).length > 0 ? (
        <Branch
          onChange={(selectedOptions) => setTreeData({ ...selectedOptions })}
          stateBranchData={treeData}
        />
      ) : (
        <AddBranch
          onClick={() => {
            const id = Math.random().toString();

            setTreeData(
              structureTree([
                {
                  name: id,
                  id,
                  type: "tool",
                  subOptions: [],
                },
              ])
            );
          }}
          title="Add Branch"
        />
      )}
    </div>
  );
};

export default App;
