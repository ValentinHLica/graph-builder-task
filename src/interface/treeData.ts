export type BranchType = "tool" | "crossroad";

export interface TreeBranch {
  name: string;
  id: string;
  type: BranchType;
  subOptions: TreeBranch[];
}

export type TreeStructure = {
  [id: string]: {
    id: string;
    name: string;
    type: BranchType;
    subOptions: TreeStructure;
  };
};

export interface StateBranchData {
  [x: string]: StateBranchData;
}
