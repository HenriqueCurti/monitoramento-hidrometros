import { Form, Input, Button, Card, Row, Col, FloatButton, Space, Modal, message } from 'antd';
import { Table } from 'antd';
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import '../index.css'
import BlocoForm from '../components/BlocoForm';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import blocoActionTypes from '../redux/bloco/action-types';

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
            content: "Registro alterado com sucesso!"
          })
        } catch (error) {
          message.error({
            duration: 5,
            content: "Erro ao alterar o registro selecionado!"
          })
        }
      }
    })
}

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
          content: "Registro excluído com sucesso!"
        })
      } catch (error) {
        message.error({
          duration: 5,
          content: "Erro ao excluir o registro selecionado!"
        })
      }
    }
  })
}

const columns = [
  {
    title: 'Bloco',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: 'Usuário de Cadastro',
    dataIndex: 'age',
    width: 180,
  },
  {
    title: 'Data de Cadastro',
    dataIndex: 'address',
  },
  {
    title: 'Açao',
    key: 'action',    
    render: (_, record) => (
      <Space size="middle">
        <AiFillEdit focusable={true} 
                    style={{cursor:"pointer"}} 
                    size={15} 
                    onClick={handleUpdate}
        /> 
        <MdDeleteForever focusable={true} 
                         style={{cursor:"pointer"}} 
                         size={15} 
                         onClick={handleDelete}
        />
      </Space>
    ),
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Bloco ${i}`,
    age: `Usuário ${i + 2}`,
    address: `15/09/2024 15:20`,
  });
}

  const BlocosPage = () => {
    const { blocoIsOpen } = useSelector(rootReducer => rootReducer.blocoReducer)
    //const [blocoIsOpen, setBlocoIsOpen] = useState(false)

    const dispacth = useDispatch();

    const handleAdd = () => {
      dispacth({      
        type: blocoActionTypes.OPENFORM,
        payload: true      
      })
    }

  return(
    <div>
      {blocoIsOpen && (
        <BlocoForm />
      )}
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>     
          <Card title="Lista de Blocos Cadastrados" style={{textAlign:"center"}}>
            <Table
              columns={columns}
              dataSource={data}              
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
  )};

export default BlocosPage;