import React from 'react';

//引入组件
import HeaderComponent from './headerBox.js';
import NavComponent from './navBox.js';
import MessageComponent from './messageBox.js';
import TelComponent from './telBox.js';
import ContactsComponent from './contactsBox.js';
import DynamicComponent from './dynamicBox.js';


class MainBox extends React.Component{
    constructor(...props){
        super(...props);
        this.state={
            currentId:1
        }
    }
    render(){
        return (
            <div className='main-box'>
                <HeaderComponent name="此去经年" img='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3325580371,3743937507&fm=80'/>
                <MessageComponent />
                <TelComponent />
                <ContactsComponent />
                <DynamicComponent />
                <NavComponent />
            </div>
        )

    }
}
export default MainBox;

