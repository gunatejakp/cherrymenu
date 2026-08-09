import React from "react";
import MenuItem from "./MenuItem";
import "./MenuSection.css";

export default function MenuSection({ categoryData, onSelectDish }) {
  const { categoryId, categoryName, description, items } = categoryData;

  if (!items || items.length === 0) return null;

  return (
    <section className="menu-category-section" id={`section-${categoryId}`}>
      <div className="section-header-box">
        <span className="category-mini-label">CATEGORY</span>
        <h2 className="section-title">{categoryName}</h2>
        <div className="gold-ornament">
          <span>✦ ✦ ✦</span>
        </div>
        {description && <p className="section-description">{description}</p>}
      </div>

      <div className="section-items-list">
        {items.map((item, idx) => (
          <MenuItem
            key={item.id}
            item={item}
            onSelectDish={onSelectDish}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
