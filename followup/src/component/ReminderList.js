import React, { useState } from 'react';
//import { FiBell } from 'react-icons/fi'; // Import the bell icon from react-icons
import './ReminderList.css';

const ReminderList = ({ reminders }) => {
  const [showReminder, setShowReminder] = useState(false);

  const handleSendNow = (reminderId) => {
    // Your code to send the scheduled message immediately
    console.log(`Sending reminder with id ${reminderId} now...`);
  };

  return (
    <div className="reminder-list-container">
      <h2 className='reminders-heading'>Scheduled Reminders</h2>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder.id}>
            <p><strong>Customer Name:</strong> {reminder.customerName}</p>
            <p><strong>Customer Email:</strong> {reminder.customerEmail}</p>
            <p><strong>Feedback:</strong> {reminder.message}</p>
            <p><strong>Date & Time:</strong> {reminder.dateTime}</p>
            {showReminder ? (
              <button className="send-now-button" onClick={() => handleSendNow(reminder.id)}>
                Send Now
              </button>
            ) : (
              <button> Send</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderList;
