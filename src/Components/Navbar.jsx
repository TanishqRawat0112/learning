import logo from "../res/logo.png";
import menu from "../res/menu.png";
import { useState } from "react";
const Navbar = ({ setSearch, showFilters, setShowFilters }) => {
  const [searchedComp, setSearchedComp] = useState(false);

  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="site-head">
        <div>Anime</div>
        <div>INFO</div>
      </div>
      <div className="srch-container">
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <button className="srch-btn" onClick={() => setSearchedComp(true)}>
          Q
        </button>
        
      </div>
      <button
        className="hamburger"
        onClick={() => setShowFilters(!showFilters)}
      >
        <img src={menu} alt="filter" className="menu" />
      </button>
    </div>
  );
};

export default Navbar;
