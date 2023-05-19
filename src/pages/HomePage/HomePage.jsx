import React from "react";
import home from "./HomePage.module.css";
import Messenger from "../../components/Messenger/Messenger";
function HomePage() {
  return (
    <>
      <div>
        <div className={home.container}>
          <div className={home.header}></div>
          <div className={home.bg}></div>
          <Messenger />
        </div>
      </div>
    </>
  );
}

export default HomePage;
