import { useState } from "react";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  UserOutlined,
  CarryOutOutlined,
  AreaChartOutlined 
} from "@ant-design/icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FooterComponent from "../common/footer";
import  UsersComponent  from "../users/Users";
import RolesComponent from "../roles/Roles";
import LeadsComponent from "../leads/Leads";
import DashboardComponent from "../dashboard/Dashboard";


const { Header, Content, Footer, Sider } = Layout;
const SiderDemo = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => setCollapsed(!collapsed);
  return (
    <>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
       
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
             <Header>
      <div className="logo" />
      asdas
    </Header>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["4"]} mode="inline">
            <Menu.Item key="4" icon={<AreaChartOutlined />}>
              <Link to="/dashboard">
                <span>
                  Dashboard
                </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="1" icon={<UserOutlined />} >
              <Link to="/users">
                <span>
                  Users
                </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/roles">
                <span>
                  Roles
                </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<CarryOutOutlined />}>
              <Link to="/leads">
                <span>
                  Leads
                </span>
                </Link>
              </Menu.Item>
              
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
            <Switch>
            <Route path="/users">
            <UsersComponent/>
            </Route>
            <Route path="/roles">
            <RolesComponent/>
            </Route>
            <Route path="/leads">
            <LeadsComponent/>
            </Route>
            <Route path="/">
            <DashboardComponent/>
            </Route>
          </Switch>
            </Content>
            <FooterComponent />
          </Layout>
        
        </Layout>
      </Router>
    </>
  );
};

export default SiderDemo;
