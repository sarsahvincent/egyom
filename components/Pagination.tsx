import React from "react";
import styles from '../styles/Pagination.module.css'

function Pagination() {
  return (
    <div>
      <div className={styles.lazyLoading}>Loaing...</div>
      <div className={styles.paginationButtonContainer}>
        <button className={styles.paginationButtonPevNxt}>
          Previous
        </button>
        <button className={styles.pagination2ndButton}>1</button>
        <button className={styles.pagination3rdButton}>2</button>
        <button className={styles.pagination4thButton}>...</button>
        <button className={styles.pagination5thButton}>10</button>
        <button className={styles.paginationButtonPevNxt}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
