import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];
function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" id="" placeholder="City Location" />
        <input
          type="text"
          name="minPrice"
          min={0}
          max={10000000}
          id=""
          placeholder="Min Price"
        />
        <input
          type="text"
          name="maxPrice"
          min={0}
          max={10000000}
          id=""
          placeholder="Max Price"
        />
        <button>
          <img src="./logo.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
