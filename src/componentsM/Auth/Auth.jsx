import { Form, Input, Button, Row, Col, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { handleSignUp, handleLogin, error } = useContext(authContext);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const navigate = useNavigate();
  function validatePassword(rule, value, callback) {
    let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    if (regex.test(value)) {
      callback();
    } else {
      callback(
        "Password should contain at least one digit,one lower case,one upper case, 8 from the mentioned characters"
      );
    }
  }
  const onFinish = (values) => {
    console.log(values);
    const { email, password } = values;
    if (isLoginForm) {
      handleLogin(email, password, navigate);
    } else {
      handleSignUp(email, password, navigate);
    }
  };
  return (
    <Row
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {/* <Col span={7}></Col> */}
      <Col span={10}>
        {error ? <Alert description={error} type="error" /> : null}
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
              {
                type: "email",
                message: "Is not valid email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                validator: validatePassword,
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {isLoginForm ? "Log in" : "Sign up"}
            </Button>
            <br />
            {isLoginForm ? (
              <>
                {" "}
                Or{" "}
                <span onClick={() => setIsLoginForm(false)}>register now!</span>
              </>
            ) : (
              <>
                Have an account ?{" "}
                <span onClick={() => setIsLoginForm(true)}>Log in</span>
              </>
            )}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Auth;
