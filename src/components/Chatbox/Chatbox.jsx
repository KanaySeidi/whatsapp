import chat from "./Chatbox.module.css";
import axios from "axios";
import { useState } from "react";
import SmileIcon from "@mui/icons-material/InsertEmoticon";
import SearchIcon from "@mui/icons-material/Search";
import mainBG from "../../assets/img/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";

const API =
  "https://api.green-api.com/waInstance1101820826/SendMessage/a792e916f7d0498ca7beaea780078a298051447b8b654dd3af";
const APIReceive =
  "https://api.green-api.com/waInstance1101820826/ReceiveNotification/a792e916f7d0498ca7beaea780078a298051447b8b654dd3af";
const APIDelete =
  "https://api.green-api.com/waInstance1101820826/DeleteNotification/a792e916f7d0498ca7beaea780078a298051447b8b654dd3af/116";

const Chatbox = () => {
  const [addmsg, setAddmsg] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");
  const [isReceive, setIsReceive] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const updateState = () => {
    setMessage(addmsg);
  };

  async function SendSMS(addmsg) {
    try {
      const res = await axios.post(API, {
        chatId: "996555853110@c.us",
        message: addmsg,
      });
      setAddmsg(addmsg);
      setIsSend(true);
      updateState();
      setAddmsg("");
      setTimeout(() => {
        ReceiveSMS();
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  }

  async function ReceiveSMS() {
    try {
      const res = await axios.get(APIReceive);
      console.log(res);
      setNotification(res.data.body.messageData.textMessageData.textMessage);
      setIsReceive(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function DeleteSMS() {
    try {
      const res = await axios.delete(APIDelete);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className={chat.userBox}>
        <div className={chat.userImgCont}>
          <img
            className={chat.userImg}
            src={`https://placeimg.com/50/50/people?=${new Date().getTime()}`}
            alt=""
          />
          <div className={chat.user}>
            <p>Канай Сейдибалиев</p>
            <p>Данные контакты</p>
          </div>
        </div>
        <div className={chat.navList}>
          <div className={chat.navItem}>
            <SearchIcon />
          </div>
          <div className={chat.navItem}>
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <img className={chat.mainBG} src={mainBG} alt="main bg" />

      {isSend ? (
        <div className={chat.converCont}>
          <div className={chat.converReverse}>
            <h4>Канай Сейдибалиев</h4>
            <p>{message}</p>
            <p className={chat.time}>14:54</p>
          </div>
        </div>
      ) : null}
      {isReceive ? (
        <div className={chat.conver}>
          <h4>Канай Сейдибалиев</h4>
          <p>{notification}</p>
          <p className={chat.time}>14:54</p>
        </div>
      ) : null}

      <div className={chat.sendCont}>
        <div className={chat.sendBox}>
          <div className={chat.sendList}>
            <div className={chat.sendItem}>
              <SmileIcon />
            </div>
            <div className={chat.sendItem}>
              <AttachIcon />
            </div>
            <input
              type="text"
              value={addmsg}
              placeholder="Введите сообщение"
              onChange={(e) => setAddmsg(e.target.value)}
            />
            <div className={chat.sendItem}>
              {addmsg ? (
                <button onClick={(e) => SendSMS(addmsg)}>
                  <SendIcon />
                </button>
              ) : (
                <MicIcon />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
