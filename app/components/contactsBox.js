import React from 'react';
import '../../resource/contacts.css';

import SearchbarBox from './SearchbarBox';

class ContactsBox extends React.Component{
    constructor(...props){
        super(...props);
        this.state={
           nowState:this.props.changeState
        }
    }
    render(){
        let nowState=this.state.nowState();
        let boxName=nowState.currentId==this.props.currentId?'contacts-box':'contacts-box hide'
        return (
            <div className={boxName} >
                <SearchbarBox  openSearch={this.props.openSearch} beforeSearchId={this.props.currentId} />
                this is contacts!
                你好啊
            </div>         
        );

    }
}
 
export default ContactsBox;














