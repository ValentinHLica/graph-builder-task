export interface TreeBranch {
  name: string;
  id: string;
  type: "tool" | "crossroad";
  subOptions: TreeBranch[];
}

export interface StateBranchData {
  [x: string]: StateBranchData;
}
