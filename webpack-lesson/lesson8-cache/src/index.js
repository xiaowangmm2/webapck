import _ from 'lodash';
// import Print from './print';

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.onClick = Print.bind(null, 'Hello webpack!');
    return element;
}

document.body.appendChild(component());
