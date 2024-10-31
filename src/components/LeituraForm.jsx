// src/pages/LeituraForm.jsx
import React from 'react';
import { Form, Input, Button, Card, Select, Row, Col, Modal, message } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import leituraActionTypes from '../redux/leitura/action-types';

const LeituraForm = () => {
    const { leituraIsOpen } = useSelector(reducer => reducer.leituraReducer);
    const dispacth = useDispatch();

    const handleCloseModal = () => {        
        dispacth({
            type: leituraActionTypes.OPENFORM,
            payload: false
        })
    }

  const onFinish = (values) => {
    try {
        handleCloseModal();
        console.log('Leitura lançada:', values);     

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
        <Modal open={leituraIsOpen}
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
                <Card title="Lançar Leitura" bordered={false}>
                <Form
                    name="leitura"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                    name="bloco"
                    rules={[{ required: true, message: 'Por favor, selecione o bloco!' }]}
                    >
                    <Select placeholder="Selecione o Bloco">
                        <Select.Option value="bloco1">Bloco 1</Select.Option>
                        <Select.Option value="bloco2">Bloco 2</Select.Option>
                        {/* Adicione mais opções conforme necessário */}
                    </Select>
                    </Form.Item>

                    <Form.Item
                    name="leitura"
                    rules={[{ required: true, message: 'Por favor, insira o valor da leitura!' }]}
                    >
                    <Input placeholder="Valor da Leitura" type="number" />
                    </Form.Item>

                    <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Lançar Leitura
                    </Button>
                    </Form.Item>
                </Form>
                </Card>
            </Col>
        </Modal>
    </Row>
  );
};

export default LeituraForm;