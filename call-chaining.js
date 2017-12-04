//定义一个工厂函数，扩展其原型
const ProFn = function() {};
ProFn.prototype = {
        who(name) {
            console.log(name)
            return this
        },
        doWhat(thing) {
            console.log(thing)
            return this
        }
    }
    //使用方法
const myfn = new ProFn();
myfn.who('me').doWhat('do you');