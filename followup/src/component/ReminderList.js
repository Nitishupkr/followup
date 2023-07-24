import React, { useState, memo } from 'react';
import { AiOutlineSend } from 'react-icons/ai'; // Import the icon for the "Send Now" button
import './ReminderList.css';

// Destructure the reminder object properties in the function arguments
const ReminderItem = ({ reminder }) => {
  const handleSendNow = () => {
    // Your code to send the scheduled message immediately
    console.log(`Sending reminder with id ${reminder.id} now...`);
  };

  return (
    <React.Fragment key={reminder.id}>
      <p><strong>Buyer Name - </strong> {reminder.customerName}</p>
      <p><strong>Buyer Email -</strong> {reminder.customerEmail}</p>
      <p><strong>Date & Time -</strong> {reminder.dateTime}</p>
      <p><strong>Feedback -</strong> {reminder.message}</p>
      
      <button className="send-now-button" onClick={handleSendNow}>
        <AiOutlineSend className="send-icon" /> Send Now
      </button>
    </React.Fragment>
  );
};

// Use memoization to prevent re-renders of unchanged items
const MemoizedReminderItem = memo(ReminderItem);

const ReminderList = ({ reminders }) => {
  // Show the reminder button state
  const [showReminder, setShowReminder] = useState(false);

  return (
    <div className="reminder-list-container">
      <h2 className='reminders-heading'>Scheduled Reminders</h2>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder.id}>
            {/* Show reminder details */}
            <MemoizedReminderItem reminder={reminder} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderList;
