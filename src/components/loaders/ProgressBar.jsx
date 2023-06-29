import { CircularProgress } from "@material-ui/core";

import styles from "./progressbar.module.css";

const ProgressBar = () => {
  return (
    <div className={styles.mainContainer}>
      <CircularProgress className={styles.progressBar} />
    </div>
  );
};

export default ProgressBar;
