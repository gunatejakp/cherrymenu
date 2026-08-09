import React from "react";
import { FEATURED_DISHES } from "../data/menu";
import { Sparkles, Star, Award, Flame } from "lucide-react";
import "./FeaturedDishes.css";

export default function FeaturedDishes({ onSelectDish }) {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <div className="featured-badge">
          <Sparkles size={14} className="gold-icon" />
          <span>CHEF'S SELECTION</span>
        </div>
        <h2 className="featured-title">Cherry's Specials</h2>
        <p className="featured-subtitle">Handcrafted signature dishes recommended for you</p>
      </div>

      <div className="featured-grid">
        {FEATURED_DISHES.map((dish) => (
          <div
            key={dish.id}
            className="featured-card"
            onClick={() => onSelectDish(dish)}
          >
            <div className="featured-image-wrapper">
              <img
                src={dish.image}
                alt={dish.name}
                className="featured-img"
                loading="lazy"
              />
              <div className="featured-image-overlay"></div>
              
              <div className="featured-card-badges">
                {dish.chefSpecial && (
                  <span className="badge chef">
                    <Award size={11} /> Chef's Special
                  </span>
                )}
                {dish.popular && (
                  <span className="badge popular">
                    <Star size={11} /> Popular
                  </span>
                )}
                {dish.mustTry && (
                  <span className="badge must-try">
                    <Flame size={11} /> Must Try
                  </span>
                )}
              </div>
              
              <div className="featured-price-tag">
                ₹{dish.price}
              </div>
            </div>

            <div className="featured-card-content">
              <div className="featured-card-title-row">
                <span className={`food-type-icon ${dish.type}`}></span>
                <h3 className="featured-dish-name">{dish.name}</h3>
              </div>
              <p className="featured-dish-desc">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
