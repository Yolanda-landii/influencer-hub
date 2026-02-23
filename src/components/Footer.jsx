import "./Footer.css";
import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h3>InfluencerHub</h3>
          <p>
            Facilitating authentic influencer collaborations
            that drive measurable impact.
          </p>

          <div className="socials">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="TikTok">
              <FaTiktok />
            </a>

            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Careers</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Resources</h4>
          <ul>
            <li>FAQs</li>
            <li>Case Studies</li>
            <li>Guides</li>
            <li>Webinars</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Solutions</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-newsletter">
        <h3>Stay In Touch</h3>

        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 InfluencerHub. All rights reserved.</p>
      </div>
    </footer>
  );
}