import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">

        <div className="contact-header">
          <div>
            <span className="section-tag">+ Common Questions</span>
            <h2>Everything You Need<br />To Know</h2>
          </div>

          <p className="header-text">
            We've answered the most frequent questions about our services,
            process, and influencer campaigns. Explore them below to find clarity.
          </p>
        </div>

        <div className="contact-wrapper">

          {/* Left Form */}
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Enter your inquiry subject" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Write your message here"></textarea>
            </div>

            <button className="submit-btn">SEND MESSAGE</button>
          </div>

          {/* Right Info Card */}
          <div className="contact-info">
            <div className="info-item">
              <span>📞</span>
              <div>
                <p className="info-title">Phone Number</p>
                <p className="highlight">+1 (212) 555-7890</p>
              </div>
            </div>

            <div className="info-item">
              <span>📍</span>
              <div>
                <p className="info-title">Office Address</p>
                <p className="highlight">123 Creative Hub Street</p>
              </div>
            </div>

            <div className="info-item">
              <span>✉️</span>
              <div>
                <p className="info-title">Email Address</p>
                <p className="highlight">hello@socianza.com</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}