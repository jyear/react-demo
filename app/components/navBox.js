import React from 'react';
import '../../resource/nav.css';

class navBox extends React.Component{
    constructor(...props){
        super(...props)
        this.state={
            nowState:this.props.changeState,
            navData:[{
                name:'消息',
                type:'Message',
                infoNum:'22'
            },{
                type:'Tel',
                name:'电话',
                infoNum:'22'
            },{
                name:'联系人',
                type:'Contacts',
                infoNum:'0'
            },{
                name:'动态',
                type:'Dynamic',
                infoNum:'400'
            }]       
        };           
        this.changeMenu=this.props.changeMenu;
    }    

    render(){
       let items =this.state.navData;
       let that=this;
       let nowState=this.state.nowState();            
       return(
           <div className='navbox'>         
             <div className='nav-container' id="navBox" >      
                {
                    items.map((item,index)=>{                                       
                        var cname=nowState.type[item.type]==nowState.currentId?'nav-item cur':'nav-item';
                        var nname=item.infoNum&&item.infoNum>0?'num':'num hide';
                        var infoNum=item.infoNum>100?'99':item.infoNum;
                        return <div className={cname} style={{order:nowState.type[item.type]}} data-key={nowState.type[item.type]} key={nowState.type[item.type]} onClick={that.changeMenu} data-name={item.name}>{item.name}<i className={nname}>{infoNum}</i></div>
                    })
                }         
             </div>
           </div>
        );
    }
}


export default navBox;















