const http = require('http')
const server = http.createServer();
server.on('request',function(req,res){
    res.writeHeader(200,{
        'Content-Type':'text/plain; charset=utf-8'
    })
    res.end('哈哈哈')
})
server.listen(3002,'127.0.0.1',function(){
    console.log('server is running http://127.0.0.1:3002');
    
})