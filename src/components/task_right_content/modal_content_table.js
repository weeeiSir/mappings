import React ,{ Component } from 'react';
import { Table } from 'antd';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [{
  title: '名称',
  dataIndex: 'name',
  render: (text, row, index) => {
    if (index < 4) {
      return <span>{text}</span>;
    }
    return {
      children: <span>{text}</span>,
      props: {
        colSpan: 5,
      },
    };
  },
}, {
  title: '类型',
  dataIndex: 'age',
  render: renderContent,
}, {
  title: '可为空',
  dataIndex: 'tel',
  render: renderContent
}, {
  title: '注释',
//   colSpan: 0,
  dataIndex: 'phone',
  render: renderContent,
}];

const data = [{
  key: '1',
  name: 'com_uni_code',
  age: 'bigint(20)',
  tel: 'not null',
  phone: '公司统一编码',
}, {
  key: '2',
  name: 'com_uni_code',
  age: 'bigint(20)',
  tel: 'not null',
  phone: '公司统一编码',
}, {
  key: '3',
  name: 'com_uni_code',
  age: 'bigint(20)',
  tel: 'not null',
  phone: '公司统一编码',
}, {
  key: '4',
  name: 'com_uni_code',
    age: 'bigint(20)',
tel: 'not null',
phone: '公司统一编码',
}, {
  key: '5',
  name: 'com_uni_code',
  age: 'bigint(20)',
  tel: 'not null',
  phone: '公司统一编码',
}];


const data2 = [{
    key: '1',
    name: 'com_uni_codes',
    age: 'bigint(200)',
    tel: 'null',
    phone: '统一编码',
  }, {
    key: '2',
    name: 'com_uni_codes',
    age: 'bigint(200)',
    tel: 'null',
    phone: '统一编码',
  }, {
    key: '3',
    name: 'com_uni_codes',
    age: 'bigint(200)',
    tel: 'null',
    phone: '统一编码',
  },{
    key: '4',
    name: 'com_uni_codes',
    age: 'bigint(200)',
    tel: 'null',
    phone: '统一编码',
  }];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
export class Table1 extends Component{
    render(){
        return <Table  columns={columns} dataSource={data} pagination={false} bordered={false}/>
    }
}
export class Table2 extends Component{
    render(){
        return <Table  columns={columns} dataSource={data2} pagination={false} bordered={false}/>
    }
}
