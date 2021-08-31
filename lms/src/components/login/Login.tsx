import { Form, Input, Button, Checkbox ,Card, Modal } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from '../common/axios';
import { ForgotPwdComponent } from './Forgotpwd';
import './Login.css';
export const LoginComponent = ()=>{

    const [isModalVis, setIsModalVis] = useState(false);
    let history = useHistory();

    const onFinish = (values) => {
        axios.post('user/login',{
        "username":"99044234234",
        "password":"Admin@123"
        }).then((response:any)=>{
            if(response.status = 200) {
                localStorage.setItem('accessToken',response.accessToken);
                history.push('/sider');
            }
        });
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="site-card-border-less-wrapper">
        <Card title={<img id="logo-style" src='https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg'/>} bordered={false} style={{ width: 300 }}>
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
                message: 'Please input your username!',
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
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <a onClick={()=>setIsModalVis(true)}>Forgot password?</a>
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
            {isModalVis &&
        <ForgotPwdComponent close={()=>setIsModalVis(false)}/>
            }
    </div>

    )
        }
    
