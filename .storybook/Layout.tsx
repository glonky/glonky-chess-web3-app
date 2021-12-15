import React from 'react';
import '../src/styles/globals.css';

const Layout = ({ children }) => {

  return (
    <div className="transition duration-500 text-black dark:text-white flex flex-col min-h-screen">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

export default Layout;