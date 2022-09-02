import { TreeBranch, TreeStructure } from "../interface/treeData";

export const structureTreeData = (treeData: TreeBranch[]): TreeStructure =>
  treeData.reduce(
    (prevData, data) => ({
      ...prevData,
      [data.id]: {
        ...data,
        subOptions:
          data.subOptions.length > 0 ? structureTreeData(data.subOptions) : {},
      },
    }),
    {}
  );
