import { SidebarDesktop } from './Desktop';
import { SidebarProps } from './interface';
import { SidebarMobile } from './Mobile';

export const Sidebar = (props: SidebarProps) => {
  return (
    <>
      <SidebarMobile {...props} />
      <SidebarDesktop {...props} />
    </>
  );
};
