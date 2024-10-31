import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
    return(
        <div >
            <Footer
                style={{
                    textAlign: 'center',                    
                }}
                >
                Projeto Integrador II ©{new Date().getFullYear()} Universidade Virtual do Estado de São Paulo
            </Footer>
        </div>
    )
}

export default AppFooter