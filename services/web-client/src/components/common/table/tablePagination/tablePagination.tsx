import clsx from "clsx";
import styles from "./tablePagination.module.scss";
import { ITablePagination } from "./tablePagination.types";
import { Button } from "../../button";
import { ArrowIcon } from "../../icons";
import { generatePaginationPages } from "@/helpers";
import { useMemo } from "react";

export const TablePagination = ({
  className,
  size = "md",
  currentPage,
  totalPages,
  handleChangePage,
  ...other
}: ITablePagination) => {
  const pages = useMemo(
    () => generatePaginationPages(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const handlePrev = () => {
    if (currentPage > 1) {
      handleChangePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handleChangePage(currentPage + 1);
    }
  };

  return (
    <nav
      className={clsx(styles.nav, styles[size], className)}
      aria-label='Pagination Navigation'
      {...other}
    >
      <Button
        className={styles.prev}
        color='inherit'
        variant='outlined'
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        startIcon={<ArrowIcon size="lg" />}
      >
        Previous
      </Button>

      <div className={styles.pages}>
        {pages.map((page, index) =>
          page === "..." ? (
            <span key={page + index} className={styles.ellipsis}>
              ...
            </span>
          ) : (
            <Button
              className={clsx(styles.page, {
                [styles.active]: currentPage === page,
              })}
              key={page}
              color='inherit'
              variant={currentPage === page ? "outlined" : "contained"}
              onClick={() => handleChangePage(page)}
              aria-label={`Go to page ${page}`}
              noOutline
            >
              {page}
            </Button>
          )
        )}
      </div>

      <Button
        className={styles.next}
        color='inherit'
        variant='outlined'
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        endIcon={<ArrowIcon size="lg" />}
      >
        Next
      </Button>
    </nav>
  );
};
