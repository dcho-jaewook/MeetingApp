import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/EventList.css';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/products');
        console.log("Response: ", response);
        console.log("Response data: ", response.data);
        console.log("Response data-data: ", response.data.data);
        const eventsArray = Array.isArray(response.data.data) ? response.data.data : response.data.data.products || [];
        console.log("Array ", eventsArray);
        console.log("Is Array? ", Array.isArray(response.data.data));
        setEvents(eventsArray);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>

      <div className="event-container">
        <h1>Events</h1>
        {events.map((event) => (
          <div key={event._id} className="event-box">
            <div className="event-name">{event.name}</div>
            <div className="event-time">Time: {new Date(event.time).toLocaleString()}</div>
            <div className="event-duration">Duration: {event.duration} minutes</div>
            {event.participants && (
              <div className="event-participants">
                Participants: {event.participants.length}
              </div>
            )}
          </div>
        ))}
        <br></br>
      </div>
      <Link to="/create">Create New Event</Link>
    </div>
  );
};

export default EventList;
