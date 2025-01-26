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
        console.log("Response: ", response.data);
        const eventsArray = Array.isArray(response.data) ? response.data : response.data.products || [];
        console.log("Array ", eventsArray);
        console.log("Is Array? ", Array.isArray(response.data));
        setEvents(eventsArray);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <Link to="/create">Create New Event</Link>
      <ul>
        {events.length > 0 ? (
          events.map((event) => (
            <li key={event._id}>
              {event.name} - {new Date(event.time).toLocaleString()}
            </li>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </ul>
    </div>
  );
};

export default EventList;
