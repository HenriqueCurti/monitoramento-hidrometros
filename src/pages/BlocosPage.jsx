import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Col,
  FloatButton,
  Space,
  Modal,
  message,
} from "antd";
import { Table } from "antd";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import "../index.css";
import BlocoForm from "../components/BlocoForm";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import blocoActionTypes from "../redux/bloco/action-types";
import DataBase from "../data/DataBase";

const handleDelete = (building_id) => {
  Modal.confirm({
    title: "Exclusão",
    content: "Deseja excluir o registro selecionado?",
    okText: "Sim",
    cancelText: "Não",
    onOk: () => {
      try {
        message.success({
          duration: 5,
          content: "Registro excluído com sucesso!",
        });
      } catch (error) {
        message.error({
          duration: 5,
          content: "Erro ao excluir o registro selecionado!",
        });
      }
    },
  });
};

const BlocosPage = () => {
  const { blocoIsOpen } = useSelector(
    (rootReducer) => rootReducer.blocoReducer
  );

  const { blocoList } = useSelector((rootReducer) => rootReducer.blocoReducer);
  const { blocoUpdated } = useSelector(
    (rootReducer) => rootReducer.blocoReducer
  );

  const load = async (data) => {
    dispacth({
      type: blocoActionTypes.LOADBLOC,
      payload: data,
    });
  };

  useEffect(() => {
    DataBase.getBloco(load);
  }, [blocoUpdated]);

  const dispacth = useDispatch();

  const columns = [
    {
      title: "Bloco",
      dataIndex: "buildingName",
      width: 180,
    },
    {
      title: "Número de Unidades",
      dataIndex: "numberOfUnits",
      width: 180,
    },
    {
      title: "Data de Cadastro",
      key: "createdAt",
      render: (_, record) => {
        return record.createdAt ? (
          <div>
            {new Date(record.createdAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>
        ) : (
          <div>N/A</div>
        );
      },
    },
    {
      title: "Açao",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <AiFillEdit
            focusable={true}
            style={{ cursor: "pointer" }}
            size={15}
            onClick={() => handleUpdate(record)}
          />
          <MdDeleteForever
            focusable={true}
            style={{ cursor: "pointer" }}
            size={15}
            onClick={() => handleDelete(record.building_id)}
          />
        </Space>
      ),
    },
  ];

  const handleAdd = () => {
    dispacth({
      type: blocoActionTypes.OPENFORM,
      payload: true,
    });
  };

  const handleUpdate = (record) => {
    Modal.confirm({
      title: "Edição",
      content: "Deseja alterar o registro selecionado?",
      okText: "Sim",
      cancelText: "Não",
      onOk: () => {
        handleOpenUpdate(record);
      },
    });
  };

  const handleOpenUpdate = (record) => {
    dispacth({
      type: blocoActionTypes.UPDATEBLOC,
      payload: record,
    });

    dispacth({
      type: blocoActionTypes.OPENFORM,
      payload: true,
    });
  };

  return (
    <div>
      {blocoIsOpen && <BlocoForm />}
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Card
            title="Lista de Blocos Cadastrados"
            style={{ textAlign: "center" }}
          >
            <Table
              columns={columns}
              dataSource={blocoList}
              scroll={{
                x: 800,
                y: 300,
              }}
            />
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <FloatButton
          type="primary"
          onClick={() => handleAdd()}
          description="Novo"
        />
      </Row>
    </div>
  );
};

export default BlocosPage;
