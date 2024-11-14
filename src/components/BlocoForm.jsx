// src/pages/BlocoForm.jsx
import React, { useState } from "react";
import { Form, Input, Button, Card, Row, Col, Modal, message } from "antd";

import { useSelector, useDispatch } from "react-redux";
import blocoActionTypes from "../redux/bloco/action-types";

const BlocoForm = () => {
  const { blocoIsOpen } = useSelector(
    (rootReducer) => rootReducer.blocoReducer
  );

  const { blocoUpdated } = useSelector(
    (rootReducer) => rootReducer.blocoReducer
  );

  const dispacth = useDispatch();

  const handleCloseModal = () => {
    dispacth({
      type: blocoActionTypes.OPENFORM,
      payload: false,
    });
    dispacth({
      type: blocoActionTypes.UPDATEBLOC,
      payload: [],
    });
  };

  const onFinish = (values) => {
    try {
      let formattedValues;
      if (blocoUpdated.id) {
        formattedValues = {
          ...values,
          id: blocoUpdated.id,
        };
      }

      dispacth({
        type: blocoActionTypes.LOADBLOC,
        payload: formattedValues ? formattedValues : values,
      });

      handleCloseModal();
      console.log(
        "Bloco cadastrado:",
        formattedValues ? formattedValues : values
      );

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
        open={blocoIsOpen}
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
          <Card title="Cadastrar Bloco" bordered={false}>
            <Form name="bloco" onFinish={onFinish} layout="vertical">
              <Form.Item
                name="buildingName"
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira o nome do bloco!",
                  },
                ]}
                initialValue={
                  blocoUpdated.buildingName ? blocoUpdated.buildingName : ""
                }
              >
                <Input placeholder="Nome do Bloco" />
              </Form.Item>

              <Form.Item
                name="numberOfUnits"
                rules={[
                  {
                    required: true,
                    message:
                      "Por favor, insira um número de unidades para o bloco!",
                  },
                ]}
                initialValue={blocoUpdated.numberOfUnits}
              >
                <Input placeholder="Número de Unidades" />
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
