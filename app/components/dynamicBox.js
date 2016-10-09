import React from 'react';
import '../../resource/dynamic.css';
import SearchbarBox from './SearchbarBox';

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
                <SearchbarBox />
                this is dynamic!
            </div>
        )
    }
}
export default DynamicBox;