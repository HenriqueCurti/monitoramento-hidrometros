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
import HidrometroForm from "../components/HidrometroFom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import hidrometroActionTypes from "../redux/hidrometro/action-types";
import DataBase from "../data/DataBase";

const handleUpdate = () => {
  Modal.confirm({
    title: "Edição",
    content: "Deseja alterar o registro selecionado?",
    okText: "Sim",
    cancelText: "Não",
    onOk: () => {
      try {
        message.success({
          duration: 5,
          content: "Registro alterado com sucesso!",
        });
      } catch (error) {
        message.error({
          duration: 5,
          content: "Erro ao alterar o registro selecionado!",
        });
      }
    },
  });
};

const handleDelete = () => {
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

const columns = [
  {
    title: "ID Hidrometro",
    dataIndex: "id",
    width: 140,
  },
  {
    title: "Data Calibração",
    dataIndex: "lastCalibrationDate",
    key: "lastCalibrationDate",
    render: (_, record) => {
      return (
        <>
          {record.lastCalibrationDate ? (
            <div>
              {new Date(record.lastCalibrationDate).toLocaleDateString("pt-BR")}
            </div>
          ) : (
            <div>N/A</div>
          )}
        </>
      );
    },
  },
  {
    title: "Blocos",
    dataIndex: "building",
    key: "building",
    render: (_, record) => {
      return (
        <>
          {record.building ? (
            <div>{record.building.buildingName}</div>
          ) : (
            <div>N/A</div>
          )}
        </>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
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
          onClick={handleUpdate}
        />
        <MdDeleteForever
          focusable={true}
          style={{ cursor: "pointer" }}
          size={15}
          onClick={handleDelete}
        />
      </Space>
    ),
  },
  {
    title: "Data de Instalação",
    dataIndex: "installationDate",
    key: "installationDate",
    render: (_, record) => {
      return (
        <>
          {record.installationDate ? (
            <div>
              {new Date(record.installationDate).toLocaleDateString("pt-BR")}
            </div>
          ) : (
            <div>N/A</div>
          )}
        </>
      );
    },
  },
];

const HidrometroPage = () => {
  const { hidrometroIsOpen } = useSelector(
    (rootReducer) => rootReducer.hidrometroReducer
  );

  const { hidrometroList } = useSelector(
    (rootReducer) => rootReducer.hidrometroReducer
  );

  const { hidrometroUpdated } = useSelector(
    (rootReducer) => rootReducer.hidrometroReducer
  );

  const load = async (data) => {
    dispacth({
      type: hidrometroActionTypes.LOADHIDRO,
      payload: data,
    });
  };

  useEffect(() => {
    DataBase.getHidrometro(load);
  }, [hidrometroUpdated]);

  const dispacth = useDispatch();

  const handleAdd = () => {
    dispacth({
      type: hidrometroActionTypes.OPENFORM,
      payload: true,
    });
  };

  return (
    <div>
      {hidrometroIsOpen && <HidrometroForm />}
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Card
            title="Lista de Hidrômetros Cadastrados"
            style={{ textAlign: "center" }}
          >
            <Table
              columns={columns}
              dataSource={hidrometroList}
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

export default HidrometroPage;
