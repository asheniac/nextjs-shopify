import { FC, ReactNode } from "react";
import styles from "./Grid.module.css";

const Grid: FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Grid;
