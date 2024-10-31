
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../../pages/RegisterPage';
import BlocosPage from '../../pages/BlocosPage';
import LeiturasPage from '../../pages/LeiturasPage';
import DashboardPage from '../../pages/DashboardPage';

import { Layout } from 'antd';

const { Content } = Layout;


const AppContent = () => {
    return(
        <div>
            <Content
                style={{
                    margin: '24px 16px',
                }}
                >
                <div
                    style={{
                    minHeight: "75vh",  
                    //background: colorBgContainer,
                    //borderRadius: borderRadiusLG,
                    }}
                >            
                    <Routes>
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/blocos" element={<BlocosPage />} />
                        <Route path="/" element={<LeiturasPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                    </Routes>            
                </div>
            </Content>
        </div>
    )
}

export default AppContent;