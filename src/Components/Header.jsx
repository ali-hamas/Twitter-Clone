import React from "react";
import "./header.css";

const Header = () => {
  const followingUnderline = () => {
    document.querySelector(".underline-line").style.left = "407px";
    document.querySelector(".underline-line").style.width = "85px";
  };
  const ForYoUnderline = () => {
    document.querySelector(".underline-line").style.left = "115px";
    document.querySelector(".underline-line").style.width = "70px";
  };
  return (
    <>
      <div className="sticky-header">
        <div className="header">
          <div className="header-heading" onClick={ForYoUnderline}>
            For You
          </div>
          <div className="header-heading" onClick={followingUnderline}>
            Following
          </div>
          <div className="underline-line"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
