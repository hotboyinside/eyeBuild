"use client";

import { useEffect, useState } from "react";
import { TableUsersTabs } from "./tableUsersTabs";

export const TableUsers = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>Loading...</>;
  return <TableUsersTabs />;
};
