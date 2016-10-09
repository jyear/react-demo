import React from 'react';
import '../../resource/header.css';

class HeaderBox extends React.Component{
    constructor(...props){
        super(...props)       
        this.state={
            img:this.props.img,
            nowState:this.props.changeState
        }
    }


    render(){
        let name=this.state.nowState().name;
        return(
            <div className='header-box'>
                <div className='header-content'>
                    <div className='header-img'>
                        <img src={this.state.img} />
                    </div>
                    <div className='header-txt'>{name}</div>
                    <div className='header-more'>+</div>
                </div>
            </div>
        )
    }
}

export default HeaderBox;