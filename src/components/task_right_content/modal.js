import React from "react";
import { Modal } from "antd";
import Content from './modal_content';

export default class Modals extends React.Component {
  state = { 
    visible: false ,
    mask: false,
    maskClosable: false,
    };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
    this.setState({
      disabled : true,
      maskClosabled : false
    })
  };
  render() {
    return (
      <span>
        <span type="primary" onClick={this.showModal}>
          选择目标表
        </span>
        <Modal
          title="选择目标表"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          mask={this.state.mask}
          okText="确定"
          cancelText="取消"
          style={{
            right: "-23.8%",
            top: "18%",
          }}
          width="45%"
          maskClosable={this.state.maskClosable}          
        >
          <Content />
        </Modal>
      </span>
    );
  }
}
