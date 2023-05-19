import React from "react";
import inb from "./Inbox.module.css";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import FilterIcon from "@mui/icons-material/FilterList";
const Inbox = () => {
  return (
    <>
      <div className={inb.userBox}>
        <div className={inb.userImgCont}>
          <img
            className={inb.userImg}
            src={`https://placeimg.com/50/50/people?=${new Date().getTime()}`}
            alt=""
          />
        </div>
        <div className={inb.navList}>
          <div className={inb.navItem}>
            <GroupsIcon />
          </div>
          <div className={inb.navItem}>
            <DonutLargeIcon />
          </div>
          <div className={inb.navItem}>
            <ChatIcon />
          </div>
          <div className={inb.navItem}>
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className={inb.searchBox}>
        <div className={inb.searchIcon}>
          <SearchIcon />
          <div className={inb.searchInp}>
            <input type="text" placeholder="Поиск или новый чат" />
          </div>
        </div>
        <div className={inb.filterBtn}>
          <FilterIcon />
        </div>
      </div>
      <div className={inb.inboxItem}>
        <img
          src={`https://placeimg.com/50/50/people?=${new Date().getTime()}`}
          alt="user avatar"
        />
        <div className={inb.inboxUser}>
          <p>Канай Сейдибалиев</p>
          <p>Ты что</p>
        </div>
        <p>19:45</p>
      </div>
    </>
  );
};

export default Inbox;
