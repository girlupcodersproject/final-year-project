import React from 'react';

function Courses() {
  const courseList = [
    { name: 'Introduction to Python', description: 'Learn the basics of Python programming.', link: '#' },
    { name: 'React for Beginners', description: 'Build your first React application.', link: '#' },
    // Add more courses here
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courseList.map((course, index) => (
          <div key={index} className="bg-pink-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <a href={course.link} className="text-pink-600 hover:underline">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
