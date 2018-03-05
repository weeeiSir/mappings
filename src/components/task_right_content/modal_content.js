import React from 'react';
import { Tabs, Checkbox } from 'antd';
import { Table1, Table2 } from './modal_content_table';
const TabPane = Tabs.TabPane;
class Checkboxs extends React.Component {
  render(){
    return <Checkbox value="Tab 1">"Tab 1"</Checkbox>
  }
}
export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition='left'
          style={{ height: 220 }}          
        >
          <TabPane tab="Tab 1" key="1"><Table1 /></TabPane>
          <TabPane tab="Tab 2" key="2"><Table2 /></TabPane>
        </Tabs>
      </div>
    );
  }
}
