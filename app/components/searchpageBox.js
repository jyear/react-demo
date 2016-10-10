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
        let boxName=nowState.searchPage?'search-page show1':'search-page hide1';  
        //设置自动获取焦点 
        if(nowState.searchPage){
            document.querySelector("#searchTxt").focus();
        }  
        return (
            <div className={boxName}>
                <div className='search-container'>
                    <div className='search-top'>
                        <input id="searchTxt"  className='search-txt' type='search' placeholder='搜索' />
                        <button className='search-cancel' onClick={this.props.closeSearch} data-before={nowState.searchBefore}>取消</button>
                    </div>
                    <div className='search-result'>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPageBox;

