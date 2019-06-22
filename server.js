const http = require('http');
const server = http.createServer();
server.on('request',function(req,res){
    res.writeHeader(200,{
        'Content-Type': 'text/plain;charset=utf-8'
    })
    res.end('你好，世界');

})
server.listen(3000,'127.0.0.1',function(){
    console.log("server  running at http://127.0.0.1:3000 ");   
})