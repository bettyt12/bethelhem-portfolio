import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
