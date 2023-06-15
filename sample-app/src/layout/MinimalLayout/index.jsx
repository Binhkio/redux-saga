import React from 'react';
import { Outlet } from 'react-router-dom';

const MinimalLayout = () => {
  return (
    <div style={{ backgroundColor: 'red', height: '100vh' }}>
      <h1>Minimal layout</h1>
      <div style={{ backgroundColor: 'white', margin: '50px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MinimalLayout;
