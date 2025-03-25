export interface IGrid extends React.BaseHTMLAttributes<HTMLDivElement> {
  container?: boolean;
  size?: number;
  spacing?: number;
  children: React.ReactNode;
}
