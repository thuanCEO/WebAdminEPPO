import React, { useState } from "react";
import "../../../assets/styles/page/signinPage.scss";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaLock } from "react-icons/fa";

export default function SigninPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Đăng nhập</h1>
          <form className="login-form">
            <div className="login-input-group">
              <input
                placeholder="Tên đăng nhập"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="login-input"
              />
              <FaRegUserCircle className="icon" />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="login-input-group">
              <input
                placeholder="Mật khẩu"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
              <FaLock className="icon" />
            </div>

            <div className="container">
              <div className="password-recovery">
                <button type="button">Quên mật khẩu</button>
              </div>
              <div className="registration">
                <a href="/E-PPO/register-account">Đăng ký</a>
              </div>
            </div>
            <br />
            <div className="login-button-group">
              <button type="button" className="login-button">
                ĐĂNG NHẬP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
