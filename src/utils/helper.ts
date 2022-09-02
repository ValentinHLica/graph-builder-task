import { v4 as uuid } from "uuid";

import { BranchType, TreeStructure } from "../interface/treeData";

export const createNewBranch = (type: BranchType, depth: number) => {
  const newData: TreeStructure = {};

  const loopCount: number = type === "tool" ? 1 : 2;

  for (let i = 0; i < loopCount; i++) {
    const id = uuid().slice(0, 8);

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
