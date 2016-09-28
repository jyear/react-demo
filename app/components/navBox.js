import React from 'react';
import '../../resource/nav.css';

class navBox extends React.Component{
    constructor(...props){
        super(...props)
        this.state={
            cur:1,
            navData:[{
                id:1,
                name:'消息',
                infoNum:'22'
            },{
                id:2,
                name:'电话'
            },{
                id:3,
                name:'联系人',
                infoNum:'0'
            },{
                id:4, 
                name:'动态',
                infoNum:'400'
            }]
        };     
        this.changeMenu=this.changeMenu.bind(this);
    }    
    changeMenu(e){   
        var _target=e.target.className.indexOf('nav-item')==-1?e.target.parentNode:e.target;
        var _key=_target.getAttribute("data-key");
        this.setState({
            cur:_key
        });       
        console.log(this.refs.tab)                            
    }   

    render(){
       let items =this.state.navData;
       var that=this;
       return(
           <div className='navbox'>         
             <div className='nav-container' id="navBox" >      
                {
                    items.map((item,index)=>{                                               
                        var cname=item.id==that.state.cur?'nav-item cur':'nav-item';
                        var nname=item.infoNum&&item.infoNum>0?'num':'num hide';
                        var infoNum=item.infoNum>100?'99':item.infoNum;
                        return <div className={cname} data-key={item.id} key={item.id} onClick={this.changeMenu}>{item.name}<i className={nname}>{infoNum}</i></div>
                    })
                }         
             </div>
           </div>
        );
    }
}


export default navBox;















