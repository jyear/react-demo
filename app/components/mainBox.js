import React from 'react';

//引入组件
import HeaderComponent from './headerBox.js';
import NavComponent from './navBox.js';
import MessageComponent from './messageBox.js';
import TelComponent from './telBox.js';
import ContactsComponent from './contactsBox.js';
import DynamicComponent from './dynamicBox.js';
import SearchPageBoxComponent from './searchpageBox.js';

class MainBox extends React.Component{
    constructor(...props){
        super(...props);
        this.state={
            currentId:1,
            name:'消息',
            searchPage:false,
            type:{
                Message:1,
                Tel:2,
                Contacts:3,
                Dynamic:4,
                SearchPage:5
            },
            searchBefore:3           
        }
    }
    changeMenu(e){
        var _target=e.target.className.indexOf('nav-item')==-1?e.target.parentNode:e.target;
        var _key=_target.getAttribute("data-key");
        var _name=_target.getAttribute("data-name");
        this.setState({
            currentId:_key,
            name:_name
        });
    }
    changeState(){
        return this.state;
    }
    //搜索窗口相关
    closeSearch(e){
        let _target=e.target;
        let _id=_target.getAttribute("data-before");
        this.setState({
            currentId:_id,
            searchPage:false
        });
    }
    openSearch(e){
        let _target=e.target;
        let _id=_target.getAttribute("data-before");
        this.setState({
            searchBefore:_id,
            searchPage:true
        });
    }
    //渲染
    render(){
        return (
            <div className='main-box'>
                <HeaderComponent name={this.state.name} changeState={this.changeState.bind(this)} img='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3325580371,3743937507&fm=80'/>
                <MessageComponent currentId={this.state.type.Message} openSearch={this.openSearch.bind(this)}  changeState={this.changeState.bind(this)} />
                <TelComponent currentId={this.state.type.Tel} openSearch={this.openSearch.bind(this)} changeState={this.changeState.bind(this)} />
                <ContactsComponent currentId={this.state.type.Contacts} openSearch={this.openSearch.bind(this)} changeState={this.changeState.bind(this)} />
                <DynamicComponent currentId={this.state.type.Dynamic} openSearch={this.openSearch.bind(this)} changeState={this.changeState.bind(this)} />
                <SearchPageBoxComponent changeState={this.changeState.bind(this)} closeSearch={this.closeSearch.bind(this)} />
                <NavComponent changeMenu={this.changeMenu.bind(this)} changeState={this.changeState.bind(this)} />              
            </div>
        )

    }
}
export default MainBox;

