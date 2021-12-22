import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import { SidebarLinkIcon } from './Icon';
import { SidebarLinkText } from './Text';

export type SidebarLinkProps = PropsWithChildren<LinkProps>;

export const SidebarLink = (props: SidebarLinkProps) => {
  const { children, ...rest } = props;
  const { asPath } = useRouter();

  const isActive = asPath === props.href || asPath === props.as;

  const className = classNames('group flex items-center px-2 py-2 text-base font-medium rounded-md', {
    'bg-indigo-800 text-white': isActive,
    'text-white hover:bg-indigo-600 hover:bg-opacity-75': !isActive,
  });

  return (
    <Link {...rest} passHref={true}>
      <a className={className}>{children}</a>
    </Link>
  );
};

SidebarLink.Icon = SidebarLinkIcon;
SidebarLink.Text = SidebarLinkText;
