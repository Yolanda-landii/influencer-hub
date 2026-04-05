import React, { useState } from "react";
import "./ContactSection.css";

const CONTACT_EMAIL = "info@influencerhub.it.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    ok: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email.trim()) {
      setStatus({
        submitting: false,
        ok: false,
        message: "Please enter your email address.",
      });
      return;
    }

    setStatus({ submitting: true, ok: null, message: "" });

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim() || "Contact form — InfluencerHub",
          message: form.message.trim(),
          _subject: `InfluencerHub contact: ${form.subject.trim() || "New message"}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await res.json().catch(() => ({}));
      const sent =
        res.ok &&
        (data.success === true ||
          data.success === "true" ||
          String(data.success).toLowerCase() === "true");

      if (sent) {
        setStatus({
          submitting: false,
          ok: true,
          message: "Thanks — your message was sent. We'll get back to you soon.",
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          submitting: false,
          ok: false,
          message:
            data.message ||
            "Could not send your message. Please try again or email us directly.",
        });
      }
    } catch {
      setStatus({
        submitting: false,
        ok: false,
        message: "Network error. Please try again or email us directly.",
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <div>
            <span className="section-tag">+ Common Questions</span>
            <h2>
              Everything You Need
              <br />
              To Know
            </h2>
          </div>

          <p className="header-text">
            We've answered the most frequent questions about our services,
            process, and influencer campaigns. Explore them below to find clarity.
          </p>
        </div>

        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Enter your inquiry subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Write your message here"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {status.message && (
              <p
                className={`form-status ${status.ok === true ? "form-status--ok" : ""} ${status.ok === false ? "form-status--err" : ""}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}

            <button
              className="submit-btn"
              type="submit"
              disabled={status.submitting}
            >
              {status.submitting ? "SENDING…" : "SEND MESSAGE"}
            </button>
          </form>

          <div className="contact-info">
            <div className="info-item">
              <span>📞</span>
              <div>
                <p className="info-title">Phone Number</p>
                <p className="highlight">+27 69 766 7637</p>
              </div>
            </div>

            

            <div className="info-item">
              <span>✉️</span>
              <div>
                <p className="info-title">Email Address</p>
                <p className="highlight">{CONTACT_EMAIL}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
