import { Form, Input, Button,  Card, message } from "antd";
import { useHistory } from "react-router-dom";

import "./Login.css";

export const LoginComponent = () => {
  const logoSrc =
    "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg";
  let history = useHistory();

  const onFinish = async (values) => {
    const { username, password } = values;

    // let response = await _loginHandler({ username, password });
    // let { status, result, accessToken } = response;
    if (values.username === 'admin' && values.password === 'mav123X!') {
      history.push('/mainPage');
    }
    else {
      //let errorMsg = response.message;
      message.error('Login error. contact admin');
    } 
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={<img id="logo-style" src={logoSrc} />}
        bordered={false}
        style={{ width: 300 }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

         
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
