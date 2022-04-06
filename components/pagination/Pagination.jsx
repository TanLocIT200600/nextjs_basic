import React, { useState } from "react";
import styles from "../../styles/Pagination.module.scss";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const [state, setState] = useState({
    activeIndex: 1,
  });
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }
  const handleOnClick = (index) => {
    setState({ activeIndex: index });
  };

  return (
    <nav className={styles.paginations}>
      <ul className={styles.pagination}>
        {pageNumber.map((number) => (
          <li key={number} className={styles.pagination__item}>
            <button
              onClick={() => {
                paginate(number);
                handleOnClick(number);
              }}
              className={
                state.activeIndex === number
                  ? `${styles.active}`
                  : `${styles.unactive}`
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
