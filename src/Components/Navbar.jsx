import React, { useState } from "react";
import "./navbar.css";

const Navbar = (props) => {
  const [AccountInfo, setAccountInfo] = useState(false);
  const [MoreBox, setMoreBox] = useState(false);

  const MoreBoxComponent = () => {
    return (
      <>
        <div className="more-box">
          <a className="more-nav-item">
            <i class="fa-regular fa-bookmark nav-icons"></i>
            <div className="nav-name">Bookmarks</div>
          </a>
          <a className="more-nav-item">
            <i class="fa-solid fa-money-bill nav-icons"></i>
            <div className="nav-name">Monetization</div>
          </a>
          <a className="more-nav-item space-between">
            <div>Creator Studio</div>
            <i class="fa-solid fa-chevron-down"></i>
          </a>
          <a className="more-nav-item space-between">
            <div>Professional Tools</div>
            <i class="fa-solid fa-chevron-down"></i>
          </a>
          <a className="more-nav-item space-between">
            <div>Setting and Support</div>
            <i class="fa-solid fa-chevron-down"></i>
          </a>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="navbar">
        <nav>
          <a className="logo">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <ul>
            <li>
              <a className="nav-item">
                <i class="fa-solid fa-house nav-icons"></i>
                <div className="nav-name active">Home</div>
              </a>
            </li>
            <li>
              <a className="nav-item">
                <i class="fa-solid fa-magnifying-glass nav-icons"></i>
                <div className="nav-name">Search</div>
              </a>
            </li>
            <li>
              <a className="nav-item">
                <i class="fa-regular fa-bell nav-icons"></i>
                <div className="nav-name">Notifications</div>
              </a>
            </li>
            <li>
              <a className="nav-item">
                <i class="fa-regular fa-envelope nav-icons"></i>
                <div className="nav-name">Messages</div>
              </a>
            </li>
            <li>
              <a className="nav-item">
                <i class="nav-icons fa-solid fa-list-ul"></i>
                <div className="nav-name">Lists</div>
              </a>
            </li>
            <li>
              <a className="nav-item">
                <i class="fa-solid fa-user-group nav-icons"></i>
                <div className="nav-name">Comunities</div>
              </a>
            </li>
            <li>
              <a className="nav-item">
                <i class="fa-brands fa-x-twitter nav-icons"></i>
                <div className="nav-name">Premium</div>
              </a>
            </li>
            <li>
              <a className="nav-item">
                <i class="fa-regular fa-user nav-icons"></i>
                <div className="nav-name">Profile</div>
              </a>
            </li>
            <li>
              <a
                className="nav-item"
                id="more-item"
                onClick={() => {
                  setMoreBox(!MoreBox);
                }}
              >
                <i class="fa-solid fa-ellipsis nav-icons"></i>
                <div className="nav-name">More</div>
              </a>
              {MoreBox && <MoreBoxComponent />}
            </li>
          </ul>
          <button className="btn post-btn">Post</button>
          <div className="user-item">
            <div
              id="user-item-inner"
              onClick={() => {
                console.log("first");
                setAccountInfo(!AccountInfo);
              }}
            >
              <img
                src="https://alihamas.vercel.app/images/favicon.png"
                className="user-img"
              />
              <div className="user-details">
                <div className="name">{props.name}</div>
                <div className="user-name">{props.username}</div>
              </div>
              <i class="fa-solid fa-ellipsis three-dots"></i>
            </div>
            {AccountInfo && (
              <div className="user-box">
                <div className="user-box-slot">Add an existing account</div>
                <div className="user-box-slot">Log out {props.username}</div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
