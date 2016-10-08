import React from 'react';
import '../../resource/contacts.css';


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
            <div className={boxName}>
                this is contacts!
            </div>         
        );

    }
}
 
export default ContactsBox;














