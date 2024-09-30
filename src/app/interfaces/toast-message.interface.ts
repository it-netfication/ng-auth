export interface IToastMessage {
  status: 'success' | 'error' | '';
  headingText: string;
  message: string;
  delay?: number;
  autoHide?: boolean;
}
