import React, { useRef, useEffect } from "react";
import { MENU_CATEGORIES } from "../data/menu";
import {
  Utensils,
  Flame,
  Soup,
  Leaf,
  Salad,
  Sparkles,
  Fish,
  Egg,
  Wheat,
  CookingPot,
  GlassWater
} from "lucide-react";
import "./CategoryNav.css";

const ICON_MAP = {
  Utensils,
  Flame,
  Soup,
  Leaf,
  Salad,
  Sparkles,
  Fish,
  Egg,
  Wheat,
  Bowl: CookingPot,
  GlassWater
};

export default function CategoryNav({ activeCategory, setActiveCategory }) {
  const navRef = useRef(null);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    if (id === "all") {
      window.scrollTo({ top: 350, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(`section-${id}`);
    if (element) {
      const yOffset = -120; // Sticky header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Center active tab in scroll view
  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector(".cat-tab.active");
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  }, [activeCategory]);

  return (
    <nav className="category-nav-sticky">
      <div className="category-scroll-wrapper" ref={navRef}>
        {MENU_CATEGORIES.map((cat) => {
          const IconComponent = ICON_MAP[cat.icon] || Utensils;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`cat-tab ${isActive ? "active" : ""}`}
              aria-label={`View ${cat.name}`}
            >
              <IconComponent size={15} className="cat-icon" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
