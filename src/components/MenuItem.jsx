import React from "react";
import { Star, Award, Flame } from "lucide-react";
import "./MenuItem.css";

export default function MenuItem({ item, onSelectDish, index }) {
  return (
    <article
      className="menu-item-card"
      style={{ animationDelay: `${Math.min(index * 40, 300)}ms` }}
    >
      <div
        className="menu-item-thumb-box"
        onClick={() => onSelectDish(item)}
        title="Tap to preview image"
      >
        <img
          src={item.image}
          alt={item.name}
          className="menu-item-thumb"
          loading="lazy"
        />
        <div className="thumb-zoom-hint">🔍</div>
      </div>

      <div className="menu-item-info">
        <div className="menu-item-header">
          <div className="title-with-type">
            <span className={`food-type-icon ${item.type}`}></span>
            <h3 className="menu-item-title">{item.name}</h3>
          </div>
          <div className="menu-item-price">
            <span className="currency">₹</span>
            <span className="amount">{item.price}</span>
          </div>
        </div>

        {item.description && (
          <p className="menu-item-desc">{item.description}</p>
        )}

        <div className="menu-item-meta">
          {item.popular && (
            <span className="item-badge popular">
              <Star size={10} /> Popular
            </span>
          )}
          {item.chefSpecial && (
            <span className="item-badge chef">
              <Award size={10} /> Chef Special
            </span>
          )}
          {item.mustTry && (
            <span className="item-badge must-try">
              <Flame size={10} /> Must Try
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
