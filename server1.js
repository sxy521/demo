const http = require('http');
const server = http.createServer();
//为服务器创建监听事件
server.on('request',function(req,res){
    res.writeHeader(200,{
        'Content-Type':'text/plain; charset=utf-8'
    })
    res.end('咦哈哈哈');
})
//监听设置ip 端口
server.listen(3001,'127.0.0.1',function(){
    console.log('server is running http://127.0.0.1:3001');
    
})