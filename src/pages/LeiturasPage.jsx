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
import LeituraForm from "../components/LeituraForm";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import leituraActionTypes from "../redux/leitura/action-types";
import DataBase from "../data/DataBase";

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

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Bloco ${i}`,
    age: `Usuario ${i}`,
    address: `111510245${i}`,
    data: "15/09/2024 15:20",
  });
}
const LeiturasPage = () => {
  const { leituraIsOpen } = useSelector(
    (rootReducer) => rootReducer.leituraReducer
  );

  const { leituraList } = useSelector(
    (rootReducer) => rootReducer.leituraReducer
  );
  const { leituraUpdated } = useSelector(
    (rootReducer) => rootReducer.leituraReducer
  );

  const columns = [
    {
      title: "Hidrometro",
      dataIndex: "building",
      key: "building",
      render: (_, record) => {
        return (
          <>
            {record.meter.building ? (
              <div>{record.meter.building.id}</div>
            ) : (
              <div>N/A</div> // Exibe "N/A" caso o building seja undefined ou null
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
            {record.meter.building ? (
              <div>{record.meter.building.buildingName}</div>
            ) : (
              <div>N/A</div> // Exibe "N/A" caso o building seja undefined ou null
            )}
          </>
        );
      },
    },
    {
      title: "Valor",
      dataIndex: "readingValue",
    },
    {
      title: "Data da Leitura",
      dataIndex: "readingDate",
      key: "readingDate",
      render: (_, record) => {
        return (
          <>
            {record.readingDate ? (
              <div>
                {new Date(record.readingDate).toLocaleDateString("pt-BR")}
              </div>
            ) : (
              <div>N/A</div>
            )}
          </>
        );
      },
    },
    {
      title: "Responsável",
      dataIndex: "user",
      key: "user",
      render: (_, record) => {
        return (
          <>
            {record.user ? (
              <div>{record.user.username}</div>
            ) : (
              <div>N/A</div> // Exibe "N/A" caso o building seja undefined ou null
            )}
          </>
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
            onClick={handleDelete}
          />
        </Space>
      ),
    },
  ];

  const dispacth = useDispatch();

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
      type: leituraActionTypes.UPDATELEITURA,
      payload: record,
    });

    dispacth({
      type: leituraActionTypes.OPENFORM,
      payload: true,
    });
  };

  const load = async (data) => {
    dispacth({
      type: leituraActionTypes.LOADLEITURA,
      payload: data,
    });
  };

  useEffect(() => {
    DataBase.getLeitura(load);
  }, [leituraUpdated]);

  const handleAdd = () => {
    dispacth({
      type: leituraActionTypes.OPENFORM,
      payload: true,
    });
  };

  return (
    <div>
      {leituraIsOpen && <LeituraForm />}
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Card
            title="Administrador de Hidrômetros"
            style={{ textAlign: "center" }}
          >
            <Table
              columns={columns}
              dataSource={leituraList}
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
          //icon={<IoIosAddCircle />}
        />
      </Row>
    </div>
  );
};

export default LeiturasPage;
