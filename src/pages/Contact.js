// ================================================
// Contact.js - Part 1
// Hero + Contact Form
// ================================================

import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import {
  FaPaperPlane,
  FaEnvelope,
  FaUser,
  FaTag,
} from "react-icons/fa";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const serviceId = "service_4ybm9bi";
    const templateId = "template_rt0ddbc";
    const publicKey = "fOQ9qmES0RfsFil4g";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_name: "Hrishikesh",
    };

    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      .then(() => {

        alert("✅ Message sent successfully!");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

      })
      .catch((err) => {
  console.error("EmailJS Error:", err);
  alert(err.text || err.message || JSON.stringify(err));
});

  };

  return (

    <section className="contact-page">

      {/* ===============================
                HERO
      =============================== */}

      <section className="contact-hero">

        <div className="container">

          <span className="contact-tag">
            CONTACT
          </span>

          <h1>
            Let's <span>Connect</span>
          </h1>

          <p className="hero-text">
            Whether you have a job opportunity,
            freelance project, startup idea or just
            want to connect, feel free to reach out.
            I'm always excited to discuss technology,
            software development and innovative ideas.
          </p>

        </div>

      </section>

      {/* ===============================
            CONTACT CONTENT
      =============================== */}

      <section className="contact-section">

        <div className="container">

          <div className="contact-wrapper">

            {/* ===============================
                  LEFT FORM
            =============================== */}

            <div className="contact-form-card">

              <h2>
                Send Me a Message
              </h2>

              <p>
                Fill out the form below and I'll get
                back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit}>

                {/* Name */}

                <div className="input-group">

                  <label>
                    <FaUser />
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                  />

                </div>

                {/* Email */}

                <div className="input-group">

                  <label>
                    <FaEnvelope />
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                  />

                </div>

                {/* Subject */}

                <div className="input-group">

                  <label>
                    <FaTag />
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Job Opportunity / Internship / Freelance"
                    value={subject}
                    onChange={(e) =>
                      setSubject(e.target.value)
                    }
                    required
                  />

                </div>

                {/* Message */}

                <div className="input-group">

                  <label>
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) =>
                      setMessage(e.target.value)
                    }
                    required
                  />

                </div>

                <button
                  className="send-btn"
                  type="submit"
                >
                  <FaPaperPlane />
                  Send Message
                </button>

              </form>

            </div>
                        {/* ===============================
                  RIGHT SIDE
            =============================== */}

            <div className="contact-info">

              <div className="info-card">

                <h3>📧 Email</h3>

                <p>
                  hrishigaonkar2@gmail.com
                </p>

              </div>

              <div className="info-card">

                <h3>📍 Location</h3>

                <p>
                  Pune, Maharashtra, India
                </p>

              </div>

              <div className="info-card">

                <h3>💼 Looking For</h3>

                <p>
                  Full Stack Developer (MERN)
                </p>

              </div>

              <div className="info-card">

                <h3>🎓 Education</h3>

                <p>
                  B.E. Computer Science (AI & ML)
                </p>

              </div>

              {/* Availability */}

              <div className="availability-card">

                <span className="status-dot"></span>

                <div>

                  <h3>
                    Available for Opportunities
                  </h3>

                  <p>
                    Open to Full-Time, Internship and
                    Freelance Projects.
                  </p>

                </div>

              </div>

              {/* Social Links */}

              <div className="social-links">

                <a
                  href="https://github.com/hrishikesh1231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/hrishikesh-gaonkar-64519631b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:hrishigaonkar2@gmail.com"
                  className="social-btn email"
                >
                  Email
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===============================
                CTA
      =============================== */}

      <section className="contact-footer">

        <div className="container">

          <div className="footer-card">

            <h2>
              Let's Build Something Amazing Together 🚀
            </h2>

            <p>
              I'm passionate about building scalable
              full-stack applications using the MERN
              stack. Whether you're hiring, collaborating
              on a startup, or discussing a new idea,
              I'd love to connect.
            </p>

            <a
              href="mailto:hrishigaonkar2@gmail.com"
              className="hire-btn"
            >
              Hire Me
            </a>

          </div>

        </div>

      </section>

    </section>

  );

};

export default Contact;