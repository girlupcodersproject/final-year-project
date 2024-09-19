import React from 'react';

function Resources() {
  const resourcesList = [
    { title: 'JavaScript Basics', link: '#' },
    { title: 'Understanding APIs', link: '#' },
    // Add more resources here
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      <ul>
        {resourcesList.map((resource, index) => (
          <li key={index} className="border-b border-gray-300 py-2">
            <a href={resource.link} className="text-pink-600 hover:underline">{resource.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Resources;
