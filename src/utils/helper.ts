import { BranchType, TreeBranch, TreeStructure } from "../interface/treeData";

export const structureTreeData = (treeData: TreeBranch[]): TreeStructure => {
  let depth: number = -1;

  return treeData.reduce((prevData, data) => {
    depth++;

    return {
      ...prevData,
      [data.id]: {
        ...data,
        depth: depth,
        subOptions:
          data.subOptions.length > 0 ? structureTreeData(data.subOptions) : {},
      },
    };
  }, {});
};

export const createNewBranch = (type: BranchType, depth: number) => {
  const newData: TreeStructure = {};

  const loopCount: number = type === "tool" ? 1 : 2;

  for (let i = 0; i < loopCount; i++) {
    const id = Math.random().toString();

    newData[id] = {
      id,
      name: "",
      subOptions: {},
      type,
      depth: depth + 1,
    };
  }

  return newData;
};
