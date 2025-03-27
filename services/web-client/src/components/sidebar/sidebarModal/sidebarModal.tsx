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
import { Sizes } from "@/enums/size.enum";

export const SidebarModal = ({ isOpen, onClose, onLogout }: ISidebarModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <IconBox size={Sizes.XL} variant="outlined">
          <LogoutIcon size={Sizes.XL} />
        </IconBox>
        <Heading gap="md" align="center">
          <Title tag="h2" size={Sizes.LG}>
            Log out of EyeBuild?
          </Title>
          <Paragraph size={Sizes.SM}>
            Are you sure you want to log out? You’ll be redirected to the Log In
            page.
          </Paragraph>
        </Heading>
      </ModalContent>
      <ModalActions>
        <Button
          size={Sizes.LG}
          color="inherit"
          variant="outlined"
          fullWidth
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button size={Sizes.LG} fullWidth onClick={onLogout}>
          Log Out
        </Button>
      </ModalActions>
    </Modal>
  );
};
