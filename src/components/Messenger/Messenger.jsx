import React from "react";
import mess from "./Messenger.module.css";
import Inbox from "../Inbox/Inbox";
import Chatbox from "../Chatbox/Chatbox";

const Messenger = () => {
  return (
    <>
      <div className={mess.container}>
        <div className={mess.inbox}>
          <Inbox />
        </div>
        <div className={mess.chatbox}>
          <Chatbox />
        </div>
      </div>
    </>
  );
};

export default Messenger;
