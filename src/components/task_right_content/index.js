import React , { Component } from 'react';
import {Row, Col } from 'antd';
import Table from '../task_table/rightIndex';
import Modals from './modal.js';

import styles from './index.less';

class Right extends Component{
    render (){
        return (
            <div className={styles.task_right}>
                <Row className={styles.mb_right}>
                    <Col span={12}>
                        <img src='./image/ku.png' alt='目标库'/>
                        <span>目标库</span>
                    </Col>
                    <Col span={12}>
                        <img src='./image/b.png' alt='目标表'/>                        
                        <Modals />
                    </Col>
                </Row>
                <h3>本报告期</h3>
                <Table />
            </div>
        )
    }
}

export default Right;