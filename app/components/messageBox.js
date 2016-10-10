import React from 'react';
import '../../resource/message.css';

import $ from '../../util/ajax.js'

import SearchbarBox from './SearchbarBox';

class MessageBox extends React.Component{
    constructor(...props){
        super(...props);
        this.state={
            nowState:this.props.changeState, 
            message:[]       
        }
    }  
    componentDidMount(){
        let that=this;
        $.getJson('./message.json').then((data)=>{
            var parsedata=JSON.parse(data).value;
            that.setState({
                message:parsedata
            })
            return data;
        });              
    }

    render(){
        let that=this;
        let message=this.state.message;
        let nowState=this.state.nowState();
        let boxName=nowState.currentId==this.props.currentId?'message-box':'message-box hide';
        return (
            <div className={boxName}>
                <SearchbarBox openSearch={this.props.openSearch} beforeSearchId={this.props.currentId}/>
                {   
                    
                    message.map((item)=>{
                        if(item.number){
                            item.number=item.number>99?'99':item.number;
                            var numName=item.number<=0?'message-num hide':'message-num';
                        }else{
                            var numName='message-num hide';
                        }
                        return (
                            <div className='message-item' key={item.id}>
                                <div className='message-header'>
                                    <img className='message-img' src={item.img} />
                                </div>
                                <div className='message-content'>
                                    <div className='message-name'>{item.name}</div>
                                    <div className='message-txt'>{item.txt}</div>
                                </div> 
                                <div className='message-info'>
                                    <div className='message-time'>{item.time}</div>
                                    <div className={numName}>{item.number}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}


export default MessageBox;