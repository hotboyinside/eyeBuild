const ELLIPSIS = "...";

const FIRST_PAGE = 1;
const SECOND_PAGE = 2;
const THIRD_PAGE = 3;
const LAST_TWO_PAGES = 2;

const PAGE_RANGE_MIN = 7;
const PAGE_RANGE_DEFAULT = 4;
const PAGE_RANGE_MIDDLE = 3;

export const generatePaginationPages = (
  currentPage: number,
  totalPages: number
): (number | typeof ELLIPSIS)[] => {
  const pages: (number | typeof ELLIPSIS)[] = [];

  if (totalPages <= PAGE_RANGE_MIN) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  pages.push(FIRST_PAGE);

  if (currentPage <= PAGE_RANGE_MIDDLE) {
    pages.push(
      SECOND_PAGE,
      THIRD_PAGE,
      ELLIPSIS,
      totalPages - LAST_TWO_PAGES,
      totalPages - 1,
      totalPages
    );
  } else if (currentPage === PAGE_RANGE_MIDDLE) {
    pages.push(
      SECOND_PAGE,
      THIRD_PAGE,
      4,
      ELLIPSIS,
      totalPages - LAST_TWO_PAGES,
      totalPages - 1,
      totalPages
    );
  } else if (
    currentPage >= PAGE_RANGE_DEFAULT &&
    currentPage <= totalPages - 3
  ) {
    pages.push(
      ELLIPSIS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      ELLIPSIS,
      totalPages
    );
  } else if (currentPage === totalPages - 2) {
    pages.push(
      ELLIPSIS,
      currentPage - 1,
      currentPage,
      totalPages - 1,
      totalPages
    );
  } else {
    pages.push(
      SECOND_PAGE,
      THIRD_PAGE,
      ELLIPSIS,
      totalPages - LAST_TWO_PAGES,
      totalPages - 1,
      totalPages
    );
  }

  return pages;
};
