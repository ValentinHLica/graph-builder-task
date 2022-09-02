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
    depth: number;
    subOptions: TreeStructure;
  };
};
