export interface IModal {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface IModalContent {
  className?: string;
  children: React.ReactNode;
}

export interface IModalActions {
  className?: string;
  children: React.ReactNode;
}
