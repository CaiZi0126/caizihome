var events = require('events');
var eventEmitter = new events.EventEmitter();

var connecHandler = function connected() {
    console.log('连接成功');
    eventEmitter.emit('data_recevied');
}

eventEmitter.on('connection', connecHandler);
eventEmitter.on('data_recevied', function(){
    console.log('数据接收成功');
});
eventEmitter.emit('connection');
console.log('程序执行完毕');
