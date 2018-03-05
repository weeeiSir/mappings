import React ,{ Component } from 'react';


import TableDragSelect  from 'react-table-drag-select';
import { Table } from 'antd';
import contextMenu from '../contextmenu/index';

import "react-table-drag-select/style.css";
import styles from './index.less';

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
  title: '股东名称',
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
  title: '股东性质',
  dataIndex: 'age',
  render: renderContent,
}, {
  title: '持股比例',
//   colSpan: 2,
  dataIndex: 'tel',
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 2) {
      obj.props.rowSpan = 2;
    }
    // These two are merged into above cell
    if (index === 3) {
      obj.props.rowSpan = 0;
    }
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    if(index === 5){
      obj.props.colSpan = 0;
    }
    return obj;
  },
}, {
  title: '持股数量',
//   colSpan: 0,
  dataIndex: 'phone',
  render: renderContent,
}, {
  title: '股份状态',
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

class Options extends Component{
  render(){
    return (<ul className={styles.setType}>
      <li>批量设为指标</li>
      <li>批量搜索目标</li>
      <li>批量链接目标</li>
    </ul>)
  }
}





class Tables extends Component{
    handel = (e) =>{
      console.log(e.key);

    }
    render(){      
      return <Table columns={columns} dataSource={data} bordered pagination={false} onRow={(e)=>{this.handel(e)}} ><contextMenu /></Table>
    }
}
export default Tables;

export class Tb extends React.Component {
  state = {
    cells: [
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false]
    ]
  };
 handel = (e) =>{
   const target = e.target
   console.log(target.value,target.offsetLeft,target.offsetTop,target.width);
 }
  render = () =>
    <TableDragSelect
      value={this.state.cells}
      onChange={cells => this.setState({ cells })} 
      onClick={this.handel}     
    >     
      <tr>
        <td>213</td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td>ewr</td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td>erg</td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td>fdg</td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td>345</td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td>768</td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td>456</td><td></td><td></td><td></td><td></td><td></td>
      </tr>
    </TableDragSelect>;
}

