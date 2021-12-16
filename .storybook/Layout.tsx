import React from 'react';
import '../src/styles/globals.css';
import { useDarkMode }from '../src/hooks/use-dark-mode';

const Layout = ({ children, darkMode }) => {
  useDarkMode({ isEnabled: darkMode });

  return (
    <div>
      {children}
    </div>
  )
}

export default Layout;