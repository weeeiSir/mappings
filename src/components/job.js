import React from 'react';
import { Link } from 'dva/router';
import MyPdfViewer from '../data/pdf';
import Forms from './from/index';
import { Row, Col, Select, Form, Input, Button, Radio, Icon } from 'antd';
import styles from './job.less';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;




//单选按钮
class Radios extends React.Component {
  state = {
    value: '完全匹配',
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    const detail = this.props.detail;
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        {detail.map((item,index)=>{          
          return <Radio value={item} key={index}>{item}</Radio>
        })}
      </RadioGroup>
    );
  }
}






class Job extends React.Component{
  constructor(props){
    super(props);
    this.state={
      radio : ['部分匹配','完全匹配']
    }
  }
  handleClick(){
    window.history.go(-1);
  }
  render (){
    console.log(window.location.hash)
    return (
      <div>
        <Row>
          <Col className={styles["left-content"]} span={12} >
            <div className={styles["title-tips"]}>表格匹配</div> 
            <Form>
                <FormItem
                  label='模型名称'
                  key='1'
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 12 }}
                > 
                  <Input placeholder={'请输入模型名称'} />                  
                </FormItem>
                <FormItem
                  label='匹配算法'
                  key='2'
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 12 }}
                >
                  <Radios detail={this.state.radio} />                  
                </FormItem>
                <Forms />
            </Form>
            <div className={styles.btn}><Button type="primary" ><Link to='/task-map'>下一步</Link></Button><Button onClick={this.handleClick}>返回</Button></div>
          </Col>
          <Col className={styles["right-content"]} span={12}>
            <div className={styles["title-tips"]}>对应公告</div> 
            <div className={styles["pdf"]}>
              <MyPdfViewer style={{width:"100%"}}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Job;




/*
const info = [{
  title : '模型名称',
  type : 'input'
},{
  title : '匹配算法',
  type : 'radio',
  children : ['部分匹配','完全匹配']
},{
  title : '标题配置',
  type : 'input'
},{
  title : '标题匹配率',
  type : 'input'
},{
  title : '标题权重',
  type : 'input'
},{
  title : '指标集合',
  type : 'select',
  children : [[
    '营业总收入',
    '营业收入'
  ],[
    '营业总利润',
    '营业利润'
  ],[
    '利润总额',
    '利润'
  ],[
    '归属上市公司股东的净利润',
    '股东的净利润'
  ],[
    '基本每股收益(元)',
    '每股收益(元)'
  ],[
    '加权平均收益率%',
    '平均收益率'
  ],[
    '总资产',
    '资产'
  ],[
    '股本',
    '股本。。'
  ],[
    '归属上市公司股东的每股净资产',
    '每股净资产'
  ]]
},{
  title : '指标匹配率',
  type : 'input'
},{
  title : '指标权重',
  type : 'input'
}]

//单选按钮
class Radios extends React.Component {
  state = {
    value: '完全匹配',
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    const detail = this.props.detail;
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        {detail.map((item,index)=>{          
          return <Radio value={item} key={index}>{item}</Radio>
        })}
      </RadioGroup>
    );
  }
}

//单选按钮
class Inputs extends React.Component {
  state = {
    value: '完全匹配',
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    const detail = this.props.detail;
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        {detail.map((item,index)=>{          
          return <Radio value={item} key={index}>{item}</Radio>
        })}
      </RadioGroup>
    );
  }
}

//select选择器
class Selects extends React.Component{
  render(){
    const detail = this.props.detail;
    return (
      <div>
        {detail.map((item,index)=>{
          return (
            <Select placeholder={item[0]} key={index} className={styles.select}>
              {item.map((op,i)=>{
                return <Option value={op} key={i}>{op}</Option>
              })}
            </Select>
          )
        })}
      </div>
    )
  }
}


class Job extends React.Component{
  handleClick(){
    window.history.go(-1);
  }
  render (){
    console.log(window.location.hash)
    return (
      <div>
        <Row>
          <Col className={styles["left-content"]} span={12} >
            <div className={styles["title-tips"]}>表格匹配</div> 
            <Form>
              {info.map((form,index)=>{
                  var dom = '';
                  switch (form.type){
                    case 'input':
                      dom = <Input placeholder={'请输入'+form.title} key={index}/>
                      break;
                    case 'radio':
                      const children = form.children;
                      dom = <Radios detail={children} key={index}/>
                      break;
                    default:
                      const childrens = form.children;                    
                      dom = <Selects detail={childrens} key={index} />
                      break;
                  }
                  return (
                    <FormItem
                      label={form.title}
                      key={index}
                      labelCol={{ span: 4 }}
                      wrapperCol={{ span: 12 }}
                    > 
                      {dom}
                      
                    </FormItem>
                  )
              })}
            </Form>
            <div className={styles.btn}><Button type="primary" ><Link to='/task-map'>下一步</Link></Button><Button onClick={this.handleClick}>返回</Button></div>
          </Col>
          <Col className={styles["right-content"]} span={12}>
            <div className={styles["title-tips"]}>对应公告</div> 
            <div className={styles["pdf"]}>
              <MyPdfViewer style={{width:"100%"}}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

Job.propTypes = {
};
export default Job;
*/






