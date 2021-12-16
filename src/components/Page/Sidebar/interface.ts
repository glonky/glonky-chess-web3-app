import React from 'react';

export interface SidebarNavigationItem {
  name: string;
  href: string;
  current: boolean;
  icon: React.ComponentType<any>;
}

export interface SidebarProps {
  navigationItems: SidebarNavigationItem[];
}
