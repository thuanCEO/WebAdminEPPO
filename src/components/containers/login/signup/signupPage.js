import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import icon_logo_google from "../../../../assets/images/logo/google-icon.png";
import "../login.scss";
import minhhoa from "../../../../assets/images/minhhoa.jpg";

const { Title, Text } = Typography;

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
    // Thêm logic đăng ký tại đây
  };

  return (
    <div className="sign-up-container">
      <div className="login-content">
        <div className="login-form">
          <Title level={2} className="login-title">ĐĂNG KÍ TÀI KHOẢN</Title>
          <Form
            name="register"
            layout="vertical"
            onFinish={handleRegister}
          >
            <Form.Item
              label="Địa chỉ email"
              name="username"
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ email!' }]}
            >
              <Input
                placeholder="Nhập địa chỉ email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                prefix={<FaRegUserCircle />}
                className="login-input"
              />
              {usernameError && (
                <p className="error-message">{usernameError}</p>
              )}
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                prefix={<span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>}
                className="login-input"
                type={showPassword ? "text" : "password"}
              />
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </Form.Item>

            <Form.Item
              label="Xác nhận mật khẩu"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Mật khẩu không khớp!'));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Xác nhận mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                prefix={<span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>}
                className="login-input"
                type={showConfirmPassword ? "text" : "password"}
              />
              {confirmPasswordError && (
                <p className="error-message">{confirmPasswordError}</p>
              )}
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button">
                Đăng Kí
              </Button>
            </Form.Item>
          </Form>
          <Text className="register-link">Đã có tài khoản? <a href="/E-PPO/login-account" style={{ color: "#FFA500" }}>Đăng Nhập</a></Text>
        </div>
        <div className="login-image">
          <img src={minhhoa} alt="Illustration" className="illustration-image"/>
        </div>
      </div>
    </div>
  );
}
