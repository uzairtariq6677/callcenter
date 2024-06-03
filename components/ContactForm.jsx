import React from 'react'

const ContactForm = () => {
  return (
    <form action="#" method="POST" className="space-y-4">
    <div>
     
      <input
        type="text"
        id="name"
        placeholder="name"
        name="name"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
    
      <input
        type="email"
        id="email"
        placeholder="email"
        name="email"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
     
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="phone"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
     
      <input
        type="text"
        id="enquiry"
        name="enquiry"
        placeholder="Generak enquiry"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
     
      <textarea
        id="message"
        name="message"
        placeholder="message"
        rows="4"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        className="w-full bg-[#c50f42] text-white py-2 px-4 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </div>
  </form>
  )
}

export default ContactForm