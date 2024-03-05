import { useState } from "react";
import React from "react";
import "./tweetForm.css";

const TweetForm = () => {
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
  };
  const newTweet = (event) => {
    event.preventDefault();
    if (tweet.split(" ").length < 101) {
      document.getElementById("tweet-textarea").value = "";
      document.querySelector(".tweet-btn").setAttribute("disabled", "true");
      document.querySelector(".tweet-words").style.display = "none";
      tweetValue("");
    }
  };
  const calender = () => {
    let todayDate = new Date();
    tweetValue(tweet + todayDate);
    document.querySelector(".tweet-btn").removeAttribute("disabled");
  };
  return (
    <>
      <div className="tweet-form-box">
        <img
          src="https://alihamas.vercel.app/images/favicon.png"
          className="user-img"
        />
        <form className="tweet-form" onSubmit={newTweet} spellCheck="false">
          <textarea
            id="tweet-textarea"
            rows={2}
            value={tweet}
            placeholder="What is happening?!"
            onChange={change}
          ></textarea>
          <div className="tweet-form-buttons">
            <input type="file" id="file-input" accept="image/*, video/*" />
            <label htmlFor="file-input">
              <i class="fa-regular fa-image"></i>
            </label>
            <label htmlFor="tweet-textarea">
              <i class="fa-solid fa-list-ul"></i>
            </label>
            <label htmlFor="tweet-textarea" onClick={calender}>
              <i class="fa-solid fa-calendar-days"></i>
            </label>
            <label htmlFor="tweet-textarea">
              <i class="fa-regular fa-face-smile"></i>
            </label>
            <label htmlFor="tweet-textarea">
              <i class="fa-solid fa-location-dot"></i>
            </label>
            <span className="tweet-words">{tweet.split(" ").length}</span>
            <button type="sumbit" className="btn tweet-btn" disabled>
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TweetForm;
