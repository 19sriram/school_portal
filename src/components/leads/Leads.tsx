import { Table, Input, PageHeader } from "antd";
import { Drawer, Button } from "antd";
import { useState } from "react";

import "./Leads.css";

const { Search } = Input;

const UploadsComponent = () => {


  const columns = [
    {
      title: "First Name",
      dataIndex: "name",
    }
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
        title="Uploads"
        subTitle="Manage uploads from students in this page"
      />

      
      <Table columns={columns} dataSource={data} onChange={onChange} />
      
    </>
  );
};

export default UploadsComponent;
