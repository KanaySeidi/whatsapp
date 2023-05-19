import React, { useState } from "react";
import sign from "./SignIn.module.css";
import logo from "../../assets/icon/logo.svg";
import signWP from "../../assets/icon/sign.jpg";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [instance, setInstance] = useState("");
  const [apiToken, setApiToken] = useState("");
  return (
    <>
      <div className={sign.section}>
        <div className={sign.sectionHead}></div>
        <div className={sign.container}>
          <div className={sign.intro}>
            <img src={logo} width={40} alt="whatsapp logo" />
            <p>GREEN API WHATSAPP WEB</p>
          </div>
          <div className={sign.box}>
            <img src={signWP} width={400} alt="sign wallper" />
            <input
              type="text"
              onChange={(e) => setInstance(e.target.value)}
              value={instance}
              placeholder="Введите IdInstance"
            />
            <input
              type="text"
              onChange={(e) => setApiToken(e.target.value)}
              value={apiToken}
              placeholder="Введите ApiTokenInstance"
            />

            <button>
              <Link style={{ color: "#fff" }} to="/home">
                Войти
              </Link>
            </button>

            <iframe
              width="560"
              height="415"
              src="https://www.youtube.com/embed/pLGoeZ27buM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen
            ></iframe>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default SignIn;
