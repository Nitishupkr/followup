
import React, { useState } from 'react';
import './App.css';
import Header from "./component/Header";
import Headers from './component/Header.css';
import FollowupForm from './component/FollowupForm';
import FollowupForms from './component/FollowupForm.css';
import ReminderList from './component/ReminderList';
import ReminderLists from './component/ReminderList.css';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [reminders, setReminders] = useState([]);

  const handleFormSubmit = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  return (
    
    <div className="App">
      
      <Header />
      <div className="main-container">
      <Dashboard />
        <FollowupForm onFormSubmit={handleFormSubmit} />
        <ReminderList reminders={reminders} />
      </div>
    </div>
  );
}

export default App;



