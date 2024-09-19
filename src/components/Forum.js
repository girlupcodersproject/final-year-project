import React from 'react';

function Forum() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">Discussion Forum</h2>
      <p className="text-gray-600">Join the conversation and ask questions or share knowledge.</p>
      <a href="/forum" className="text-pink-600 hover:underline">Go to Forum</a>
    </section>
  );
}

export default Forum;
