import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <form className="menu-container__header-inputs">
      <input
        type="text"
        placeholder="جست و جو ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span>
        <RiSearch2Line size={32} />
      </span>
    </form>
  );
};

export default SearchBar;
