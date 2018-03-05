import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import styles from './index.less';
const FormItem = Form.Item;

let uuid = 0;
class DynamicFieldSet extends React.Component {
    remove = (k) => {
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }
  
      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k),
      });
    }
  
    add = () => {
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      const nextKeys = keys.concat(uuid);
      uuid++;
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys,
      });
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    render() {
      const { getFieldDecorator, getFieldValue } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      };
      const formItemLayoutWithOutLabel = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      };
      getFieldDecorator('keys', { initialValue: [] });
      const keys = getFieldValue('keys');
      const formItems = keys.map((k, index) => {
        return (            
          <FormItem
            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
            label={index === 0 ? '指标集合' : ''}
            required={false}
            key={k}
          >
            {getFieldDecorator(`names[${k}]`, {
              validateTrigger: ['onChange', 'onBlur'],
              rules: [{
                required: true,
                whitespace: true,
                message: "请删除或输入相关信息",
              }],
            })(
              <Input placeholder="请输入相关信息" style={{ width: '60%', marginRight: 8 }} />
            )}
            {keys.length > 1 ? (
              <span className="icons">
                  <Icon type="plus" onClick={this.add}/>
                  <Icon
                    className={ styles.delete_button }
                    type="minus"
                    disabled={keys.length === 1}
                    onClick={() => this.remove(k)}
                  />
              </span>
            ) : null}
          </FormItem>
        );
      });
      return (
        <Form onSubmit={this.handleSubmit}>
          {formItems}
          <FormItem {...formItemLayoutWithOutLabel}>
            <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
              <Icon type="plus" /> Add field
            </Button>
          </FormItem>
          <FormItem {...formItemLayoutWithOutLabel}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      );
    }
  }

const Froms = Form.create()(DynamicFieldSet);
export default Froms;