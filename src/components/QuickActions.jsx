import React from "react";
import { RESTAURANT_INFO } from "../data/menu";
import { PhoneCall, Navigation, Star } from "lucide-react";
import "./QuickActions.css";

export default function QuickActions() {
  return (
    <section className="quick-actions-bar">
      <a
        href={`tel:${RESTAURANT_INFO.phone}`}
        className="action-btn call-btn"
        aria-label="Call Restaurant"
      >
        <PhoneCall size={18} className="btn-icon" />
        <div className="btn-text">
          <span className="label">Order Call</span>
          <span className="sub font-mono">{RESTAURANT_INFO.displayPhone}</span>
        </div>
      </a>

      <a
        href={RESTAURANT_INFO.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="action-btn maps-btn"
        aria-label="Get Directions"
      >
        <Navigation size={18} className="btn-icon" />
        <div className="btn-text">
          <span className="label">Directions</span>
          <span className="sub">Google Maps</span>
        </div>
      </a>

      <a
        href={RESTAURANT_INFO.reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="action-btn review-btn"
        aria-label="Rate Us on Google"
      >
        <Star size={18} className="btn-icon star-icon" />
        <div className="btn-text">
          <span className="label">Rate Us</span>
          <span className="sub">⭐ 4.8 Review</span>
        </div>
      </a>
    </section>
  );
}
