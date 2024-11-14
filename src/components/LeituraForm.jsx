// src/pages/LeituraForm.jsx
import React from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Select,
  Row,
  Col,
  Modal,
  message,
} from "antd";

import { useSelector, useDispatch } from "react-redux";
import leituraActionTypes from "../redux/leitura/action-types";
import DataBase from "../data/DataBase";

const LeituraForm = () => {
  const { leituraIsOpen } = useSelector((reducer) => reducer.leituraReducer);
  const { leituraUpdated } = useSelector((reducer) => reducer.leituraReducer);

  const { hidrometroList } = useSelector(
    (rootReducer) => rootReducer.hidrometroReducer
  );

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  const dispacth = useDispatch();

  const handleCloseModal = () => {
    dispacth({
      type: leituraActionTypes.OPENFORM,
      payload: false,
    });
    dispacth({
      type: leituraActionTypes.UPDATELEITURA,
      payload: [],
    });
  };

  const onFinish = (values) => {
    try {
      let data;
      if (!leituraUpdated.user) {
        data = {
          ...values,
          userId: currentUser.userId,
        };
      } else {
        data = {
          ...values,
          userId: leituraUpdated.user.id,
        };
      }

      console.log(data);

      DataBase.setLeitura(data);

      handleCloseModal();
      console.log("Leitura lançada:", data);

      message.success({
        duration: 5,
        content: "Registro gravado com sucesso!",
      });
    } catch (error) {
      message.error({
        duration: 5,
        content: "Erro ao gravar o registro!",
      });
    }
  };

  return (
    <Row justify="center" style={{ paddingTop: "20px" }}>
      <Modal
        open={leituraIsOpen}
        onCancel={() =>
          Modal.confirm({
            title: "Registro Leituras",
            content: "Deseja realmente sair?",
            okText: "Sim",
            cancelText: "Não",
            style: { display: "flex", flexDirection: "row" },
            onOk: handleCloseModal,
          })
        }
        footer={[]}
      >
        <Col span={24}>
          <Card title="Lançar Leitura" bordered={false}>
            <Form name="leitura" onFinish={onFinish} layout="vertical">
              <Form.Item
                name="meterId"
                rules={[
                  {
                    required: true,
                    message: "Por favor, selecione o hidrômetro!",
                  },
                ]}
                initialValue={leituraUpdated.meter && leituraUpdated.meter.id}
              >
                <Select placeholder="Selecione o Hidrômetro">
                  <Option key={0} value="0" label="Selecione um Hidrômetro">
                    <div> Selecione um Hidrômetro</div>
                  </Option>
                  {hidrometroList &&
                    hidrometroList.map((item) => (
                      <Option
                        key={item.id}
                        value={item.id}
                        label={item.building.buildingName}
                      >
                        <div>{item.building.buildingName}</div>
                      </Option>
                    ))}

                  {/* <Select.Option value="bloco1">Bloco 1</Select.Option>
                        <Select.Option value="bloco2">Bloco 2</Select.Option> */}
                  {/* Adicione mais opções conforme necessário */}
                </Select>
              </Form.Item>

              <Form.Item
                name="readingValue"
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira o valor da leitura!",
                  },
                ]}
                initialValue={
                  leituraUpdated.readingValue && leituraUpdated.readingValue
                }
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
