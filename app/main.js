// const greeter = require('./Greeter');
// document.querySelector("#root").appendChild(greeter());
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css'; // 使用require 导入css文件
render(<Greeter/>, document.getElementById('root'));