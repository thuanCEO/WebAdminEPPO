import React, { useState } from "react";
import "../../../assets/styles/page/signupPage.scss";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaEyeSlash, FaEye } from "react-icons/fa";
import icon_logo_google from "../../../assets/images/logo/google-icon.png";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setUsernameError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };
  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Đăng Kí Tài Khoản</h1>
          <form className="login-form">
            <div className="login-input-group">
              <input
                placeholder="Tên đăng nhập"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
              />
              <FaRegUserCircle className="icon" />
              {usernameError && (
                <p className="error-message">{usernameError}</p>
              )}
            </div>
            <div className="login-input-group">
              <input
                placeholder="Mật khẩu"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaEyeSlash className="icon" />
                ) : (
                  <FaEye className="icon" />
                )}
              </span>
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>
            <div className="login-input-group">
              <input
                placeholder="Xác nhận lại mật khẩu"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="login-input"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="icon" />
                ) : (
                  <FaEye className="icon" />
                )}
              </span>
              {confirmPasswordError && (
                <p className="error-message">{confirmPasswordError}</p>
              )}
            </div>
            <div className="container">
              <div className="login-account">
                <a href="/reality3d/login-account">Đăng Nhập</a>
              </div>
              <div className="home-page">
                <a href="/reality3d/home-page">Trang Chủ</a>
              </div>
            </div>
            <br />
            <div className="login-button-group">
              <button
                type="button"
                className="login-button"
                onClick={handleRegister}
              >
                ĐĂNG KÍ
              </button>
            </div>
            <div className="login-button-group">
              <button type="button" className="login-button">
                <img
                  src={icon_logo_google}
                  alt="login-button"
                  width="26px"
                  height="14px"
                />
                <span className="login-google-span">Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
