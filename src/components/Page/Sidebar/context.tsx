import React, { PropsWithChildren, useState } from 'react';

interface SidebarProps {
  isOpen?: boolean;
}

export interface SidebarContextInterface extends SidebarProps {
  setIsOpen: (isOpen: boolean) => void;
}

const SidebarContext = React.createContext<SidebarContextInterface>({} as SidebarContextInterface);

export type SidebarProviderProps = SidebarProps;

const SidebarProvider = (props: PropsWithChildren<SidebarProviderProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen ?? false);

  return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{props.children}</SidebarContext.Provider>;
};

function useSidebar() {
  const context = React.useContext(SidebarContext);

  if (context === undefined) {
    throw new Error(`useSidebar must be used within a SidebarProvider`);
  }

  return context;
}

export { SidebarProvider, useSidebar };
