import React, { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { RESTAURANT_INFO } from "../data/menu";
import "./FloatingCall.css";

export default function FloatingCall() {
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setMinimized(true);
      } else {
        setMinimized(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`tel:${RESTAURANT_INFO.phone}`}
      className={`floating-call-fab ${minimized ? "minimized" : ""}`}
      aria-label="Call Restaurant"
    >
      <PhoneCall size={20} className="fab-icon" />
      <span className="fab-label">Order Call</span>
    </a>
  );
}
