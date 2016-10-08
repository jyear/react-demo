import React from 'react';
import '../../resource/message.css';


class MessageBox extends React.Component{
    constructor(...props){
        super(...props);
        this.state={
            nowState:this.props.changeState,
            message:[{
                id:1,
                name:'天下三',
                txt:'体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买',
                img:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=4882823172c6a7efa626ae20cdfbafe9/f9dcd100baa1cd11dd1855cebd12c8fcc2ce2db5.jpg',
                time:'10:20',
                number:'25'
            },
            {
                id:2,
                name:'天下三2',
                txt:'体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买',
                img:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=4882823172c6a7efa626ae20cdfbafe9/f9dcd100baa1cd11dd1855cebd12c8fcc2ce2db5.jpg',
                time:'10:23',
                number:'333'
            },
            {
                id:3,
                name:'天下三2',
                txt:'体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买',
                img:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=4882823172c6a7efa626ae20cdfbafe9/f9dcd100baa1cd11dd1855cebd12c8fcc2ce2db5.jpg',
                time:'10:23',
                number:'333'
            },
            {
                id:4,
                name:'天下三2',
                txt:'体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买',
                img:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=4882823172c6a7efa626ae20cdfbafe9/f9dcd100baa1cd11dd1855cebd12c8fcc2ce2db5.jpg',
                time:'10:23',
                number:'333'
            },
            {
                id:5,
                name:'天下三2',
                txt:'体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买',
                img:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=4882823172c6a7efa626ae20cdfbafe9/f9dcd100baa1cd11dd1855cebd12c8fcc2ce2db5.jpg',
                time:'10:23',
                number:'333'
            },
            {
                id:6,
                name:'天下三2',
                txt:'体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买',
                img:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=4882823172c6a7efa626ae20cdfbafe9/f9dcd100baa1cd11dd1855cebd12c8fcc2ce2db5.jpg',
                time:'10:23',
                number:'333'
            },
            {
                id:7,
                name:'天下三2',
                txt:'体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买',
                img:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=4882823172c6a7efa626ae20cdfbafe9/f9dcd100baa1cd11dd1855cebd12c8fcc2ce2db5.jpg',
                time:'10:23',
                number:'333'
            },
            {
                id:8,
                name:'天下三2',
                txt:'体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买',
                img:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=4882823172c6a7efa626ae20cdfbafe9/f9dcd100baa1cd11dd1855cebd12c8fcc2ce2db5.jpg',
                time:'10:23',
                number:'333'
            },
            {
                id:9,
                name:'天下三2',
                txt:'体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买',
                img:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=4882823172c6a7efa626ae20cdfbafe9/f9dcd100baa1cd11dd1855cebd12c8fcc2ce2db5.jpg',
                time:'10:23',
                number:'333'
            },
            {
                id:10,
                name:'天下三222',
                txt:'体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买体验报告,由什么值得买',
                img:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D360/sign=4882823172c6a7efa626ae20cdfbafe9/f9dcd100baa1cd11dd1855cebd12c8fcc2ce2db5.jpg',
                time:'10:23',
                number:'333'
            }]
        }
    }
    
    render(){
        let that=this;
        let message=this.state.message;
        let nowState=this.state.nowState();
        let boxName=nowState.currentId==this.props.currentId?'message-box':'message-box hide'
        return (
            <div className={boxName}>
                {
                    message.map((item)=>{
                        item.number=item.number>99?'99':item.number;
                        return (
                            <div className='message-item' key={item.id}>
                                <div className='message-header'>
                                    <img className='message-img' src={item.img} />
                                </div>
                                <div className='message-content'>
                                    <div className='message-name'>{item.name}</div>
                                    <div className='message-txt'>{item.txt}</div>
                                </div> 
                                <div className='message-info'>
                                    <div className='message-time'>{item.time}</div>
                                    <div className='message-num'>{item.number}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}


export default MessageBox;