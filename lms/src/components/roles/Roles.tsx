import {
  Table,
  Input,
  PageHeader,
  Modal,
  Spin,
  Form,
  Select,
  message,
  Button
} from "antd";
import {_getRoles, _handleRoleAddition} from './api';
import { useEffect, useState } from "react";
import { getDecodedToken } from "../common/axios";
import "./Roles.css";

const { Search } = Input;

const RolesComponent = () => {
  const [allRoles, setAllRoles] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const { Option } = Select;
  const [form] = Form.useForm();

  useEffect(() => {
    try {
      _getRoles().then((response) => {
        
        setAllRoles(response.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);


  const defaultGetRoles= ()=>{
    try {
      _getRoles().then((response) => {
        
        setAllRoles(response.data);
      });
    } catch (e) {
      console.error(e);
    }
  }

  const onNewRole = (values:any)=>{
    let adminValue:any = getDecodedToken();
    let userInfo = {
      'role': values.role,
      'reportingTo': values.reportingTo,
      'createdById': adminValue.id,
      'createdByName': adminValue.firstname,
      'createdByRole': adminValue.role,
      'description': values.description
    };
      
    try {
      _handleRoleAddition(userInfo).then((response) => {
        if (response.result === "Success" && response.status == 200) {
          message.success(response.message);
        } else {
          message.error(response.message);
        }
        defaultGetRoles();
        setIsModalVisible(false);
      });
    } catch (e) {
      console.error(e);
    }
    
  }

  const handleOk = () => {
    setIsModalVisible(false);
    form.resetFields();

  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();

  };

  const handleNewRoleAddition = async () => {
    try {
      _getRoles().then((response) => {
        if (response.result === "Success" && response.status == 200) {
          setAllRoles(response.data);
          form.resetFields();
        }
        setIsModalVisible(true);
      });
    } catch (e) {
      console.error(e);
    }
  };


  const columns = [
    {
      title: "Role",
      dataIndex: "role",
      render: (value, row, index) => (
        <a key={index}>
          {value}
        </a>
      ),    },
    {
      title: "Reporting to",
      dataIndex: "reportingTo",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Roles"
        subTitle="Manage roles status in this page"
      />
      <div className="usersOptions">
        <Button
          onClick={handleNewRoleAddition}
          type="primary"
          className="addUsersBtnStyle"
        >
          Add Roles
        </Button>


      </div>

      <Table columns={columns} dataSource={allRoles} onChange={onChange}/>
      
      <Modal
        title="Add new role"
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

        {
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onNewRole}
            autoComplete="off"
            form={form}
          >

            <Form.Item
              label="Enter Rolename"
              name="role"
              rules={[
                { required: true, message: "Please input your role!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Reporting to" name="reportingTo">
              <Select>
                {allRoles &&
                  allRoles.map((item: any) => {
                    return <Option value={item.role}>{item.role}</Option>;
                  })}
              </Select>
            </Form.Item>

            <Form.Item
              label="Enter description"
              name="description"
              rules={[
                { required: true, message: "Please input your description!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        }
      </Modal>
    </>
  );
};

export default RolesComponent;
