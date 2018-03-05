

import React from 'react';
// import { connect } from 'dva';
import styles from '../routes/IndexPage.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'dva/router';





const { Header, Content, Footer } = Layout;

class Deploy extends React.Component{
  render(){
    return (
      <Layout className="layout">
        <Header>
          <div className={styles.logo} >木牛流马</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['4']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to='/job'>JOB管理</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/task'>作业管理</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/model'>模型管理</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/deploy'>配置管理</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                   
            Deploy
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright © 武汉阿博茨科技有限公司
        </Footer>
      </Layout>
    )
  }
}


export default Deploy;

