import React, { useState } from "react";
import "./center.css";

export default function Center(props) {
  const newTweet = (event) => {
    event.preventDefault();
    if (tweet.split(" ").length < 101) {
      let textareaValue = document.getElementById("tweet-textarea").value;
      let formatTextareaValue = textareaValue.replace(/\n/g, "<br>");
      let newTweetDiv = document.createElement("div");
      document.querySelector(".tweets-box").prepend(newTweetDiv);
      newTweetDiv.classList.add("tweet");
      newTweetDiv.innerHTML = `<img
      src="https://alihamas.vercel.app/images/favicon.png"
      class="user-img"
      />
      <div class="tweet-content">
      <div class="tweet-head">
      <span class="name">${props.name}</span>
      <i class="fa-solid fa-circle-check"></i>
      <span class="username">${props.username}</span>
      <span class="time">1s</span>
      </div>
      <div class="tweet-text">
      ${formatTextareaValue}
      </div>
      <div class="tweet-buttons">
      <div class="tweet-button-box comment-box">
      <i class="fa-regular fa-comment"></i>
      <div class="tweet-buttons-numbers">0</div>
      </div>
      <div class="tweet-button-box retweeet-box">
      <i class="fa-solid fa-retweet"></i>
      <div class="tweet-buttons-numbers retweet-numbers">0</div>
      </div>
      <div class="tweet-button-box like-box">
      <i class="fa-regular fa-heart"></i>
      <div class="tweet-buttons-numbers like-numbers">0</div>
      </div>
      <div class="tweet-button-box impression-box">
      <i class="fa-solid fa-chart-simple"></i>
      <div class="tweet-buttons-numbers">1</div>
      </div>
      <div class="tweet-button-box bookmark-box">
      <i class="fa-regular fa-bookmark"></i>
      </div>
      <div class="tweet-button-box share-box">
      <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </div>
      </div>
      </div>`;
      document.getElementById("tweet-textarea").value = "";
      document.querySelector(".tweet-btn").setAttribute("disabled", "true");
      document.querySelector(".tweet-words").style.display = "none";
    }
  };

  let [tweet, tweetValue] = useState("");

  const change = (e) => {
    tweetValue(e.target.value);

    document.getElementById("tweet-textarea").value.length > 0
      ? document.querySelector(".tweet-btn").removeAttribute("disabled")
      : document.querySelector(".tweet-btn").setAttribute("disabled", "true");

    document.getElementById("tweet-textarea").value.length > 0
      ? (document.querySelector(".tweet-words").style.display = "block")
      : (document.querySelector(".tweet-words").style.display = "none");

    tweet.split(" ").length > 100
      ? (document.querySelector(".tweet-words").style.background = "#dc3545")
      : (document.querySelector(".tweet-words").style.background =
          "var(--blueColor)");

    // tweet.split(" ").length = 100 ? tweetValue() : tweetValue(e.target.value);
  };
  return (
    <div>
      <div className="center-div">
        <div className="header">
          <div className="header-heading">For You</div>
          <div className="header-heading">Following</div>
          <div className="underline-line"></div>
        </div>
        <div className="tweet-form-box">
          <img
            src="https://alihamas.vercel.app/images/favicon.png"
            className="user-img"
          />
          <form className="tweet-form" onSubmit={newTweet} spellCheck="false">
            <textarea
              id="tweet-textarea"
              rows={4}
              value={tweet}
              placeholder="What is happening?!"
              onChange={change}
            ></textarea>
            <div className="tweet-form-buttons">
              <i class="fa-regular fa-image"></i>
              <i class="fa-solid fa-list-ul"></i>
              <i class="fa-solid fa-calendar-days"></i>
              <i class="fa-regular fa-face-smile"></i>
              <i class="fa-solid fa-location-dot"></i>
              <span className="tweet-words">{tweet.split(" ").length}</span>
              <button type="sumbit" className="btn tweet-btn" disabled>
                Post
              </button>
            </div>
          </form>
        </div>
        <div className="tweets-box">
          <div className="tweet">
            <img
              src="https://alihamas.vercel.app/images/favicon.png"
              className="user-img"
            />
            <div className="tweet-content">
              <div className="tweet-head">
                <span className="name">{props.name}</span>
                <i class="fa-solid fa-circle-check"></i>
                <span className="username">{props.username}</span>
                <span className="time">1s</span>
              </div>
              <div className="tweet-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatibus at minima. Nam ipsa tempore, corrupti
                consequatur quis id quo natus modi deserunt ipsam alias soluta
                libero, sed placeat officia. Minima aliquam magnam sed!
                <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div className="tweet-buttons">
                <div className="tweet-button-box comment-box">
                  <i class="fa-regular fa-comment"></i>
                  <div className="tweet-buttons-numbers">2k</div>
                </div>
                <div className="tweet-button-box retweeet-box">
                  <i class="fa-solid fa-retweet"></i>
                  <div className="tweet-buttons-numbers retweet-numbers">2</div>
                </div>
                <div className="tweet-button-box like-box">
                  <i class="fa-regular fa-heart"></i>
                  <div className="tweet-buttons-numbers like-numbers">2</div>
                </div>
                <div className="tweet-button-box impression-box">
                  <i class="fa-solid fa-chart-simple"></i>
                  <div className="tweet-buttons-numbers">2k</div>
                </div>
                <div className="tweet-button-box bookmark-box">
                  <i class="fa-regular fa-bookmark"></i>
                </div>
                <div className="tweet-button-box share-box">
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
