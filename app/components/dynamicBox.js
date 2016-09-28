import React from 'react';
import '../../resource/dynamic.css';


class DynamicBox extends React.Component{
    constructor(...props){
        super(...props);
    }

    render(){
        return(
            <div className='dynamic-box'>
                this is dynamic!
            </div>
        )
    }
}


export default DynamicBox;