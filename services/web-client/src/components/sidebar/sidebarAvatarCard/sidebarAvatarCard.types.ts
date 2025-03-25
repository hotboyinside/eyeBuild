export interface ISidebarAvatarCard
  extends React.BaseHTMLAttributes<HTMLElement> {
  username: string;
  fullname: string;
  collapsed?: boolean;
  status?: "online" | "offline"
}
