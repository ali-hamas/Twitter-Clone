import React from "react";
import "./search.css";

const Search = () => {
  const searchFunction = () => {
    document.getElementById("search-input").value.length > 0
      ? (document.querySelector(".clear-search").style.display = "block")
      : (document.querySelector(".clear-search").style.display = "none");
  };
  return (
    <>
      <div className="search-component">
        <form autoComplete="off">
          <input
            type="text"
            id="search-input"
            placeholder="Search"
            onInput={searchFunction}
          />
          <label htmlFor="search-input">
            <i class="fa-solid fa-magnifying-glass search-label"></i>
          </label>
          <i
            class="fa-solid fa-circle-xmark clear-search"
            onClick={() => {
              document.getElementById("search-input").value = "";
              document.querySelector(".clear-search").style.display = "none";
            }}
          ></i>
        </form>
      </div>
    </>
  );
};

export default Search;
