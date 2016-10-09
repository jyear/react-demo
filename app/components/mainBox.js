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
            currentId:5,
            name:'消息',
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
        this.setType(_key);
        this.setName(_name);
    }
    setType(key){
        this.setState({
            currentId:key
        });
    }
    setName(name){
        this.setState({
            name:name
        });
    }
    changeState(){
        return this.state;
    }
    render(){
        return (
            <div className='main-box'>
                <HeaderComponent name={this.state.name} changeState={this.changeState.bind(this)} img='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3325580371,3743937507&fm=80'/>
                <MessageComponent currentId={this.state.type.Message} changeState={this.changeState.bind(this)} />
                <TelComponent currentId={this.state.type.Tel} changeState={this.changeState.bind(this)} />
                <ContactsComponent currentId={this.state.type.Contacts} changeState={this.changeState.bind(this)} />
                <DynamicComponent currentId={this.state.type.Dynamic} changeState={this.changeState.bind(this)} />
                <SearchPageBoxComponent currentId={this.state.type.SearchPage} changeState={this.changeState.bind(this)} />
                <NavComponent changeMenu={this.changeMenu.bind(this)} changeState={this.changeState.bind(this)} />              
            </div>
        )

    }
}
export default MainBox;

