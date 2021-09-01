import { Modal, Spin, Form, Input, Button, message } from "antd";
import { useState } from "react";
import { _verifyUserExists, _verifyUserCode, _handleNewPassword } from "./api";
export const ForgotPwdComponent = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [showVerifyUser, setShowVerifyUser] = useState(true);
  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  const [waiting, setWaiting] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    props.close();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    props.close();
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleVerifyUser = async (values: any) => {
    setWaiting(true);
    let response = await _verifyUserExists(values.userInfo);
    const { status, result } = response;
    if (result === "Success" && status == 200) {
      message.success("User Found");
      setUserInfo(values.userInfo);
      setShowVerifyUser(false);
      setShowVerifyCode(true);
    } else {
      let errorMsg = response.message;
      message.error(errorMsg);
    }
    setWaiting(false);
  };

  const handleVerifyCode = async (values: any) => {
    setWaiting(true);
    let response = await _verifyUserCode(userInfo, values.codeInfo);
    const { status, result } = response;
    if (result === "Success" && status == 200) {
      message.success("Code match successful");
      setShowVerifyUser(false);
      setShowVerifyCode(true);
    } else {
      let errorMsg = response.message;
      message.error(errorMsg);
    }
    setWaiting(false);
  };

  const handleNewPassword = async (values: any) => {
    setWaiting(true);
    let response = await _handleNewPassword(userInfo, values.newpassword);
    const { status, result } = response;
    if (result === "Success" && status == 200) {
      message.success(
        "Password changed successfully. Login with your new password"
      );
      setShowNewPassword(false);
      setIsModalVisible(false);
      props.close();
    } else {
      let errorMsg = response.message;
      message.error(errorMsg);
    }
    setWaiting(false);
  };

  // For sending code
  const verifyUserEmail = (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleVerifyUser}
    >
      <Form.Item
        label="Enter email / number"
        name="userInfo"
        rules={[
          {
            required: true,
            message: "Please enter your emailid or phone number associated!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Verify User
        </Button>
      </Form.Item>
    </Form>
  );

  // For verifying code
  const verifyUserCode = (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleVerifyCode}
    >
      <Form.Item
        label="Enter code sent"
        name="codeInfo"
        rules={[
          {
            required: true,
            message: "Please enter code sent to your registered email!",
          },
        ]}
      >
        <Input disabled={waiting} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Verify Code
        </Button>
      </Form.Item>
    </Form>
  );

  // For sending new password
  const newPassword = (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleNewPassword}
    >
      <Form.Item
        label="Enter new password"
        name="newpassword"
        rules={[{ required: true, message: "Please enter your new password!" }]}
      >
        <Input disabled={waiting} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Modal
      title="Send and verify code"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      {waiting && (
        <div style={{ textAlign: "center" }}>
          {" "}
          <Spin />{" "}
        </div>
      )}
      {showVerifyUser && verifyUserEmail}
      {showVerifyCode && !waiting && verifyUserCode}
      {showNewPassword && !waiting && newPassword}
    </Modal>
  );
};
