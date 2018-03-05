import { Layout } from 'antd';
import React from 'react';
const { Header, Content, Footer } = Layout;
class Headers extends React.Component{
    render(){
        return(
            <Header>
                <div className={styles.logo} >木牛流马</div>
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
                >
                <Menu.Item key="1"><Link to='/job'>JOB管理</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/task'>作业管理</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/model'>模型管理</Link></Menu.Item>
                <Menu.Item key="4"><Link to='/deploy'>配置管理</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default Headers;




