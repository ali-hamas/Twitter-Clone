import "./App.css";
import Left from "./Components/Left";
import Center from "./Components/Center";
import Right from "./Components/Right";

function App() {
  window.onclick = (e) => {
    let insideUserItem = e.target.closest("#user-item-inner");
    if (!insideUserItem) {
      document.querySelector(".user-box").style.display = "none";
    }

    let insideMoreItem = e.target.closest("#more-item");
    if (!insideMoreItem) {
      document.querySelector(".more-box").style.display = "none";
    }
  };
  return (
    <>
      <div className="app">
        <div className="left">
          <Left name="Ali Hamas" username="@ali_hamas" />
        </div>
        <div className="center">
          <Center name="Ali Hamas" username="@ali_hamas" />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
