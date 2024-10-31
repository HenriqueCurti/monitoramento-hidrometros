// src/pages/BlocoForm.jsx
import React from 'react';
import { Form, Input, Button, Card, Row, Col, Modal, message } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import blocoActionTypes from '../redux/bloco/action-types';

const BlocoForm = () => {
  const { blocoIsOpen } = useSelector(rootReducer => rootReducer.blocoReducer)

  const dispacth = useDispatch();

  const handleCloseModal = () => {
    dispacth({      
      type: blocoActionTypes.OPENFORM,
      payload: false      
    })
  }

  const onFinish = (values) => {
    try {
      handleCloseModal();
      console.log('Bloco cadastrado:', values);    

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
    <Row justify="center" style={{ paddingTop: '20px' }}>
        <Modal open={blocoIsOpen}
               onCancel={() => (
                Modal.confirm({
                    title: "Registro Leituras",
                    content: "Deseja realmente sair?",
                    okText: "Sim",
                    cancelText: "Não",
                    style: {display: "flex", flexDirection: "row"},
                    onOk: (handleCloseModal)
                })
               )}
               footer={[]}> 
            <Col span={24}>
                <Card title="Cadastrar Bloco" bordered={false}>
                <Form                    
                    name="bloco"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                    name="nomeBloco"
                    rules={[{ required: true, message: 'Por favor, insira o nome do bloco!' }]}
                    >
                    <Input placeholder="Nome do Bloco" />
                    </Form.Item>

                    <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Cadastrar Bloco
                    </Button>
                    </Form.Item>
                </Form>
                </Card>
            </Col>
        </Modal>
    </Row>
    
  );
};

export default BlocoForm;