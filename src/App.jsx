import React, { useState, useEffect, useMemo } from "react";
import EntranceAnimation from "./components/EntranceAnimation";
import Hero from "./components/Hero";
import QuickActions from "./components/QuickActions";
import Search from "./components/Search";
import CategoryNav from "./components/CategoryNav";
import FeaturedDishes from "./components/FeaturedDishes";
import MenuSection from "./components/MenuSection";
import ImageModal from "./components/ImageModal";
import FloatingCall from "./components/FloatingCall";
import Footer from "./components/Footer";

import { MENU_DATA } from "./data/menu";
import { UtensilsCrossed } from "lucide-react";

export default function App() {
  const [showEntrance, setShowEntrance] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all"); // 'all' | 'veg' | 'non-veg'
  const [selectedDishModal, setSelectedDishModal] = useState(null);

  // Filter menu items dynamically based on search, category & dietary filter
  const filteredMenuData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return MENU_DATA.map((cat) => {
      // If specific category is chosen (and not 'all'), omit non-matching category blocks unless searching
      if (!query && activeCategory !== "all" && cat.categoryId !== activeCategory) {
        return null;
      }

      const filteredItems = cat.items.filter((item) => {
        // Dietary type filter
        if (filterType === "veg" && item.type !== "veg") return false;
        if (filterType === "non-veg" && item.type !== "non-veg") return false;

        // Search text query
        if (query) {
          const matchName = item.name.toLowerCase().includes(query);
          const matchDesc = item.description?.toLowerCase().includes(query);
          const matchCat = cat.categoryName.toLowerCase().includes(query);
          return matchName || matchDesc || matchCat;
        }

        return true;
      });

      if (filteredItems.length === 0) return null;

      return {
        ...cat,
        items: filteredItems
      };
    }).filter(Boolean);
  }, [activeCategory, searchQuery, filterType]);

  // Calculate total matched items for search status
  const totalResults = useMemo(() => {
    return filteredMenuData.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredMenuData]);

  // IntersectionObserver for Scroll Spy active category updating
  useEffect(() => {
    if (searchQuery) return; // Disable scroll spy during active search

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const catId = entry.target.id.replace("section-", "");
          setActiveCategory(catId);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    MENU_DATA.forEach((cat) => {
      const el = document.getElementById(`section-${cat.categoryId}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [searchQuery]);

  return (
    <>
      {showEntrance && (
        <EntranceAnimation onComplete={() => setShowEntrance(false)} />
      )}

      <div className="app-container">
        <Hero />
        <QuickActions />
        
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterType={filterType}
          setFilterType={setFilterType}
          totalResults={totalResults}
        />

        <CategoryNav
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {!searchQuery && activeCategory === "all" && (
          <FeaturedDishes onSelectDish={setSelectedDishModal} />
        )}

        <main className="menu-main-content">
          {filteredMenuData.length > 0 ? (
            filteredMenuData.map((catData) => (
              <MenuSection
                key={catData.categoryId}
                categoryData={catData}
                onSelectDish={setSelectedDishModal}
              />
            ))
          ) : (
            <div className="empty-search-state">
              <UtensilsCrossed size={48} className="empty-icon" />
              <h3>No dishes found</h3>
              <p>We couldn't find any dishes matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterType("all");
                }}
                className="reset-search-btn"
              >
                View Full Menu
              </button>
            </div>
          )}
        </main>

        <Footer />

        <FloatingCall />

        {selectedDishModal && (
          <ImageModal
            dish={selectedDishModal}
            onClose={() => setSelectedDishModal(null)}
          />
        )}
      </div>
    </>
  );
}
