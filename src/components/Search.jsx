import React from "react";
import { Search as SearchIcon, X, SlidersHorizontal } from "lucide-react";
import "./Search.css";

export default function Search({
  searchQuery,
  setSearchQuery,
  filterType,
  setFilterType,
  totalResults
}) {
  return (
    <div className="search-section">
      <div className="search-box">
        <SearchIcon size={18} className="search-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search dishes (e.g. Paneer, Biryani, Tikka)..."
          className="search-input"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="clear-btn"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="filter-pills">
        <button
          onClick={() => setFilterType("all")}
          className={`filter-pill ${filterType === "all" ? "active" : ""}`}
        >
          All Items
        </button>
        <button
          onClick={() => setFilterType("veg")}
          className={`filter-pill veg ${filterType === "veg" ? "active" : ""}`}
        >
          <span className="food-type-icon veg"></span>
          Veg Only
        </button>
        <button
          onClick={() => setFilterType("non-veg")}
          className={`filter-pill non-veg ${filterType === "non-veg" ? "active" : ""}`}
        >
          <span className="food-type-icon non-veg"></span>
          Non-Veg
        </button>
      </div>

      {searchQuery && (
        <div className="search-status-bar">
          <span>
            Found <strong>{totalResults}</strong> {totalResults === 1 ? "dish" : "dishes"} for "{searchQuery}"
          </span>
          <button onClick={() => setSearchQuery("")} className="reset-search">
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
}
