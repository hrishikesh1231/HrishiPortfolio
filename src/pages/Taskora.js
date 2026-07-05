import React from "react";
import "./Taskora.css";

const Taskora = () => {
  return (
    <section className="project-details">

      {/* ================= HERO ================= */}

      <div className="project-hero">

        <span className="project-tag">
          FEATURED PROJECT
        </span>

        <h1>
          TaskOra
        </h1>

        <h3>
          AI Powered Hyperlocal Task Marketplace
        </h3>

        <p>
          A modern MERN Stack marketplace where users can instantly hire
          trusted local workers for everyday tasks. Powered by Artificial
          Intelligence, secure authentication, online payments and smart
          moderation, TaskOra transforms the traditional task hiring process
          into an intelligent digital platform.
        </p>

        <div className="hero-buttons">

          <a
            href="https://taskora-frontend-vadc.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/hrishikesh1231"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Source Code
          </a>

        </div>

      </div>

      {/* ================= OVERVIEW ================= */}

      <div className="details-section">

        <h2>Project Overview</h2>

        <p>
          TaskOra is a full-stack AI-powered marketplace that connects
          customers with nearby skilled workers. Instead of searching across
          multiple platforms, users simply describe the task they need, and
          TaskOra helps them create professional job posts, discover local
          workers, receive applications, chat, negotiate, and hire—all within
          one platform.
        </p>

        <p>
          The platform combines Artificial Intelligence with secure MERN
          architecture to simplify hiring while maintaining safety through AI
          moderation, OTP authentication, payment integration, and role-based
          access control.
        </p>

      </div>

      {/* ================= PROBLEM ================= */}

      <div className="details-section">

        <h2>The Problem</h2>

        <ul>

          <li>
            Finding trusted local workers is difficult.
          </li>

          <li>
            Most local hiring still happens through personal contacts or
            WhatsApp groups.
          </li>

          <li>
            Writing detailed job descriptions is confusing for many users.
          </li>

          <li>
            Fake or harmful job posts reduce platform quality.
          </li>

          <li>
            No unified platform for payments, reviews and communication.
          </li>

        </ul>

      </div>

      {/* ================= SOLUTION ================= */}

      <div className="details-section">

        <h2>My Solution</h2>

        <p>

          TaskOra digitizes the complete hiring workflow using Artificial
          Intelligence and scalable cloud technologies.

        </p>

        <ul>

          <li>AI-assisted task creation</li>

          <li>Hyperlocal task discovery</li>

          <li>Secure worker applications</li>

          <li>OTP Authentication</li>

          <li>Rating & Reviews</li>

          <li>Razorpay Payments</li>

          <li>Cloud Image Uploads</li>

          <li>WhatsApp Communication</li>

          <li>Role-based dashboards</li>

        </ul>

      </div>

      {/* ================= AI ================= */}

      <div className="details-section">

        <h2>Artificial Intelligence Integration</h2>

        <p>

          Artificial Intelligence is one of the strongest aspects of TaskOra.
          Instead of simply integrating ChatGPT, I designed AI to solve real
          user problems.

        </p>

        <div className="feature-grid">

          <div className="feature-card">

            <h4>AI Job Assistant</h4>

            <p>
              Collects task requirements conversationally and automatically
              generates professional job descriptions.
            </p>

          </div>

          <div className="feature-card">

            <h4>Content Moderation</h4>

            <p>
              Python ML model using TF-IDF + Logistic Regression detects
              harmful or abusive task descriptions before publishing.
            </p>

          </div>

          <div className="feature-card">

            <h4>Smart Validation</h4>

            <p>
              Prevents spam and improves marketplace quality by filtering
              inappropriate content.
            </p>

          </div>

        </div>

      </div>

      {/* ================= FEATURES ================= */}

      <div className="details-section">

        <h2>Core Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h4>User Authentication</h4>
            <p>OTP Login, Passport.js authentication and secure sessions.</p>
          </div>

          <div className="feature-card">
            <h4>Task Posting</h4>
            <p>Create tasks with AI-generated descriptions.</p>
          </div>

          <div className="feature-card">
            <h4>Worker Applications</h4>
            <p>Nearby workers browse and apply for available tasks.</p>
          </div>

          <div className="feature-card">
            <h4>Ratings & Reviews</h4>
            <p>Build trust through verified customer feedback.</p>
          </div>

          <div className="feature-card">
            <h4>Payments</h4>
            <p>Secure token purchasing and Razorpay integration.</p>
          </div>

          <div className="feature-card">
            <h4>Cloudinary</h4>
            <p>Cloud image storage for task attachments.</p>
          </div>

          <div className="feature-card">
            <h4>WhatsApp Integration</h4>
            <p>Quick communication between customer and worker.</p>
          </div>

          <div className="feature-card">
            <h4>Responsive Design</h4>
            <p>Optimized for desktop, tablet and mobile devices.</p>
          </div>

        </div>

      </div>

      {/* ================= TECH ================= */}

      <div className="details-section">

        <h2>Technology Stack</h2>

        <div className="tech-grid">

          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>OpenAI API</span>
          <span>Passport.js</span>
          <span>JWT</span>
          <span>OTP Authentication</span>
          <span>Fast2SMS</span>
          <span>Nodemailer</span>
          <span>Cloudinary</span>
          <span>Razorpay</span>
          <span>Python</span>
          <span>TF-IDF</span>
          <span>Logistic Regression</span>
          <span>Joi Validation</span>
          <span>REST API</span>
          <span>Render</span>
          <span>Vercel</span>

        </div>

      </div>

      {/* ================= ARCHITECTURE ================= */}

      <div className="details-section">

        <h2>Architecture</h2>

        <p>

          The application follows a modern MERN architecture where React
          handles the frontend, Express and Node.js expose REST APIs,
          MongoDB stores application data, Cloudinary manages media storage,
          while external services like Razorpay, Fast2SMS and AI modules are
          integrated through backend services.

        </p>

      </div>

      {/* ================= CHALLENGES ================= */}

      <div className="details-section">

        <h2>Challenges Faced</h2>

        <ul>

          <li>Designing conversational AI workflow.</li>

          <li>Building harmful content detection pipeline.</li>

          <li>Implementing secure OTP authentication.</li>

          <li>Managing multiple user roles.</li>

          <li>Integrating Razorpay payment flow.</li>

          <li>Deploying frontend and backend separately.</li>

        </ul>

      </div>

      {/* ================= BUSINESS ================= */}

      <div className="details-section">

        <h2>Business Model</h2>

        <p>

          Instead of charging commissions on every completed task,
          TaskOra uses a token-based marketplace. Customers purchase tokens
          to post premium tasks while workers can browse and apply freely.
          This approach keeps transactions transparent and makes the platform
          scalable for future monetization.

        </p>

      </div>

      {/* ================= FUTURE ================= */}

      <div className="details-section">

        <h2>Future Improvements</h2>

        <ul>

          <li>Real-time Chat using Socket.io</li>

          <li>Push Notifications</li>

          <li>Location-based worker matching</li>

          <li>AI-powered worker recommendations</li>

          <li>Mobile App (React Native)</li>

          <li>Admin Analytics Dashboard</li>

          <li>Fraud Detection using Machine Learning</li>

        </ul>

      </div>

    </section>
  );
};

export default Taskora;