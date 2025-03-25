import { BaseHTMLAttributes } from "react";

export interface ITablePagination extends BaseHTMLAttributes<HTMLDivElement> {
  size?: "md";
  currentPage: number;
  totalPages: number;
  handleChangePage: (page: number) => void;
}
