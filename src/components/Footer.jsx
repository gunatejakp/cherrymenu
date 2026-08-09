import React from "react";
import { RESTAURANT_INFO } from "../data/menu";
import { Star, MapPin, Phone, ShieldCheck, Heart } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="restaurant-footer">
      <div className="review-cta-card">
        <div className="review-star-row">
          <Star size={18} className="star-filled" />
          <Star size={18} className="star-filled" />
          <Star size={18} className="star-filled" />
          <Star size={18} className="star-filled" />
          <Star size={18} className="star-filled" />
        </div>
        <h3 className="review-heading">Enjoyed your meal with us?</h3>
        <p className="review-subtext">Your Google review helps us grow and serve you better!</p>
        <a
          href={RESTAURANT_INFO.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="google-review-btn"
        >
          Rate us on Google
        </a>
      </div>

      <div className="footer-main-content">
        <div className="footer-crest font-cursive">Cherry Dhaba & Restaurant</div>
        <div className="footer-tagline">“{RESTAURANT_INFO.tagline}”</div>
        <div className="since-pill">Est. {RESTAURANT_INFO.since}</div>

        <div className="gold-ornament">
          <span>✦ ✦ ✦</span>
        </div>

        <div className="footer-info-chips">
          {RESTAURANT_INFO.highlights.map((h, i) => (
            <span key={i} className="info-chip">
              <ShieldCheck size={12} className="chip-icon" /> {h}
            </span>
          ))}
        </div>

        <div className="footer-notice-box">
          ⏱️ {RESTAURANT_INFO.prepNotice}
        </div>

        <div className="footer-contact-block">
          <div className="contact-item">
            <MapPin size={16} className="contact-icon" />
            <span>{RESTAURANT_INFO.address}</span>
          </div>
          <div className="contact-item">
            <Phone size={16} className="contact-icon" />
            <a href={`tel:${RESTAURANT_INFO.phone}`}>{RESTAURANT_INFO.displayPhone}</a>
          </div>
        </div>

        <div className="footer-directions-row">
          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="directions-btn"
          >
            Get Directions on Google Maps
          </a>
        </div>

        <div className="fssai-certification-badge">
          <span className="check">✔</span> {RESTAURANT_INFO.fssaiNumber}
        </div>

        <div className="footer-closing-msg">
          <p className="thank-you">Thank you for dining with us. Please visit again!</p>
          <div className="closing-divider"></div>
          <p className="copyright">
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
