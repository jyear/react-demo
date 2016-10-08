import React from 'react';
import '../../resource/header.css';

class HeaderBox extends React.Component{
    constructor(...props){
        super(...props)       
        this.state={
            name:this.props.name,
            img:this.props.img
        }
    }
    render(){
        return(
            <div className='header-box'>
                <div className='header-content'>
                    <div className='header-img'>
                        <img src={this.state.img} />
                    </div>
                    <div className='header-txt'>{this.state.name}</div>
                    <div className='header-more'>+</div>
                </div>
            </div>
        )
    }
}

export default HeaderBox;