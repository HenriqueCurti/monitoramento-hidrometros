
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../../pages/RegisterPage';
import BlocosPage from '../../pages/BlocosPage';
import LeiturasPage from '../../pages/LeiturasPage';
import DashboardPage from '../../pages/DashboardPage';
import PageNoFound from '../../pages/result/PageNoFound';
import PrivateRoute from '../PrivateRoute';

import { Layout } from 'antd';
import HidrometroPage from '../../pages/HidrometroPage';

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
                        <Route path="/register" element={<PrivateRoute element={<RegisterPage />} />} />
                        <Route path="/blocos" element={<PrivateRoute element={<BlocosPage />} />} />
                        <Route path="/" element={<PrivateRoute element={<LeiturasPage />} />} />
                        <Route path="/dashboard" element={<PrivateRoute element={<DashboardPage />} />} />
                        <Route path="/hidrometro" element={<PrivateRoute element={<HidrometroPage />} />} />
                        <Route path='*' element={<PageNoFound />} />
                    </Routes>            
                </div>
            </Content>
        </div>
    )
}

export default AppContent;