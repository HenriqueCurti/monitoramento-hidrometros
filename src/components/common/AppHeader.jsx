import { Layout, Menu, Image, Modal, message  } from 'antd';

import logo from '/logo-univesp.png'

import { useDispatch } from "react-redux";
import userActionTypes from '../../redux/user/action-types';

import { useSelector } from 'react-redux';
import ThemeActionTypes from '../../redux/theme/action-types';

const { Header} = Layout;

const AppHeader = ({items}) => {
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

    const handleChangeTheme = () => {              
        dispatch({
            type: ThemeActionTypes.CHANGE,
        })
    }

    const handleClickMenu = (evento) => {
        if(evento.key === '6'){
            handleChangeTheme();            
        }else if(evento.key === '7'){      
            Modal.confirm({
                title: "Finalizar Sessão",
                content: "Deseja realmente sair?",
                okText: "Sim",
                cancelText: "Não",
                onOk: (handleLogout)
            })                      
        }
    }

    return(        
        <Header style={{
                padding: 0,
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",  
                backgroundColor: themeWeb === 'darkAlgorithm' ? '#001529 ' : '#ffffff',  // Cor personalizada para tema dark
                color: themeWeb === 'darkAlgorithm' ? '#ffffff' : '#000000',  
                }}
                >
            <div style={{width:"10%"}}>
                <Image
                    className='logo'
                    style={{marginLeft:"5%"}}
                    src={logo}
                    preview={false}
                    width={85}
                    alt='Logotipo da univesp, Escola Virtual do Estado de São Paulo' />
            </div>                        
                <Menu mode="horizontal"                 
                      style={{
                          display:"flex",      
                          marginRight:"5%",                      
                          justifyContent:"right",
                          width:"85%",
                           //maxWidth: "900px",
                           backgroundColor: themeWeb === 'darkAlgorithm' ? '#001529 ' : '#ffffff',  // Cor personalizada para tema dark                                                       
                        }}  
                       defaultSelectedKeys={['1']} 
                       items={items}
                       onClick={(evento) => handleClickMenu(evento)}
                />
                
                      
        </Header>        
    )
}

export default AppHeader