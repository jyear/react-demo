import React from 'react';
import '../../resource/dynamic.css';


class DynamicBox extends React.Component{
    constructor(...props){
        super(...props);
        this.state={
            nowState:this.props.changeState
        }
    }
    render(){
        let nowState=this.state.nowState();
        let boxName=nowState.currentId==this.props.currentId?'dynamic-box':'dynamic-box hide'
        return(
            <div className={boxName}>
                this is dynamic!
            </div>
        )
    }
}
export default DynamicBox;