import {
  Button,
  Heading,
  IconBox,
  LogoutIcon,
  Modal,
  ModalActions,
  ModalContent,
  Paragraph,
  Title,
} from "@/components/common";
import { ISidebarModal } from "./sidebarModal.types";

export const SidebarModal = ({ isOpen, onClose, onLogout }: ISidebarModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <IconBox size="xl" variant="outlined">
          <LogoutIcon size="xl"/>
        </IconBox>
        <Heading gap="md" align="center">
          <Title tag="h2" size="lg">
            Log out of EyeBuild?
          </Title>
          <Paragraph size="sm">
            Are you sure you want to log out? You’ll be redirected to the Log In
            page.
          </Paragraph>
        </Heading>
      </ModalContent>
      <ModalActions>
        <Button
          size="lg"
          color="inherit"
          variant="outlined"
          fullWidth
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button size="lg" fullWidth onClick={onLogout}>
          Log Out
        </Button>
      </ModalActions>
    </Modal>
  );
};
