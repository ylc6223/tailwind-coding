import { add } from './modules/math'
import { max } from './modules/utils'
console.log(add(8, 18));
console.log(max(8, 3));

function component() {
    const element = document.createElement('div');
    
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    //_.join 将 array 中的所有元素转换为由 separator 分隔的字符串。 _.join(array, [separator=','])
    //_.join(['a', 'b', 'c'], '~');
    // // => 'a~b~c'
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    return element;
}

document.body.appendChild(component());
console.log('today,the weather is goods')
console.log('new features分支做了改动')
