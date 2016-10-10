//var React = require('react');
import React from 'react';
import '../../resource/tel.css'

import SearchbarBox from './SearchbarBox';

class ProductBox extends React.Component{
    constructor(...props){
      super(...props);
        this.state={
            nowState:this.props.changeState
        }
    }
    render() {
      let nowState=this.state.nowState();
      let boxName=nowState.currentId==this.props.currentId?'tel-box':'tel-box hide'
      return (
        <div className={boxName}>
        <SearchbarBox openSearch={this.props.openSearch} beforeSearchId={this.props.currentId} />
          this is TelBox!
        </div>
      );
    }
}

export default ProductBox;