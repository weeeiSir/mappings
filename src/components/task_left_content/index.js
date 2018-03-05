import React , { Component } from 'react';
import {Row, Col } from 'antd';
import Table, { Tb } from '../task_table/index';
import styles from './index.less';
class Left extends Component{
    render (){
        return (
            <div className={styles.task_left}>
                <Row className={styles.left_cj}>
                    <Col span={6}>                    
                        <img src='./image/cj01.png' alt='合并表格'/>
                        <span>合并表格</span>
                    </Col>
                    <Col span={6}>
                        <img src='./image/cj02.png' alt='拆分表格'/>                    
                        <span>拆分表格</span>
                    </Col>
                    <Col span={6}>
                        <img src='./image/cj03.png' alt='删除表格'/>                    
                        <span>删除表格</span>
                    </Col>
                    <Col span={6}>
                        <img src='./image/cj04.png' alt='更多'/>                    
                        <span>更多</span>
                    </Col>
                </Row>  
                <h3>前十名股东持股情况</h3>       
                <Table /> 
                <Tb />
            </div>
        )
    }
}

export default Left;