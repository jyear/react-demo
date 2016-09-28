// var React = require('react');
// var ReactDom = require('react-dom');

import React from 'react';
import '../resource/base.css'
import { render } from 'react-dom';
//引入组件
import MainComponent from './components/mainBox.js';





render(  
    <div>
        <MainComponent />
    </div>
    , 
    document.getElementById('content')
    );

