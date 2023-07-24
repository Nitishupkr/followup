// components/Dashboard.js

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import FollowupForm from './FollowupForm';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('followup');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <Sidebar setActiveTab={handleTabChange} />

    </div>
  );
};

export default Dashboard;
