import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1>this  is  my  contact Page</h1>
      <h2>Contact Section</h2>
          <p>This is the contact section. Provide contact information or a contact form here.</p>
          <p>Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
          <p>You can also fill out the form below to get in touch:</p>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
    </div>
  )
}
