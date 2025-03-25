import {
  Heading,
  Paragraph,
  Title,
} from "@/components/common";
import { TableUsers } from "@/components/tableUsers/tableUsers";

export default function Users() {
  return (
    <div>
      <Heading underline>
        <Title tag="h1">Users Management</Title>
        <Paragraph>
          Manage user accounts, roles, and access to cameras and subscriptions.
        </Paragraph>
      </Heading>
      <TableUsers />
    </div>
  );
}
