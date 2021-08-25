import { Modal, Spin, Form, Input, Button } from "antd";
import { useState } from "react";

export const ForgotPwdComponent = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

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
  // For sending code
  const sendCode = (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Enter email"
        name="emailid / phonenumber"
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
          Verify code
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Enter new password"
        name="newpassword"
        rules={[{ required: true, message: "Please enter your new password!" }]}
      >
        <Input />
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
      {sendCode}
      {newPassword}
      <Spin />
    </Modal>
  );
};
