import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:soumyadip2411@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="title">
        <p className="section-kicker">Let's Connect</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            Have an AI, full-stack, or data-focused opportunity? Send a note and I will get back to you.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:soumyadip2411@gmail.com">soumyadip2411@gmail.com</a>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+916295012961">+91 6295012961</a>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Kolkata, West Bengal, India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
