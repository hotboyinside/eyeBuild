"use client";
import styles from "./tableUsersTabs.module.scss";
import { Page } from "@/constants/routes";
import {
  Button,
  Input,
  PlusIcon,
  SearchIcon,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "../../common";
import { TableUsersPanel } from "../tableUsersPanel/tableUsersPanel";
import Link from "next/link";
import { useEffect } from "react";
import { Role } from "@/constants/roles";
import { debounce } from "lodash";
import { useUserStore } from "@/store/user";
import { DEBOUNCE_MS } from "@/constants/lodash";

export const TableUsersTabs = () => {
  const {
    role,
    search,
    users,
    pagination,
    setRole,
    setSearch,
    setPage,
    fetchUsers,
  } = useUserStore();
  const { pages, page, total } = pagination;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleTabChange = (index: number) => {
    setRole(index === 0 ? Role.CLIENT : Role.ADMIN);
  };

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, DEBOUNCE_MS);

  return (
    <Tabs
      className={styles.scrollFix}
      aria-label="tem"
      variant="outlined"
      size="md"
      onChange={handleTabChange}
      value={role === Role.CLIENT ? 0 : 1}
    >
      <header className={styles.header}>
        <TabList>
          <Tab aria-label="Clients" index={0}>
            Clients
          </Tab>
          <Tab aria-label="Admins" index={1}>
            Admins
          </Tab>
        </TabList>
        <div className={styles.right}>
          <Input
            placeholder="Search"
            size="sm"
            defaultValue={search}
            onChange={handleSearch}
            startIcon={<SearchIcon size="lg" />}
          />
          <Link href={Page.ADD_USER} passHref>
            <Button
              variant="outlined"
              size="md"
              noOutline
              startIcon={<PlusIcon size="lg" />}
            >
              Add user
            </Button>
          </Link>
        </div>
      </header>
      <TabPanel index={0}>
        <TableUsersPanel
          users={users || []}
          role="clients"
          search={search}
          page={page}
          total={total}
          pages={pages}
          handleChangePage={setPage}
        />
      </TabPanel>
      <TabPanel index={1}>
        <TableUsersPanel
          users={users || []}
          role="admins"
          search={search}
          page={page}
          total={total}
          pages={pages}
          handleChangePage={setPage}
        />
      </TabPanel>
    </Tabs>
  );
};
