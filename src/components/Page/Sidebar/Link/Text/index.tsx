import classNames from 'classnames';
import React from 'react';

export interface SidebarLinkTextProps {
  children: React.ReactNode;
}

export const SidebarLinkText = (props: SidebarLinkTextProps) => {
  const className = classNames('flex items-center text-base font-medium text-white');

  return <span className={className}>{props.children}</span>;
};
