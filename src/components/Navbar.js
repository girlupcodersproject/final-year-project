import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-pink-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Girl Up Coders</h1>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/profile" className="mr-4">Profile</Link>
          <Link to="/courses" className="mr-4">Courses</Link>
          <Link to="/events" className="mr-4">Events</Link>
          <Link to="/resources" className="mr-4">Resources</Link>
          <Link to="/forum" className="mr-4">Forum</Link>
          <Link to="/announcements" className="mr-4">Announcements</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
