/*import React, { useState } from 'react';
import './App.css';

const FollowUpForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [message, setMessage] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div className="follow-up-form-container">
      <h2>Follow-up Reminder</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Customer ID:</label>
          <input type="text" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date & Time:</label>
          <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        </div>
        <button type="submit" className="submit-button">
          Schedule Reminder
        </button>
      </form>
    </div>
  );
};

export default FollowUpForm; */
// src/App.js

// src/App.js
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



