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
  title: '目标字段',
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
  title: '描述',
  dataIndex: 'age',
  render: renderContent,
}, {
  title: '类型',
  dataIndex: 'tel',
  render: renderContent
}, {
  title: '来源字段',
//   colSpan: 0,
  dataIndex: 'phone',
  render: renderContent,
}, {
  title: '值',
  dataIndex: 'address',
  render: renderContent,
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'London No. 2 Lake Park',
}, {
  key: '5',
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Dublin No. 2 Lake Park',
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
class Tables extends Component{
    render(){
        return <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered pagination={false}/>
    }
}

export default Tables;

