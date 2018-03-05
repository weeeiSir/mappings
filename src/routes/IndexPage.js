import React from 'react';
// import { connect } from 'dva';
import styles from './IndexPage.less';
import { Layout, Menu, Breadcrumb,Button,Modal } from 'antd';
import { Link } from 'dva/router';
// import Job from '../components/job.js';
// import Task from '../components/task.js';
// import Deploy from '../components/deploy.js';
// import Model from '../components/model.js';

class Btn extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <section>
        <Button type="primary" onClick={this.showModal}>创建JOB</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>正在开发中...</p>
        </Modal>
      </section>
    );
  }
}






class Index extends React.Component{
  render(){
    return (
      <div className={styles.empity}>
        
        <div>
          <img src="./image/Bitmap.png" alt='暂无JOB'/>
          <p>暂无JOB，赶紧创建吧</p>
          <Btn/>
        </div>
      </div>
    )
  }
}


const { Header, Content, Footer } = Layout;

class IndexPage extends React.Component{
  render(){
    return (
      <Layout className="layout">
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
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: "100%" }}>
            <div className={styles["title-tips"]}>JOB管理</div>        
            <Index />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright © 武汉阿博茨科技有限公司
        </Footer>
      </Layout>
    )
  }
}


export default IndexPage


// function mapStateToProps({ common }) {
//   return {common};
// }
// export default connect(mapStateToProps)(IndexPage);
