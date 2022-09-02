import React, { FC } from "react";
import { BranchType } from "../interface/treeData";

import styles from "../styles/components/add_branch.module.scss";

type Props = {
  title: string;
  onClick: (type: BranchType) => void;
  isEmpty?: boolean;
};

const AddBranch: FC<Props> = ({ onClick, title, isEmpty = false }) => {
  return (
    <div className={styles.add}>
      <p>{title}</p>

      {!isEmpty && (
        <div className={styles.add__actions}>
          <button onClick={onClick.bind(this, "tool")}>Add Tool</button>
          <button onClick={onClick.bind(this, "crossroad")}>
            Add Crossroad
          </button>
        </div>
      )}
    </div>
  );
};

export default AddBranch;
