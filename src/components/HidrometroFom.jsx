// src/pages/BlocoForm.jsx
import React from 'react';
import { Form, Input, Button, Card, Row, Col, Modal, message, Select, DatePicker } from 'antd';


import { useSelector, useDispatch } from 'react-redux';
import hidrometroActionTypes from '../redux/hidrometro/action-types';

const HidrometroForm = () => {
  const { hidrometroIsOpen } = useSelector(rootReducer => rootReducer.hidrometroReducer)

  const { blocoList } = useSelector(rootReducer => rootReducer.blocoReducer)

  const dispacth = useDispatch();

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleCloseModal = () => {
    dispacth({      
      type: hidrometroActionTypes.OPENFORM,
      payload: false      
    })
  }

  const onFinish = (values) => {
    try {
      handleCloseModal();
      console.log('Hidrometro cadastrado:', values);    

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
        <Modal open={hidrometroIsOpen}
               onCancel={() => (
                Modal.confirm({
                    title: "Registro Hidrometro",
                    content: "Deseja realmente sair?",
                    okText: "Sim",
                    cancelText: "Não",
                    style: {display: "flex", flexDirection: "row"},
                    onOk: (handleCloseModal)
                })
               )}
               footer={[]}> 
            <Col span={24}>
                <Card title="Cadastrar Hidrômetro" bordered={false}>
                <Form                    
                    name="bloco"
                    onFinish={onFinish}
                    layout="vertical"                    
                >
                    <Form.Item
                    name="nomeBloco"
                    rules={[{ required: true, message: 'Por favor, insira o nome do bloco!' }]}
                    >
                    <Select placeholder="Nome do Bloco">
                      <Option key={0} 
                              value='0' 
                              label='Selecione um Bloco'>
                                  <div> Selecione um Bloco</div>
                      </Option>
                      {blocoList && blocoList.map(item => (
                        <Option key={item.id} 
                                value={item.id} 
                                label={item.buildingName}>  

                            <div>{item.buildingName}</div>   

                        </Option>
                      ))} 
                    </Select>
                    </Form.Item>

                    <Form.Item
                     name="dateCalibration"
                     rules={[{ required: false, message: 'Por favor, insira a data de calibração!' }]}>
                    
                      <DatePicker placeholder='Data de Calibração' onChange={onChange} style={{width:'100%'}} />
                    

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

export default HidrometroForm;