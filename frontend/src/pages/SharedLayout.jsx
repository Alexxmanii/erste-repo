import React from 'react'
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
        <h2>ich bi die zuküftige Navbar</h2>
      <main className='main-container'>
<Outlet />
      </main>
      <h2>ich bin der zukünftige Footer</h2>
    </div>
  );
};
