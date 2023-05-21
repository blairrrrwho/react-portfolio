// import React from 'react';

import { useForm, ValidationError } from '@formspree/react';
import "../index.css"

function Contact() {
  const [state, handleSubmit] = useForm("mgebqnvp");
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }
  return (
    <section className="contact container p-4">
      <h1>Contact Me</h1><br></br>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label><br></br>
        <input placeholder='Name...' id="name" type="name" name="name" /> <br></br>
        <ValidationError prefix="Name" field="name" errors={state.errors} /><br></br>
        <label htmlFor="">Email Address: </label><br></br>
        <input placeholder='Email...' id="email" type="email" name="email" /> <br></br>
        <ValidationError prefix="Email" field="email" errors={state.errors} /> <br></br>
        <label htmlFor='Message'>Message:</label><br></br>
        <textarea placeholder='Message...' id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <br />
        <button id='submitBtn' type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>

  );
}
<div className="content"></div>
export default Contact
