import React, { useEffect, useState } from "react";
import "./EntranceAnimation.css";

export default function EntranceAnimation({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Name appears
    const timer1 = setTimeout(() => setStage(1), 300);
    // Stage 1: Tagline appears
    const timer2 = setTimeout(() => setStage(2), 700);
    // Stage 2: Divider & Explore appear
    const timer3 = setTimeout(() => setStage(3), 1100);
    // Complete and fade out by 1400ms (1.4 seconds max)
    const timer4 = setTimeout(() => {
      onComplete();
    }, 1450);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className={`entrance-overlay ${stage >= 3 ? "fade-out" : ""}`}>
      <div className="entrance-card">
        <div className="entrance-crest">✦ 👑 ✦</div>
        <h1 className={`entrance-title ${stage >= 0 ? "active" : ""}`}>
          Cherry Dhaba & Restaurant
        </h1>
        <p className={`entrance-tagline ${stage >= 1 ? "active" : ""}`}>
          “The Taste You Expect”
        </p>
        
        <div className={`entrance-divider ${stage >= 2 ? "active" : ""}`}>
          <span></span>
          <div className="diamond">◆</div>
          <span></span>
        </div>

        <span className={`entrance-action ${stage >= 2 ? "active" : ""}`}>
          Explore Our Menu
        </span>
      </div>
    </div>
  );
}
