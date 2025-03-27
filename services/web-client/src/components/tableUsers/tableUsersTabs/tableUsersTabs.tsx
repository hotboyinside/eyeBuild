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
import { Role } from "@/enums/role.enum";
import { debounce } from "lodash";
import { RoleTabs, useUserStore } from "@/store/user";
import { DEBOUNCE_MS } from "@/constants/lodash";
import { formatRole } from "@/helpers";
import { Sizes } from "@/enums/size.enum";

const roles: RoleTabs[] = [Role.CLIENT, Role.FRANCHISEE, Role.ADMIN];

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

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, DEBOUNCE_MS);

  return (
    <Tabs
      className={styles.scrollFix}
      aria-label="tem"
      variant="outlined"
      size={Sizes.MD}
      onChange={(index) => setRole(roles[index])}
      value={roles.indexOf(role)}
    >
      <header className={styles.header}>
        <TabList>
          {roles.map((role, index) => (
            <Tab key={role} aria-label={role} index={index}>
              {formatRole(role)}
            </Tab>
          ))}
        </TabList>
        <div className={styles.right}>
          <Input
            placeholder="Search"
            size={Sizes.SM}
            defaultValue={search}
            onChange={handleSearch}
            startIcon={<SearchIcon size={Sizes.LG} />}
          />
          <Link href={Page.ADD_USER} passHref>
            <Button
              variant="outlined"
              size={Sizes.MD}
              noOutline
              startIcon={<PlusIcon size={Sizes.LG} />}
            >
              Add user
            </Button>
          </Link>
        </div>
      </header>
      {roles.map((role, index) => (
        <TabPanel key={role} index={index}>
          <TableUsersPanel
            users={users || []}
            role={role}
            search={search}
            page={page}
            total={total}
            pages={pages}
            handleChangePage={setPage}
          />
        </TabPanel>
      ))}
    </Tabs>
  );
};
