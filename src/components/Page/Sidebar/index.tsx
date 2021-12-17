import { SidebarDesktop } from './Desktop';
import { SidebarMobile } from './Mobile';

export const Sidebar = () => {
  return (
    <>
      <SidebarMobile />
      <SidebarDesktop />
    </>
  );
};
