// components/Sidebar.js
import React, { useState } from 'react';
import Sidebars from './Sidebars.css'
const Sidebar = ({ setActiveTab }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
    setIsActive(false); // Hide the sidebar after selecting a tab
  };

  return (
    <div className={`sidebar ${isActive ? 'fade-in' : 'fade-out'}`}>
      <div className="sidebar-header">
        <h2 className='dashboard-hd'>DASHBOARD</h2>
      </div>
      <ul className="sidebar-menu">
        <li onClick={() => handleSetActiveTab('contact')}>Customer review</li>
        <li onClick={() => handleSetActiveTab('service')}>Service</li>
        <li onClick={() => handleSetActiveTab('about')}>About</li>
        <li onClick={() => handleSetActiveTab('login')}>Login</li>
      </ul>
    </div>
  );
};

export default Sidebar;