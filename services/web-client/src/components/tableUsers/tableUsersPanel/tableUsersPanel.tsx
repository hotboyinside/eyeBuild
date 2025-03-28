"use client";
import styles from "./tableUsersPanel.module.scss";
import {
  Avatar,
  AvatarCard,
  AvatarLabel,
  Badge,
  CompanyIcon,
  IconBox,
  LetterIcon,
  Paragraph,
  PhoneNumberIcon,
  SearchIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Title,
  UserIcon,
  UsersIcon,
  VideocameraIcon,
} from "../../common";
import Highlight from "react-highlight-words";
import { TableUsersPopover } from "../tableUsersPopover";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Page } from "@/constants/routes";
import { ITableUsersPanel } from "./tableUsersPanel.types";
import clsx from "clsx";
import {
  formatInitials,
  formatPhone,
  formatRole,
  generateUrl,
} from "@/helpers";
import { useCurrentUser } from "@/store/currentUser";
import { isRoleHigher } from "@/helpers";

const HEADERS = [
  { icon: UserIcon, label: "Name" },
  { icon: CompanyIcon, label: "Company" },
  { icon: PhoneNumberIcon, label: "Phone number" },
  { icon: LetterIcon, label: "Email" },
  { icon: VideocameraIcon, label: "Cameras" },
];

export const TableUsersPanel = ({
  users,
  role,
  search,
  pages,
  page,
  total,
  handleChangePage,
}: ITableUsersPanel) => {
  const { user } = useCurrentUser();

  const router = useRouter();
  const handleRowClick = useCallback(
    (id: string) => {
      if (user && user._id === id) {
        return router.push(Page.PROFILE);
      }
      return router.push(generateUrl(Page.USER, { id }));
    },
    [router, user]
  );
  const isEmpty = users.length === 0;
  const isSearch = search.length !== 0;
  const isFew = users.length < 10;
  const isUserHigherRole = user && isRoleHigher(user.role, role);

  return (
    <TableContainer className={styles.container}>
      <div className={styles.header}>
        <Title size='lg' weight='medium'>
          {formatRole(role)}
        </Title>
        <Badge severity='info' title={total.toString()} />
      </div>
      <div className={styles.tableWrap}>
        <Table className={clsx(styles.table, { [styles.isEmpty]: isEmpty })}>
          <TableHead>
            <TableRow>
              {HEADERS.map(({ icon: Icon, label }) => (
                <TableCell key={label} variant='head' component='th'>
                  <div className={styles.headCell}>
                    <Icon size='md' className={styles.headCellIcon} />
                    {label}
                  </div>
                </TableCell>
              ))}
              {isUserHigherRole && <TableCell variant='head' component='th' />}
            </TableRow>
          </TableHead>
          <TableBody className={styles.body}>
            {isEmpty ? (
              <TableRow>
                <TableCell
                  colSpan={HEADERS.length + 1}
                  style={{ textAlign: "center" }}
                >
                  <div className={styles.emptyDiv}>
                    <IconBox size='xxl' variant='outlined'>
                      {isSearch ? (
                        <SearchIcon size='xxl' />
                      ) : (
                        <UsersIcon size='xxl' />
                      )}
                    </IconBox>
                    <div className={styles.textWrap}>
                      <Title size='md' weight='semibold'>
                        {isSearch ? "No users found" : "No users yet"}
                      </Title>
                      <Paragraph>
                        {isSearch
                          ? "We couldn’t find any users matching your search. Try adjusting your query or checking for typos."
                          : "Add the first user to start managing accounts and access."}
                      </Paragraph>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              users.map((row, index) => (
                <TableRow
                  key={index}
                  className={clsx(styles.row, { [styles.isFew]: isFew })}
                  onClick={() => handleRowClick(row._id)}
                >
                  <TableCell>
                    <AvatarCard size='md' className={styles.avatarCard}>
                      <Avatar
                        variant='initials'
                        initials={formatInitials(row.fullName)}
                        size='md'
                      />
                      <AvatarLabel
                        username={
                          <Highlight
                            autoEscape={true}
                            highlightClassName={styles.highlight}
                            searchWords={[search]}
                            textToHighlight={row.username || ""}
                          />
                        }
                        fullname={
                          <Highlight
                            autoEscape={true}
                            highlightClassName={styles.highlight}
                            searchWords={[search]}
                            textToHighlight={row.fullName || ""}
                          />
                        }
                        size='md'
                      />
                    </AvatarCard>
                  </TableCell>
                  <TableCell>
                    <Highlight
                      autoEscape={true}
                      className={styles.companyName}
                      highlightClassName={styles.highlight}
                      searchWords={[search]}
                      textToHighlight={row.companyName || "No Company"}
                    />
                  </TableCell>
                  <TableCell>
                    <Highlight
                      autoEscape={true}
                      className={styles.phone}
                      highlightClassName={styles.highlight}
                      searchWords={[search]}
                      textToHighlight={formatPhone(row.phone) || ""}
                    />
                  </TableCell>
                  <TableCell>
                    <Highlight
                      autoEscape={true}
                      className={styles.email}
                      highlightClassName={styles.highlight}
                      searchWords={[search]}
                      textToHighlight={row.email || ""}
                    />
                  </TableCell>
                  <TableCell>
                    <div className={styles.cameras}>0</div>
                  </TableCell>
                  {isUserHigherRole && (
                    <TableCell style={{ width: "3.25rem" }}>
                      <div className={styles.popover}>
                        <TableUsersPopover id={row._id || ""} />
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {pages > 1 && (
        <TablePagination
          currentPage={page}
          totalPages={pages}
          handleChangePage={handleChangePage}
        />
      )}
    </TableContainer>
  );
};
