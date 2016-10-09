import React from 'react';
import '../../resource/searchbar.css'

class SearchbarBox extends React.Component{
    constructor(...props){
        super(...props);
    }
    render(){
        return (
            <div className='search-box'>
                <div className='search-txt'>搜索</div>
            </div>
        )
    }
}

export default SearchbarBox;