import React, { PropsWithChildren, useState } from 'react';

export interface SidebarNavigationItem {
  name: string;
  href: string;
  current: boolean;
  icon: React.ComponentType<any>;
}

interface SidebarProps {
  navigationItems: SidebarNavigationItem[];
  isOpen?: boolean;
}

export interface SidebarContextInterface extends SidebarProps {
  setIsOpen: (isOpen: boolean) => void;
}

const SidebarContext = React.createContext<SidebarContextInterface>({} as SidebarContextInterface);

export type SidebarProviderProps = SidebarProps;

const SidebarProvider = (props: PropsWithChildren<SidebarProviderProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen ?? false);

  return (
    <SidebarContext.Provider value={{ isOpen, navigationItems: props.navigationItems, setIsOpen }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

function useSidebar() {
  const context = React.useContext(SidebarContext);

  if (context === undefined) {
    throw new Error(`useSidebar must be used within a SidebarProvider`);
  }

  return context;
}

export { SidebarProvider, useSidebar };
