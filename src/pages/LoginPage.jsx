// Exemplo de uso no LoginPage.jsx
import { Form, Input, Button, Card, Row, Col, Space } from "antd";
import { useDispatch } from "react-redux";
import userActionTypes from "../redux/user/action-types";

const LoginPage = () => {
  const dispacth = useDispatch();

  const onFinish = (values) => {
    const user = {
      ...values,
      userId: 1,
    };

    dispacth({
      type: userActionTypes.LOGIN,
      payload: user,
    });
    console.log("Success:", values);
  };

  return (
    <div>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={22} sm={16} md={12} lg={8} xl={6}>
          <Card title="Login" bordered={false}>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="userEmail"
                rules={[
                  { required: true, message: "Por favor, insira seu email!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="passwordHash"
                rules={[
                  { required: true, message: "Por favor, insira sua senha!" },
                ]}
              >
                <Input.Password placeholder="Senha" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
