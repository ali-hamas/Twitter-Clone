import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import TweetForm from "./Components/TweetForm";
import Tweet from "./Components/Tweet";
import Trend from "./Components/Trend";
import Subscribe from "./Components/Subscribe";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  // window.onclick = (e) => {
  //   let insideUserItem = e.target.closest("#user-item-inner");
  //   if (!insideUserItem) {
  //     document.querySelector(".user-box").style.display = "none";
  //   }

  //   let insideMoreItem = e.target.closest("#more-item");
  //   if (!insideMoreItem) {
  //     document.querySelector(".more-box").style.display = "none";
  //   }
  // };
  const [RetweetCount, setRetweetCount] = useState(0);
  const [LikeCount, setLikeCount] = useState(0);
  return (
    <>
      <div className="main-container">
        <div className="left-side">
          <Navbar name="Ali Hamas" username="@ali_hamas" />
        </div>
        <div className="container">
          <div className="center-side">
            <Header />
            <TweetForm />
            <div className="all-tweets">
              <Tweet
                RetweetId={`retweet-checkbox1`}
                LikeId={`like-checkbox1`}
              />
              <Tweet
                RetweetId={`retweet-checkbox2`}
                LikeId={`like-checkbox2`}
              />
              <Tweet
                RetweetId={`retweet-checkbox3`}
                LikeId={`like-checkbox3`}
              />
            </div>
          </div>
          <div className="right-side">
            <div className="right-side-inner">
              <div className="search-box">
                <Search />
              </div>
              <div className="suscribe-box">
                <Subscribe />
              </div>
              <div className="trends-box">
                <Trend />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
