export type BranchType = "tool" | "crossroad";

export type TreeStructure = {
  [id: string]: {
    id: string;
    name: string;
    type: BranchType;
    depth: number;
    subOptions: TreeStructure;
  };
};
