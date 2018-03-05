import React, { Component }from 'react';
import { Icon,Switch } from 'antd';
import styles from './index.less';
// function onChange(checked) {
//     console.log(`switch to ${checked}`);
// }

class Tools extends Component{
    state = {
        hash : '/task-map'
    }
    onChange = ()=> {
        console.log(1233)
    }
    back = ()=>{
        // const hash = window.location.hash;
        // const exit = hash.indexOf('map')==-1?false:true;
        // if(exit){
        //     this.setState({
        //         hash : '/task'
        //     })
        // }
        window.history.go(-1);
    }
    click(){
        alert(12324324)
    }
    contextMenu(e){
        console.log(e.which)
        if(e.which===3){
            console.log(12122)
            return false;
        }else{
            alert('不是右键动作')
        }
    }
    render(){
        return(
            <div className={styles.title} onContextMenu={this.contextMenu}>
                <div className={styles.back} onClick={this.back}>
                    <Icon type="left" /><span>返回</span>               
                </div>
                <ul visible="false ">
                    <li><Icon type="search" /><Icon type="plus" /><input type="text" value="100%" className={styles.ipt}/><Icon type="minus" /></li>
                    <li>隐藏已匹配<Switch  size="small" defaultChecked></Switch></li>
                    <li onClick={this.click}><img src='./data/image/c01.png' alt="撤销"/>撤销</li>
                    <li><img src='./data/image/c02.png' alt="重做"/>重做</li>
                    <li><Icon type="delete" />删除</li>
                    <li><Icon type="save" />保存</li>                    
                </ul>               

            </div>
        )
    }
}
export default Tools;