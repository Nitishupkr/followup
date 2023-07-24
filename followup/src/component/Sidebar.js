import React, { useState } from 'react';
import { FiSettings, FiMail, FiTool, FiInfo, FiUser } from 'react-icons/fi'; // Import the icons from react-icons
import Sidebars from './Sidebars.css';

const Sidebar = ({ setActiveTab }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
    setIsActive(false); // Hide the sidebar after selecting a tab
  };

  const handleSettingsClick = () => {
    // Implement the logic to handle the settings button click here
    // For example, you can redirect to a settings page or show a modal with settings options
    console.log('Settings button clicked');
  };

  return (
    <div className={`sidebar ${isActive ? 'fade-in' : 'fade-out'}`}>
      <div className="sidebar-header">
        <h2 className='dashboard-hd'>DASHBOARD</h2>
      </div>
      <ul className="sidebar-menu">
        <li onClick={() => handleSetActiveTab('contact')}>
          <FiMail className="menu-icon" /> Customer Review
        </li>
        <li onClick={() => handleSetActiveTab('service')}>
          <FiTool className="menu-icon" /> Service
        </li>
        <li onClick={() => handleSetActiveTab('about')}>
          <FiInfo className="menu-icon" /> About
        </li>
        <li onClick={() => handleSetActiveTab('login')}>
          <FiUser className="menu-icon" /> Login
        </li>
      </ul>
      {/* Settings button with the settings icon */}
      <button className="settings-button" onClick={handleSettingsClick}>
        <FiSettings className="settings-icon" size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
