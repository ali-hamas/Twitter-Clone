import React, { useState } from "react";
import "./tweet.css";

const Tweet = (props) => {
  const [LikeCount, setLikeCount] = useState(1);
  const [RetweetCount, setRetweetCount] = useState(0);
  return (
    <>
      <div className="tweet">
        <img
          src="https://alihamas.vercel.app/images/favicon.png"
          className="user-img"
        />
        <div className="tweet-content">
          <div className="tweet-head">
            <span className="name">Ali Hamas</span>
            <i class="fa-solid fa-circle-check"></i>
            <span className="username">@ali_hamas</span>
            <span className="time">2s</span>
          </div>
          <div className="tweet-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quas debitis ipsum voluptates sequi perspiciatis
            voluptatum error maxime quibusdam labore officiis velit soluta vitae
            excepturi animi commodi mollitia corporis in cum consequatur.
          </div>
          <div className="tweet-buttons">
            <div className="tweet-button-box comment-box">
              <i class="fa-regular fa-comment"></i>
              <div className="tweet-buttons-numbers">2k</div>
            </div>
            <div className="tweet-button-box retweeet-box">
              <input type="checkbox" id={props.RetweetId} />
              <label htmlFor={props.RetweetId}>
                <i class="fa-solid fa-retweet"></i>
                <div className="tweet-buttons-numbers retweet-numbers">
                  {RetweetCount}
                </div>
              </label>
            </div>
            <div className="tweet-button-box like-box">
              <input type="checkbox" id={props.LikeId} />
              <label htmlFor={props.LikeId}>
                <i class="fa-regular fa-heart"></i>
                <div className="tweet-buttons-numbers like-numbers">
                  {LikeCount}
                </div>
              </label>
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
    </>
  );
};

export default Tweet;
