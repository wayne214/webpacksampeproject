// 使用ES6语法
import React, {Component} from 'react';
import config from './config.json';
class Greeter extends Component {
    render() {
        return (
            <div>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter;
// var config = require('./config.json');
//
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetingText;
//     return greet;
// };

