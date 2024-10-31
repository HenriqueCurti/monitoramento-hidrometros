import { Layout, Menu, Image, Flex, message, Modal } from 'antd';

import logo from '/logo-univesp.png'

import { useDispatch } from "react-redux";
import userActionTypes from '../../redux/user/action-types';

import { useSelector } from 'react-redux';
import ThemeActionTypes from '../../redux/theme/action-types';

const { Sider } = Layout;

const AppSider = ({items}) => {
    const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);  
    const { themeWeb }    = useSelector(rootReducer => rootReducer.themeReducer);  

    const dispatch = useDispatch()
    const handleLogout = () => {
        try {
            dispatch({
                type: userActionTypes.LOGOUT
            });

            message.success({
                duration: 5,
                content: "Sessão Finalizada com sucesso!"
            })
        } catch (error) {
            message.error({
                duration: 5,
                content: "Sessão Finalizada com sucesso!"
            })
        }
    }

    const handleClickMenu = (evento) => {
        if(evento.key === '5'){
            handleChangeTheme();            
        }else if(evento.key === '6'){
            Modal.confirm({
                title: "Finalizar Sessão",
                content: "Deseja realmente sair?",
                okText: "Sim",
                cancelText: "Não",
                onOk: (handleLogout)
            })             
        }
    }

    const handleChangeTheme = () => {              
        dispatch({
            type: ThemeActionTypes.CHANGE,
        })
    }

    return(
        <div>           
            
            <Sider
                style={{
                minHeight: '100dvh', // Assegura que o Menu preencha toda a altura do Sider
                backgroundColor: themeWeb === 'darkAlgorithm' ? '#001529 ' : '#ffffff',  // Cor personalizada para tema dark
                color: themeWeb === 'darkAlgorithm' ? '#ffffff' : '#000000',  
                }}
                breakpoint="xs"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                >
                <div className="demo-logo-vertical" />
                <Flex align='center'
                        justify='center'
                    >
                    <Image
                        style={{marginTop:"25px", marginBottom:"10px"}}
                        src={logo}
                        preview={false}
                        width={85}
                        alt='Logo da univesp' 
                    />
                </Flex>                    

                <Menu   mode="inline" 
                        defaultSelectedKeys={['1']}
                        onClick={(evento) => handleClickMenu(evento)}
                        style={{
                        height: 'calc(100vh - 150px)', // Ajusta a altura do menu conforme o espaço disponível
                        overflowY: 'auto', // Adiciona rolagem no Menu, caso o conteúdo exceda o espaço disponível
                        backgroundColor: themeWeb === 'darkAlgorithm' ? '#001529 ' : '#ffffff',  // Cor personalizada para tema dark
                        }}
                        items={items} />
            </Sider>
            
        </div>
    )
}

export default AppSider;