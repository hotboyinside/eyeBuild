export interface IUserFormHeading {
  title: string;
  backTitle: string;
  backLink: string;
  onFormSubmit: () => void;
  submitTitle: string;
  submitDisable?: boolean;
}
