export type HeaderConfig = {
    title?: string;
    subtitle?: string;
    version?: string;
    backgroundColor?: string;
    splitSubtitleEvenly?: boolean;
    showUserManagement?: boolean;
    menuItem?: menuItem[];
};
type menuItem = {
    divider?: boolean;
    label?: string;
    link?: string;
};
export {};
