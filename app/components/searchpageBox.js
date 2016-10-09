import React from 'react';
import '../../resource/searchpage.css';

class SearchPageBox extends React.Component{
    constructor(...props){
        super(...props);
        this.state={
            nowState:this.props.changeState
        };
    }
    render(){
        let nowState=this.state.nowState();
        let boxName=nowState.currentId==this.props.currentId?'search-page':'search-page hide';
        return (
            <div className={boxName}>
                <div className='search-top'>
                    <input className='search-txt' type='search' placeholder='搜索' />
                    <button className='search-cancel'>取消</button>
                </div>
                <div className='search-result'>
                    
                </div>
            </div>
        )
    }
}

export default SearchPageBox;

