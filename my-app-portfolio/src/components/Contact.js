import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "../index.css"

function Contact() {

  const [state, handleSubmit] = useForm("xayzzwke");
  if (state.succeeded) {
    return <p className='m-4'>Thanks for contacting me!</p>;
  }

  return (
    <section className="contact container p-4">
      <h1>Contact Me</h1><br />

      <form onSubmit={handleSubmit}>

        <label htmlFor="Name">Name: </label><br />
        <input placeholder='Name...' id="name" type="text" name="Name" required /> <br />
        <ValidationError prefix="Name" field="name" errors={state.errors} /><br />

        <label htmlFor="Phone">Phone Number: </label><br />
        <input placeholder='Phone Number...' id="phone" type="phone" name="Phone"
          pattern='^\d{10||11}$'
          required /> <br />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} /> <br />

        <label htmlFor="Email">Email Address: </label><br />
        <input placeholder='Email...' id="email" type="email" name="Email" required /> <br />
        <ValidationError prefix="Email" field="email" errors={state.errors} /> <br />

        <label htmlFor='Subject'>Subject:</label><br />
        <input placeholder='Subject...' id="subject" type="text" name="Subject" required /> <br />
        <ValidationError prefix="Subject" field="subject" errors={state.errors} /><br />

        <label htmlFor='Message'>Message:</label><br />
        <textarea placeholder='Message...' id="message" type="text" name="Message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} /><br />

        <button id='submitBtn' type="submit" disabled={state.submitting}>
          Send Message
        </button>

      </form>
    </section>

  );
}

export default Contact