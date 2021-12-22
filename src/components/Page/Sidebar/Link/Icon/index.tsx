import classNames from 'classnames';
import React from 'react';

export interface SidebarLinkIconProps {
  icon: JSX.Element;
}

export const SidebarLinkIcon = (props: SidebarLinkIconProps) => {
  const iconClassName = props.icon?.props?.className;
  const className = classNames(iconClassName, 'mr-4 flex-shrink-0 h-6 w-6 text-indigo-300');

  return React.cloneElement(props.icon, {
    'aria-hidden': 'true',
    className,
  });
};
