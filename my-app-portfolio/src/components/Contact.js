import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

function Contact() {
  const [state, handleSubmit] = useForm("mgebqnvp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
          <input id="name" type="name" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} /> <br></br>
        <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} /> <br></br>
        <label htmlFor="Message">Message</label>
          <textarea id="message" name="message" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>

  );
}

export default Contact



//       {/* <a href="tel:(225)610-9403" title="Phone Number">Call Me!</a> */}
//       
//       <a href="mailto:blair10324@gmail.com" title="Email">Email Me!
//         <i class="fa-solid fa-envelope"></i></a>
//       <a href="https://github.com/blairrrrwho" title="GitHub Profile">GitHub</a>
//       <a href="www.linkedin.com/in/blair-millet" title="LinkedIn Profile">LinkedIn</a>
//       <a href="https://stackoverflow.com/users/20580971/blair-millet" title="Stack Overflow">Stack Overflow</a>
//       <a href="https://www.instagram.com/blairrrrwho/" title="Instagram Profile">Instagram</a> */}
//       <a href="https://twitter.com/blairrrrwho" title="Twitter Profile">Twitter</a>
//       <a href="https://open.spotify.com/user/blairrrr4?si=05783944e8694dc7" title="Spotify Profile">Spotify</a>


