// src/App.jsx
import { Layout, theme } from 'antd';
import useMediaQuery from './hooks/useMediaQuery';
import LoginPage from './pages/LoginPage';

import AppSider from './components/common/AppSider';
import AppHeader from './components/common/AppHeader';
import AppFooter from './components/common/AppFooter';
import AppContent from './components/common/AppContent';
import { useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';

import { ItensMenu } from './data/ItensMenu';

const App = ({items}) => {
 
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem("user_monitoramento")) ? JSON.parse(localStorage.getItem("user_monitoramento")) : '' )
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  const { themeWeb } = useSelector(reducer => reducer.themeReducer);

  // Use o hook useMediaQuery para verificar se está em uma tela pequena
  const isMobile = useMediaQuery('(max-width: 900px)');

  console.log(themeWeb);  
  
  return (
    <> 
      <ConfigProvider theme={
        {
          algorithm: themeWeb === "defaultAlgorithm"?theme.defaultAlgorithm:theme.darkAlgorithm
        }
      } >      
      {!currentUser&&(
        <LoginPage />)}  

      {currentUser&&(
        <Layout style={{ minHeight: '100vdh', 
                         display: 'flex', 
                         flexDirection: 'row' }}>

          {/* Renderiza o Sider apenas em telas menores (smartphones) */}
          {isMobile && (
            <AppSider items={items} />        
          )}    
                  
          <Layout  >
            {/* Renderiza o Header apenas em telas maiores (desktops) */}
            {!isMobile && (
              <AppHeader items={items} />          
            )}

            {/* Renderiza o Conteúdo das páginas */}
            <AppContent /> 

            {/* Renderiza o Footer */}       
            <AppFooter />
          </Layout>  
                  
        </Layout>        
      )}
    </ConfigProvider>  
    </>    
  );
};

// Renderizando App com items passados como props
export default function Main() {
  return <App items={ItensMenu} />;
}