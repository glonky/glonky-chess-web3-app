import React from 'react';
import '../src/styles/globals.css';
import { useDarkMode }from '../src/hooks/use-dark-mode';
import { AppProviders }from '../src/context/providers';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

const Layout = ({ children, darkMode }) => {
  useDarkMode({ isEnabled: darkMode });

  return (
    <MemoryRouterProvider>
      {children}
    </MemoryRouterProvider>
  )
}

export default Layout;