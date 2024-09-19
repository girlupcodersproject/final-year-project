import React from 'react';

function Events() {
  const eventsList = [
    { title: 'Web Development Workshop', date: 'October 10, 2024', link: '#' },
    { title: 'Python Coding Bootcamp', date: 'October 24, 2024', link: '#' },
    // Add more events here
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul>
        {eventsList.map((event, index) => (
          <li key={index} className="border-b border-gray-300 py-2">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <a href={event.link} className="text-pink-600 hover:underline">RSVP</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Events;
