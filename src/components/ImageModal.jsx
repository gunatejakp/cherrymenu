import React, { useEffect } from "react";
import { X, Star, Award, Flame, PhoneCall } from "lucide-react";
import { RESTAURANT_INFO } from "../data/menu";
import "./ImageModal.css";

export default function ImageModal({ dish, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!dish) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close preview"
        >
          <X size={20} />
        </button>

        <div className="modal-image-container">
          <img src={dish.image} alt={dish.name} className="modal-img" />
          <div className="modal-image-overlay"></div>
          
          <div className="modal-price-pill">
            ₹{dish.price}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-title-row">
            <span className={`food-type-icon ${dish.type}`}></span>
            <h2 className="modal-dish-name">{dish.name}</h2>
          </div>

          {dish.description && (
            <p className="modal-dish-desc">{dish.description}</p>
          )}

          <div className="modal-badges-row">
            {dish.popular && (
              <span className="item-badge popular">
                <Star size={11} /> Popular Item
              </span>
            )}
            {dish.chefSpecial && (
              <span className="item-badge chef">
                <Award size={11} /> Chef's Signature
              </span>
            )}
            {dish.mustTry && (
              <span className="item-badge must-try">
                <Flame size={11} /> Must Try
              </span>
            )}
          </div>

          <div className="modal-actions-row">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="modal-call-btn"
            >
              <PhoneCall size={16} />
              <span>Order via Call ({RESTAURANT_INFO.displayPhone})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
