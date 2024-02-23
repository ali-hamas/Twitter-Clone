import React from "react";
import "./right.css";

export default function Right() {
  const clearSearch = () => {
    document.getElementById("search-input").value = "";
  };
  const searchFunction = () => {
    document.getElementById("search-input").value.length > 0
      ? (document.querySelector(".clear-search").style.display = "block")
      : (document.querySelector(".clear-search").style.display = "none");
  };
  return (
    <div>
      <div className="right-side">
        <div className="search-box">
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
              onClick={clearSearch}
            ></i>
          </form>
        </div>
        <div className="subscribe-box">
          <div className="subscribe-heading">Subscribe to Premium</div>
          <div className="subscribe-text">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </div>
          <button className="btn">Subscribe</button>
        </div>
        <div className="trends-box">
          <div className="trends-heading">Trends for you</div>
          <div className="trend">
            <div className="trend-details">
              <div className="trend-type">Sports</div>
              <div className="trend-name">PSL9</div>
              <div className="trend-number">20k</div>
            </div>
            <i class="fa-solid fa-ellipsis three-dots"></i>
          </div>
          <div className="trend">
            <div className="trend-details">
              <div className="trend-type">Sports</div>
              <div className="trend-name">PSL9</div>
              <div className="trend-number">20k</div>
            </div>
            <i class="fa-solid fa-ellipsis three-dots"></i>
          </div>
          <div className="trend">
            <div className="trend-details">
              <div className="trend-type">Sports</div>
              <div className="trend-name">PSL9</div>
              <div className="trend-number">20k</div>
            </div>
            <i class="fa-solid fa-ellipsis three-dots"></i>
          </div>
          <div className="trend">
            <div className="trend-details">
              <div className="trend-type">Sports</div>
              <div className="trend-name">PSL9</div>
              <div className="trend-number">20k</div>
            </div>
            <i class="fa-solid fa-ellipsis three-dots"></i>
          </div>
          <div className="trend">
            <div className="trend-details">
              <div className="trend-type">Sports</div>
              <div className="trend-name">PSL9</div>
              <div className="trend-number">20k</div>
            </div>
            <i class="fa-solid fa-ellipsis three-dots"></i>
          </div>
          <div className="trend">
            <div className="trend-details">
              <div className="trend-type">Sports</div>
              <div className="trend-name">PSL9</div>
              <div className="trend-number">20k</div>
            </div>
            <i class="fa-solid fa-ellipsis three-dots"></i>
          </div>
          <div className="trend">
            <div className="trend-details">
              <div className="trend-type">Sports</div>
              <div className="trend-name">PSL9</div>
              <div className="trend-number">20k</div>
            </div>
            <i class="fa-solid fa-ellipsis three-dots"></i>
          </div>
          <div className="trend">
            <div className="trend-details">
              <div className="trend-type">Sports</div>
              <div className="trend-name">PSL9</div>
              <div className="trend-number">20k</div>
            </div>
            <i class="fa-solid fa-ellipsis three-dots"></i>
          </div>
          <div className="trend">
            <div className="trend-details">
              <div className="trend-type">Sports</div>
              <div className="trend-name">PSL9</div>
              <div className="trend-number">20k</div>
            </div>
            <i class="fa-solid fa-ellipsis three-dots"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
