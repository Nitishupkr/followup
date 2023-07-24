import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi'; // Import the settings icon from react-icons
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
        <li onClick={() => handleSetActiveTab('contact')}>CUSTOMER REVIEW</li>
        <li onClick={() => handleSetActiveTab('service')}>SERVICE</li>
        <li onClick={() => handleSetActiveTab('about')}>ABOUT</li>
        <li onClick={() => handleSetActiveTab('login')}>LOG-IN</li>
      </ul>
      {/* Settings button with the settings icon */}
      <button className="settings-button" onClick={handleSettingsClick}>
        <FiSettings className="settings-icon" size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
