// src/pages/RegisterPage.jsx
import React from 'react';
import { Form, Input, Button, Card, Row, Col, message } from 'antd';

const RegisterPage = () => {

  const onFinish = (values) => {
    try {
        console.log('Success:', values); 

        message.success({
            duration: 5,
            content: "Registro gravado com sucesso!"               
        })
    } catch (error) {
        message.error({
            duration: 5,
            content: "Erro ao gravar o registro!"               
        })
    }    
  };

  return (
    <Row justify="center" align="middle" style={{ paddingTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={10} xl={8}>
        <Card title="Cadastrar Usuário" bordered={false} >
          <Form
            name="register"
            onFinish={onFinish}
            layout="vertical"            
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
            >
              <Input placeholder="Nome" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Por favor, insira seu email!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
            >
              <Input.Password placeholder="Senha" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Cadastrar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterPage;
