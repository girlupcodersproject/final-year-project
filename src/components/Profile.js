import React from 'react';

function Profile() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="flex items-center">
        <img src="default-profile.png" alt="Profile" className="w-24 h-24 rounded-full border border-pink-300 mr-6" />
        <div>
          <h3 className="text-xl font-semibold">Jane Doe</h3>
          <p className="text-gray-600">jane.doe@example.com</p>
          <p className="mt-2 text-gray-800">Bio: Passionate coder and tech enthusiast.</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Progress</h4>
            <p>Completed Courses: 3</p>
            <p>Current Course: React Basics</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
