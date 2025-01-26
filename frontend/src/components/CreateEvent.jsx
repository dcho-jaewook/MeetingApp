import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateEvent.css';

const CreateEvent = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEvent = { name, time, duration };
      await axios.post('/api/products', newEvent);
      navigate('/'); // Redirect to the event list
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className='create-event-form'>
      <h1>Create New Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Duration (minutes):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
