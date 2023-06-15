import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div style={{ backgroundColor: 'green', height: '100vh' }}>
      <h1>Main layout</h1>
      <div style={{ backgroundColor: 'white', margin: '50px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
