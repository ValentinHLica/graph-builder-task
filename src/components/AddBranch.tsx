import { FC } from "react";

import { BranchType } from "../interface/treeData";

import styles from "../styles/components/add_branch.module.scss";

type Props = {
  title?: string;
  depth: number;
  isEmpty?: boolean;
  onClick: (type: BranchType) => void;
  onChange?: (name: string) => void;
};

const AddBranch: FC<Props> = ({
  title,
  depth,
  isEmpty = false,
  onClick,
  onChange,
}) => {
  return (
    <div className={styles.add}>
      <p>
        Depth: <strong>{depth}</strong>
      </p>

      {title !== undefined && (
        <input
          value={title}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
          }}
        />
      )}

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
