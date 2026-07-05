// ===============================
// Gavathipoint.js (Part 1)
// Imports + Hero + Overview + Problem + Solution


import React from "react";
import "./Gavathipoint.css";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaShoppingBasket,
  FaLeaf,
  FaMapMarkedAlt,
  FaUsers,
  FaDatabase,
  FaCloudUploadAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiCloudinary,
//   SiTailwindcss,
  SiJsonwebtokens,
} from "react-icons/si";

const Gavathipoint = () => {
  return (
    <section className="gavathi-page">

      {/* ==========================================
                  HERO SECTION
      ========================================== */}

      <section className="gavathi-hero">

        <div className="hero-overlay"></div>

        <div className="container hero-wrapper">

          <div className="hero-left">

            <span className="project-tag">
              FEATURED PROJECT
            </span>

            <h1>
              GAVATHI<span>POINT</span>
            </h1>

            <p className="hero-subtitle">
              Empowering the villages of Konkan with a
              modern digital marketplace where local
              farmers, artisans and small businesses can
              showcase and sell authentic regional
              products directly to customers.
            </p>

            <div className="hero-buttons">

              <a
                href="https://gavathipoint-frontend.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href="https://github.com/hrishikesh1231"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <FaGithub />
                Source Code
              </a>

            </div>

          </div>

          <div className="hero-right">

            <div className="hero-card">

              <FaShoppingBasket className="hero-icon" />

              <h3>Konkan Marketplace</h3>

              <p>
                Connecting villagers, farmers and
                consumers through one secure
                digital platform.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                PROJECT OVERVIEW
      ========================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Project Overview
          </h2>

          <div className="overview-grid">

            <div className="overview-card">

              <FaLeaf className="overview-icon" />

              <h3>Vision</h3>

              <p>
                GAVATHIPOINT was built to promote
                authentic Konkan products and help
                local businesses reach customers
                without relying on expensive
                intermediaries.
              </p>

            </div>

            <div className="overview-card">

              <FaMapMarkedAlt className="overview-icon" />

              <h3>Target Users</h3>

              <p>
                Farmers, fishermen, home industries,
                village entrepreneurs, artisans,
                local stores and customers interested
                in purchasing genuine regional goods.
              </p>

            </div>

            <div className="overview-card">

              <FaUsers className="overview-icon" />

              <h3>Purpose</h3>

              <p>
                Build a trusted online ecosystem
                where every village seller gets
                equal digital opportunities to
                expand their business.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                  PROBLEM
      ========================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            Problem Statement
          </h2>

          <div className="problem-box">

            <p>
              Small businesses in Konkan often struggle
              to sell their products beyond their local
              villages. They depend heavily on middlemen,
              have limited digital presence, and lack
              affordable e-commerce solutions.
            </p>

            <p>
              Traditional marketplaces also make it
              difficult for customers to discover
              authentic village-made products such as
              mangoes, cashews, kokum, homemade spices,
              pickles, handicrafts and local specialties.
            </p>

          </div>

        </div>

      </section>

      {/* ==========================================
                    SOLUTION
      ========================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Our Solution
          </h2>

          <div className="solution-grid">

            <div className="solution-card">

              <FaShoppingBasket className="solution-icon"/>

              <h3>Digital Marketplace</h3>

              <p>
                Sellers can register, upload products,
                manage inventory and receive customer
                orders from one dashboard.
              </p>

            </div>

            <div className="solution-card">

              <FaCloudUploadAlt className="solution-icon"/>

              <h3>Cloud Product Images</h3>

              <p>
                Product images are securely stored
                using Cloudinary for faster delivery
                and better performance.
              </p>

            </div>

            <div className="solution-card">

              <FaDatabase className="solution-icon"/>

              <h3>Secure Backend</h3>

              <p>
                Built using the MERN Stack with JWT
                authentication and MongoDB database
                to ensure security and scalability.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ==========================================
                    FEATURES SECTION
      ========================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            Key Features
          </h2>

          <div className="features-grid">

            <div className="feature-card">
              <SiJsonwebtokens className="feature-icon" />
              <h3>JWT Authentication</h3>
              <p>
                Secure login and registration with protected
                routes ensuring only authenticated users can
                access seller functionalities.
              </p>
            </div>

            <div className="feature-card">
              <FaShoppingBasket className="feature-icon" />
              <h3>Seller Dashboard</h3>
              <p>
                Sellers can manage products, monitor orders,
                update stock and maintain their online store
                through a clean dashboard.
              </p>
            </div>

            <div className="feature-card">
              <FaCloudUploadAlt className="feature-icon" />
              <h3>Cloudinary Uploads</h3>
              <p>
                Product images are uploaded securely to
                Cloudinary for optimized loading and reliable
                cloud storage.
              </p>
            </div>

            <div className="feature-card">
              <FaDatabase className="feature-icon" />
              <h3>MongoDB Database</h3>
              <p>
                Flexible NoSQL database storing products,
                users, sellers and orders efficiently with
                scalable collections.
              </p>
            </div>

            <div className="feature-card">
              <FaLeaf className="feature-icon" />
              <h3>Konkan Products</h3>
              <p>
                Dedicated marketplace for authentic regional
                products including mangoes, cashews, kokum,
                spices, handicrafts and homemade food items.
              </p>
            </div>

            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <h3>Responsive Experience</h3>
              <p>
                Optimized interface providing seamless
                shopping experience across desktop, tablet
                and mobile devices.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                    TECH STACK
      ========================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Technology Stack
          </h2>

          <div className="tech-grid">

            <div className="tech-card">
              <FaReact className="tech-icon react" />
              <h3>React.js</h3>
              <p>
                Component-based frontend for creating a fast,
                responsive and interactive marketplace.
              </p>
            </div>

            <div className="tech-card">
              <FaNodeJs className="tech-icon node" />
              <h3>Node.js</h3>
              <p>
                High-performance backend runtime handling API
                requests and business logic.
              </p>
            </div>

            <div className="tech-card">
              <SiExpress className="tech-icon express" />
              <h3>Express.js</h3>
              <p>
                REST API development with modular routes,
                middleware and secure authentication.
              </p>
            </div>

            <div className="tech-card">
              <SiMongodb className="tech-icon mongo" />
              <h3>MongoDB Atlas</h3>
              <p>
                Cloud-hosted NoSQL database storing users,
                products, sellers and orders.
              </p>
            </div>

            <div className="tech-card">
              <SiCloudinary className="tech-icon cloud" />
              <h3>Cloudinary</h3>
              <p>
                Cloud-based media storage for optimized
                product image uploads and delivery.
              </p>
            </div>

            <div className="tech-card">
              <SiJavascript className="tech-icon js" />
              <h3>JavaScript (ES6+)</h3>
              <p>
                Core programming language powering frontend
                interactions and backend development.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                  PROJECT ARCHITECTURE
      ========================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            Project Architecture
          </h2>

          <div className="architecture">

            <div className="architecture-box">
              <h3>Frontend</h3>
              <p>
                React.js, React Router, Axios,
                Tailwind CSS and responsive UI components.
              </p>
            </div>

            <div className="architecture-arrow">
              ↓
            </div>

            <div className="architecture-box">
              <h3>Backend</h3>
              <p>
                Express REST APIs with JWT Authentication,
                middleware, controllers and route separation.
              </p>
            </div>

            <div className="architecture-arrow">
              ↓
            </div>

            <div className="architecture-box">
              <h3>Database</h3>
              <p>
                MongoDB Atlas storing Users,
                Products, Orders and Seller information.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                AUTHENTICATION FLOW
      ========================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Authentication Flow
          </h2>

          <div className="flow-container">

            <div className="flow-card">
              <span>1</span>
              <h3>User Registration</h3>
              <p>
                New users create an account by providing
                personal details and credentials.
              </p>
            </div>

            <div className="flow-card">
              <span>2</span>
              <h3>Secure Login</h3>
              <p>
                Credentials are validated and a JWT token
                is generated upon successful authentication.
              </p>
            </div>

            <div className="flow-card">
              <span>3</span>
              <h3>Protected Routes</h3>
              <p>
                JWT token grants access to seller dashboard,
                order management and product operations.
              </p>
            </div>

            <div className="flow-card">
              <span>4</span>
              <h3>Authorized APIs</h3>
              <p>
                Backend middleware verifies JWT before
                processing sensitive requests.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                  DATABASE DESIGN
      ========================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            Database Collections
          </h2>

          <div className="database-grid">

            <div className="database-card">
              <h3>Users</h3>
              <p>
                Stores customer and seller profile
                information with authentication details.
              </p>
            </div>

            <div className="database-card">
              <h3>Products</h3>
              <p>
                Product title, description, price,
                stock, images and seller references.
              </p>
            </div>

            <div className="database-card">
              <h3>Orders</h3>
              <p>
                Customer orders, payment details,
                delivery status and order tracking.
              </p>
            </div>

            <div className="database-card">
              <h3>Sellers</h3>
              <p>
                Seller profile, uploaded products,
                business information and marketplace data.
              </p>
            </div>

          </div>

        </div>

      </section>
            {/* ==========================================
                  ORDER WORKFLOW
      ========================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Order Workflow
          </h2>

          <div className="workflow">

            <div className="workflow-step">
              <span>01</span>
              <h3>Browse Products</h3>
              <p>
                Customers explore authentic Konkan products
                through categories, search and featured listings.
              </p>
            </div>

            <div className="workflow-arrow">→</div>

            <div className="workflow-step">
              <span>02</span>
              <h3>Add to Cart</h3>
              <p>
                Users add products to their cart while stock
                availability is validated in real time.
              </p>
            </div>

            <div className="workflow-arrow">→</div>

            <div className="workflow-step">
              <span>03</span>
              <h3>Place Order</h3>
              <p>
                Order details are securely stored in MongoDB
                and assigned to the respective seller.
              </p>
            </div>

            <div className="workflow-arrow">→</div>

            <div className="workflow-step">
              <span>04</span>
              <h3>Seller Response</h3>
              <p>
                Sellers review the request, update pricing,
                delivery charges and estimated delivery date.
              </p>
            </div>

            <div className="workflow-arrow">→</div>

            <div className="workflow-step">
              <span>05</span>
              <h3>Customer Confirmation</h3>
              <p>
                Customers accept the seller response and
                complete the purchase process.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                  CHALLENGES
      ========================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            Challenges Faced
          </h2>

          <div className="challenge-grid">

            <div className="challenge-card">
              <h3>JWT Authentication</h3>
              <p>
                Implementing secure authentication with
                protected routes and persistent login.
              </p>
            </div>

            <div className="challenge-card">
              <h3>Cloudinary Integration</h3>
              <p>
                Managing image uploads, optimization and
                secure cloud storage.
              </p>
            </div>

            <div className="challenge-card">
              <h3>Order Management</h3>
              <p>
                Designing a flexible order workflow allowing
                seller negotiation and customer confirmation.
              </p>
            </div>

            <div className="challenge-card">
              <h3>Scalable Backend</h3>
              <p>
                Structuring APIs, middleware and database
                models for future marketplace expansion.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                WHAT I LEARNED
      ========================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            What I Learned
          </h2>

          <div className="learning-grid">

            <div className="learning-card">
              <h3>Full-Stack Architecture</h3>
              <p>
                Learned how to design scalable MERN
                applications with modular architecture.
              </p>
            </div>

            <div className="learning-card">
              <h3>Authentication & Security</h3>
              <p>
                Strengthened my understanding of JWT,
                middleware, authorization and API security.
              </p>
            </div>

            <div className="learning-card">
              <h3>Cloud Services</h3>
              <p>
                Integrated Cloudinary for media management
                and optimized asset delivery.
              </p>
            </div>

            <div className="learning-card">
              <h3>Real-World Problem Solving</h3>
              <p>
                Developed a marketplace focused on solving
                genuine business challenges for rural India.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                FUTURE ENHANCEMENTS
      ========================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            Future Enhancements
          </h2>

          <div className="future-grid">

            <div className="future-card">
              AI-powered product recommendations
            </div>

            <div className="future-card">
              Razorpay payment integration
            </div>

            <div className="future-card">
              Delivery partner management
            </div>

            <div className="future-card">
              Live order tracking
            </div>

            <div className="future-card">
              Seller analytics dashboard
            </div>

            <div className="future-card">
              Mobile application
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                PROJECT STATISTICS
      ========================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Project Highlights
          </h2>

          <div className="stats-grid">

            <div className="stat-card">
              <h2>MERN</h2>
              <p>Full Stack Architecture</p>
            </div>

            <div className="stat-card">
              <h2>JWT</h2>
              <p>Secure Authentication</p>
            </div>

            <div className="stat-card">
              <h2>Cloudinary</h2>
              <p>Image Storage</p>
            </div>

            <div className="stat-card">
              <h2>MongoDB</h2>
              <p>Cloud Database</p>
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                    CALL TO ACTION
      ========================================== */}

      <section className="section cta-section">

        <div className="container">

          <div className="cta-box">

            <h2>
              Interested in GAVATHIPOINT?
            </h2>

            <p>
              Explore the live marketplace, browse authentic
              Konkan products and experience how technology
              can empower local businesses and rural
              entrepreneurs.
            </p>

            <div className="cta-buttons">

              <a
                href="https://gavathipoint-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href="https://github.com/hrishikesh1231"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
};

export default Gavathipoint;