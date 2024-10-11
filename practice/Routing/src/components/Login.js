import React, { useContext, useState ,useEffect} from "react";
import useAuthentication from "../useAuthentication"
import {useHistory,useLocation} from "react-router-dom"

import {
  Layout,
  Col,
  Row,
  Typography,
  Form,
  Input,
  Button,
  Divider,
  Alert
} from "antd";

const { Title } = Typography;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history =useHistory();
  const location =useLocation();
  const AuthCtx = useAuthentication();
  const {from} =(location && location.state) || {from:{pathname:"/"}}
  
  const formItemLayout = {
    wrapperCol: {
      md: { span: 20 }
    }
  };
  console.log("AUTHX",AuthCtx);
  
  // const {login,user,error}=useContext(AuthCtx);
// useEffect(()=>{
//   user && history.replace(from);
// },[user,from,history])
  return (
    <Layout>
      <Row>
        <Col span={24}>
          <Title level={2}>Login</Title>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col span={14}>
          <Form {...formItemLayout}>
            <Form.Item>
              <Input
                type="text"
                placeholder="E-Mail"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="login-form-button" >  
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Alert message="Incorrect usernam/password" type="error" />
        </Col>
      </Row>
      {/* <Row>
        <Col span={8}>
        {error ?(
          <Alert message="Incorrect username/password" type="error"></Alert>
        ): null}
        </Col>
      </Row> */}
    </Layout>
  );
};

export default Login;
