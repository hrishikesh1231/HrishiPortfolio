// ======================================================
// Vitto.js (Part 1)
// Hero + Overview + Problem + Solution
// ======================================================

import React from "react";
import "./Vitto.css";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaUniversity,
  FaClipboardCheck,
  FaUsers,
  FaDatabase,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiReact,
  SiExpress,
  SiPostgresql,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

const Vitto = () => {
  return (
    <section className="vitto-page">

      {/* ======================================================
                          HERO SECTION
      ====================================================== */}

      <section className="vitto-hero">

        <div className="hero-overlay"></div>

        <div className="container hero-wrapper">

          {/* Left */}

          <div className="hero-left">

            {/* <span className="project-tag">
              FEATURED PROJECT
            </span> */}

            <h1>
              VITTO <span>LOAN PORTAL</span>
            </h1>

            <p className="hero-subtitle">
              A modern full-stack loan management system built
              using React, Node.js, Express and PostgreSQL.
              The platform simplifies the complete loan
              application process while providing administrators
              with a centralized dashboard to manage customer
              requests efficiently.
            </p>

            <div className="hero-buttons">

              <a
                href="#"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href="https://github.com/hrishikesh1231"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="hero-right">

            <div className="hero-card">

              <FaUniversity className="hero-icon" />

              <h3>Loan Management</h3>

              <p>
                A centralized web platform for submitting,
                reviewing and managing loan applications
                with real-time dashboard analytics.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
                        PROJECT OVERVIEW
      ====================================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Project Overview
          </h2>

          <div className="overview-grid">

            <div className="overview-card">

              <FaClipboardCheck className="overview-icon" />

              <h3>Purpose</h3>

              <p>
                Build a digital loan application system
                that replaces manual paperwork with a
                fast, secure and user-friendly process.
              </p>

            </div>

            <div className="overview-card">

              <FaUsers className="overview-icon" />

              <h3>Target Users</h3>

              <p>
                Customers looking to apply for loans and
                administrators responsible for reviewing,
                approving and managing applications.
              </p>

            </div>

            <div className="overview-card">

              <FaChartLine className="overview-icon" />

              <h3>Business Goal</h3>

              <p>
                Reduce application processing time,
                improve record management and provide
                actionable insights through dashboards.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
                      PROBLEM STATEMENT
      ====================================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            Problem Statement
          </h2>

          <div className="problem-box">

            <p>
              Traditional loan application systems rely
              heavily on paperwork, manual verification
              and disconnected records, resulting in slow
              approval times and inefficient processing.
            </p>

            <p>
              Administrators also struggle to monitor
              application statuses, generate reports and
              manage applicant information efficiently
              from a single platform.
            </p>

          </div>

        </div>

      </section>

      {/* ======================================================
                          SOLUTION
      ====================================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Solution
          </h2>

          <div className="solution-grid">

            <div className="solution-card">

              <FaUniversity className="solution-icon" />

              <h3>Digital Loan Portal</h3>

              <p>
                Customers can submit loan applications
                online through a clean and responsive
                interface without paperwork.
              </p>

            </div>

            <div className="solution-card">

              <FaDatabase className="solution-icon" />

              <h3>Centralized Database</h3>

              <p>
                PostgreSQL securely stores customer
                applications, approval status and loan
                information for quick retrieval.
              </p>

            </div>

            <div className="solution-card">

              <FaCheckCircle className="solution-icon" />

              <h3>Admin Dashboard</h3>

              <p>
                Administrators can review, approve,
                reject and track loan requests from
                a centralized dashboard.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ======================================================
                        KEY FEATURES
      ====================================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            Key Features
          </h2>

          <div className="features-grid">

            <div className="feature-card">
              <FaClipboardCheck className="feature-icon" />
              <h3>Loan Application Form</h3>
              <p>
                Customers can submit loan requests through a
                responsive form with input validation and
                structured data collection.
              </p>
            </div>

            <div className="feature-card">
              <FaUniversity className="feature-icon" />
              <h3>Admin Dashboard</h3>
              <p>
                A centralized dashboard enables administrators
                to review applications, monitor requests and
                update loan statuses efficiently.
              </p>
            </div>

            <div className="feature-card">
              <FaChartLine className="feature-icon" />
              <h3>Dashboard Analytics</h3>
              <p>
                Summary cards display application statistics,
                approvals, pending requests and rejected
                applications in real time.
              </p>
            </div>

            <div className="feature-card">
              <FaCheckCircle className="feature-icon" />
              <h3>Status Management</h3>
              <p>
                Loan applications can be approved, rejected
                or kept pending through dedicated admin
                controls.
              </p>
            </div>

            <div className="feature-card">
              <FaDatabase className="feature-icon" />
              <h3>PostgreSQL Storage</h3>
              <p>
                Customer applications are securely stored in
                PostgreSQL using a structured relational
                database schema.
              </p>
            </div>

            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <h3>Responsive Interface</h3>
              <p>
                Fully responsive UI providing a seamless
                experience across desktop, tablet and
                mobile devices.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
                        TECHNOLOGY STACK
      ====================================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Technology Stack
          </h2>

          <div className="tech-grid">

            <div className="tech-card">
              <SiReact className="tech-icon react" />
              <h3>React.js</h3>
              <p>
                Modern component-based frontend with React
                Router and Axios for API communication.
              </p>
            </div>

            <div className="tech-card">
              <SiNodedotjs className="tech-icon node" />
              <h3>Node.js</h3>
              <p>
                Backend runtime environment responsible for
                handling REST API requests efficiently.
              </p>
            </div>

            <div className="tech-card">
              <SiExpress className="tech-icon express" />
              <h3>Express.js</h3>
              <p>
                Lightweight backend framework used for
                routing, controllers and middleware.
              </p>
            </div>

            <div className="tech-card">
              <SiPostgresql className="tech-icon postgres" />
              <h3>PostgreSQL (Neon)</h3>
              <p>
                Cloud-hosted relational database storing
                applications, loan information and
                application status.
              </p>
            </div>

            <div className="tech-card">
              <SiTailwindcss className="tech-icon tailwind" />
              <h3>Tailwind CSS</h3>
              <p>
                Utility-first CSS framework used for building
                responsive and modern user interfaces.
              </p>
            </div>

            <div className="tech-card">
              <FaDatabase className="tech-icon database" />
              <h3>REST APIs</h3>
              <p>
                Secure backend APIs enable communication
                between frontend, backend and database.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
                      SYSTEM ARCHITECTURE
      ====================================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            System Architecture
          </h2>

          <div className="architecture">

            <div className="architecture-box">
              <h3>Frontend</h3>
              <p>
                React.js application providing loan
                application forms, dashboards and
                responsive user interfaces.
              </p>
            </div>

            <div className="architecture-arrow">
              ↓
            </div>

            <div className="architecture-box">
              <h3>Backend</h3>
              <p>
                Express REST APIs manage business logic,
                request validation and communication
                with PostgreSQL.
              </p>
            </div>

            <div className="architecture-arrow">
              ↓
            </div>

            <div className="architecture-box">
              <h3>Database</h3>
              <p>
                PostgreSQL stores loan applications,
                applicant information and approval
                status using relational tables.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
                      DATABASE DESIGN
      ====================================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Database Design
          </h2>

          <div className="database-grid">

            <div className="database-card">
              <h3>Applications</h3>
              <p>
                Stores applicant name, phone number,
                requested loan amount, loan purpose,
                preferred language and approval status.
              </p>
            </div>

            <div className="database-card">
              <h3>Loan Status</h3>
              <p>
                Tracks every application's lifecycle,
                including Pending, Approved and Rejected
                states.
              </p>
            </div>

            <div className="database-card">
              <h3>Dashboard Summary</h3>
              <p>
                Aggregated queries provide statistics
                used for dashboard cards and reports.
              </p>
            </div>

            <div className="database-card">
              <h3>REST Endpoints</h3>
              <p>
                APIs expose loan applications,
                summary analytics and status update
                functionality.
              </p>
            </div>

          </div>

        </div>

      </section>
            {/* ======================================================
                    LOAN APPLICATION WORKFLOW
      ====================================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            Loan Application Workflow
          </h2>

          <div className="workflow">

            <div className="workflow-step">
              <span>01</span>
              <h3>Customer Applies</h3>
              <p>
                Users fill out the loan application form by
                entering personal details, loan amount,
                purpose and preferred language.
              </p>
            </div>

            <div className="workflow-arrow">→</div>

            <div className="workflow-step">
              <span>02</span>
              <h3>Validation</h3>
              <p>
                The backend validates incoming data before
                securely storing the application inside the
                PostgreSQL database.
              </p>
            </div>

            <div className="workflow-arrow">→</div>

            <div className="workflow-step">
              <span>03</span>
              <h3>Admin Review</h3>
              <p>
                Administrators review submitted applications
                from the dashboard and verify customer
                information.
              </p>
            </div>

            <div className="workflow-arrow">→</div>

            <div className="workflow-step">
              <span>04</span>
              <h3>Status Update</h3>
              <p>
                Applications are marked as Approved,
                Pending or Rejected through dedicated
                dashboard controls.
              </p>
            </div>

            <div className="workflow-arrow">→</div>

            <div className="workflow-step">
              <span>05</span>
              <h3>Dashboard Refresh</h3>
              <p>
                Analytics cards and application tables
                update automatically to reflect the latest
                loan status.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
                        CHALLENGES FACED
      ====================================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Challenges Faced
          </h2>

          <div className="challenge-grid">

            <div className="challenge-card">
              <h3>PostgreSQL Integration</h3>
              <p>
                Connecting the application with a cloud-hosted
                PostgreSQL database on Neon while managing
                secure environment variables.
              </p>
            </div>

            <div className="challenge-card">
              <h3>REST API Design</h3>
              <p>
                Building clean backend routes for creating,
                retrieving and updating loan applications.
              </p>
            </div>

            <div className="challenge-card">
              <h3>Dashboard Analytics</h3>
              <p>
                Creating summary APIs that calculate total,
                approved, pending and rejected applications.
              </p>
            </div>

            <div className="challenge-card">
              <h3>Responsive UI</h3>
              <p>
                Designing an interface that works smoothly
                across desktop, tablet and mobile devices.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
                        WHAT I LEARNED
      ====================================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            What I Learned
          </h2>

          <div className="learning-grid">

            <div className="learning-card">
              <h3>React Architecture</h3>
              <p>
                Improved component organization, routing and
                API integration for scalable frontend
                development.
              </p>
            </div>

            <div className="learning-card">
              <h3>Backend Development</h3>
              <p>
                Gained practical experience building REST APIs
                with Express.js and implementing business
                logic.
              </p>
            </div>

            <div className="learning-card">
              <h3>SQL & PostgreSQL</h3>
              <p>
                Learned relational database design, SQL
                queries, CRUD operations and dashboard
                aggregation.
              </p>
            </div>

            <div className="learning-card">
              <h3>Production Deployment</h3>
              <p>
                Understood environment configuration,
                deployment workflows and cloud database
                integration.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
                      FUTURE ENHANCEMENTS
      ====================================================== */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">
            Future Enhancements
          </h2>

          <div className="future-grid">

            <div className="future-card">
              JWT Authentication & Role Management
            </div>

            <div className="future-card">
              Email Notifications
            </div>

            <div className="future-card">
              EMI Calculator
            </div>

            <div className="future-card">
              PDF Loan Agreement
            </div>

            <div className="future-card">
              Document Upload
            </div>

            <div className="future-card">
              Payment Gateway Integration
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
                      PROJECT HIGHLIGHTS
      ====================================================== */}

      <section className="section dark-section">

        <div className="container">

          <h2 className="section-title">
            Project Highlights
          </h2>

          <div className="stats-grid">

            <div className="stat-card">
              <h2>React</h2>
              <p>Modern Frontend</p>
            </div>

            <div className="stat-card">
              <h2>Express</h2>
              <p>REST APIs</p>
            </div>

            <div className="stat-card">
              <h2>PostgreSQL</h2>
              <p>Cloud Database</p>
            </div>

            <div className="stat-card">
              <h2>Responsive</h2>
              <p>Mobile Friendly UI</p>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
                            CTA
      ====================================================== */}

      <section className="section cta-section">

        <div className="container">

          <div className="cta-box">

            <h2>
              Explore the Vitto Loan Portal
            </h2>

            <p>
              This project demonstrates my ability to build
              secure full-stack web applications using React,
              Express.js and PostgreSQL while implementing
              real-world CRUD operations, dashboards and REST
              APIs.
            </p>

            <div className="cta-buttons">

              <a
                href="#"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href="https://github.com/hrishikesh1231"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
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

export default Vitto;