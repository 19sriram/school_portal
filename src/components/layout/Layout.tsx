import { useState } from "react";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  UserOutlined,
  CarryOutOutlined,
  AreaChartOutlined, 
  LogoutOutlined
} from "@ant-design/icons";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import FooterComponent from "../common/footer";

import LeadsComponent from "../leads/Leads";

import './Layout.css';

const { Header, Content, Footer, Sider } = Layout;

const SiderDemo = () => {
  const history = useHistory();
  const Logout = ()=>{
    localStorage.clear();
    history.push('/')
  }
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => setCollapsed(!collapsed);
  return (
    <>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
       
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
              <Menu.Item key="0" icon={<CarryOutOutlined />}>
              <Link to="/leads">
                <span>
                  Uploads
                </span>
                </Link>
              </Menu.Item>
              
            </Menu>
          </Sider>
          <Layout className="site-layout">
            
          <Header>
      <div className="logo" >
      <img style={{width: '7em'}} src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"/>
      </div>
      <div className='layoutOptions'>
     
      <LogoutOutlined onClick={()=>Logout()}/>
      </div>
      <div >
      </div>
    </Header>
            <Content className="contentSpace">
            <Switch>
           
            <Route path="/">
            <LeadsComponent/>
            </Route>
            <Route path="/">
            <LeadsComponent/>
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
