import React from "react";
import { RESTAURANT_INFO } from "../data/menu";
import { Clock, ShieldCheck, Award } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero-container">
      <div className="hero-pattern-bg"></div>
      
      <div className="hero-top-bar">
        <div className="since-badge">
          <Award size={13} className="badge-icon" />
          <span>EST. {RESTAURANT_INFO.since}</span>
        </div>
        <div className="prep-time-pill">
          <Clock size={13} className="clock-icon" />
          <span>15 Min Prep Time</span>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-crest">
          <div className="crest-line"></div>
          <span className="crest-symbol">✦ ✦ ✦</span>
          <div className="crest-line"></div>
        </div>

        <h1 className="hero-title">{RESTAURANT_INFO.name}</h1>
        <p className="hero-tagline">{RESTAURANT_INFO.tagline}</p>

        <div className="hero-subtitle-badge">
          <span>{RESTAURANT_INFO.subtitle}</span>
        </div>
      </div>

      <div className="hero-footer-strip">
        <div className="strip-item">
          <ShieldCheck size={14} className="strip-icon" />
          <span>Freshly Prepared</span>
        </div>
        <span className="strip-dot">•</span>
        <div className="strip-item">
          <ShieldCheck size={14} className="strip-icon" />
          <span>Quality Ingredients</span>
        </div>
        <span className="strip-dot">•</span>
        <div className="strip-item">
          <ShieldCheck size={14} className="strip-icon" />
          <span>Hygienic Kitchen</span>
        </div>
      </div>
    </header>
  );
}
