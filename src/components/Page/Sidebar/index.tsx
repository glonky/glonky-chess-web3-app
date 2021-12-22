import { SidebarDesktop } from './Desktop';
import { SidebarMobile } from './Mobile';
import { SidebarLink, SidebarLinkProps } from './Link';

export interface SidebarProps {
  children: React.ReactElement<SidebarLinkProps>[];
}

export const Sidebar = (props: SidebarProps) => {
  const { children, ...rest } = props;
  return (
    <>
      <SidebarMobile {...rest}>{children}</SidebarMobile>
      <SidebarDesktop {...rest}>{children}</SidebarDesktop>
    </>
  );
};

Sidebar.Link = SidebarLink;
