import React, { useState } from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { FaRegUserCircle, FaLock } from "react-icons/fa";
import "../login.scss";
import minhhoa from "../../../../assets/images/minhhoa.jpg";
import bgrLogin from "../../../../assets/images/bgr_login.png";
const { Title, Text } = Typography;

export default function SigninPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row className="sign-in-container" justify={"center"} style={{
      marginTop:'8%'
    }}>
      <Col span={20} style={{
 
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover',
        backgroundPosition: 'center center'
      }}>

        <Row>
          <Col span={14}>
            <div className="login-form-container">
              <Title level={3} className="login-title">ĐĂNG NHẬP</Title>
              <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="login-form"
                layout="vertical"
              >
                <Form.Item
                  label="Tên đăng nhập"
                  name="username"
                  rules={[{ required: true, message: 'Nhập địa chỉ email' }]}
                >
                  <Input placeholder="Nhập địa chỉ email" />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  rules={[{ required: true, message: 'Nhập mật khẩu' }]}
                >
                  <Input.Password placeholder="Nhập mật khẩu" />
                </Form.Item>

                <Form.Item>
                  <Link href="#" className="forgot-password">QUÊN MẬT KHẨU?</Link>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-button">
                    Đăng nhập
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Text>Không có tài khoản ? <Link href="/E-PPO/register-account">Tạo ngay</Link></Text>
                </Form.Item>
              </Form>
            </div>

          </Col>
          <Col span={10}>

          </Col>

        </Row>
      </Col>
       
    </Row>
    
  );
}
