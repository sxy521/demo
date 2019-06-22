const fs = require('fs');
fs.readFile(__dirname + '/成绩.txt','utf-8',(err,datastr) => {
    if(err) return console.log('读取文件失败' + err.message);
    // console.log(datastr);
    let arr = datastr.split(' ');
    // console.log(arr);
    let newArr = [];
    arr.forEach(item => {
        if(item.length > 0){
            let newScore = item.replace('=',':');
            newArr.push(newScore)
        }
    });
    // console.log(newArr);
    fs.writeFile(__dirname + '/成绩01.txt',newArr.join('\n'),(err) =>{
        if (err) return console.log('写入文件失败' + err.message);
        
        console.log('文件已被保存');
    })
        
})