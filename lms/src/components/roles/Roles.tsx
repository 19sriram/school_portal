import { Table, Input, PageHeader } from "antd";
import { Drawer, Button } from "antd";
import { useState } from "react";

import "./Roles.css";

const { Search } = Input;

const RolesComponent = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: "First Name",
      dataIndex: "name",
      render: () => <a onClick={showDrawer}>1</a>,
    },
    {
      title: "Last Name",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Assigned Role",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Phone Number",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Active Status",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Actions",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
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
        subTitle="Manage roles and access for roles in this page"
      />
      <div className="usersOptions">
        <Button
          onClick={() => null}
          type="primary"
          className='addUsersBtnStyle'
        >
          Add Roles
        </Button>

        <Search
          placeholder="input search text"
          onSearch={() => console.log(1)}
          style={{ width: 200 }}
        />
      </div>
      
      <Table columns={columns} dataSource={data} onChange={onChange} />
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default RolesComponent;
