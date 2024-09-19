import React, { useState, useEffect } from 'react';

const eventsData = [
  {
    title: 'Introduction to Python',
    date: 'September 25, 2024',
    description: 'A beginner-friendly workshop on Python programming.',
  },
  {
    title: 'Web Development Bootcamp',
    date: 'October 10, 2024',
    description: 'Learn HTML, CSS, and JavaScript to build your first website.',
  },
  {
    title: 'AI in the Real World',
    date: 'November 5, 2024',
    description: 'Explore how AI is used in industries and solve real-world problems.',
  },
];

const EventsSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulating an API call
    setEvents(eventsData);
  }, []);

  return (
    <section id="events" className="bg-white p-8 mx-4 my-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-dark-pink mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-light-pink p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
