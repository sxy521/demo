const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, '成绩.txt'),'utf8',(err,dataStr) => {
    if(err) return console.log('文件读取失败' + err.message);
    // console.log(dataStr);
    let arr = dataStr.split(' ');
    // console.log(arr);
    let newArr =[];
    arr.forEach(item => {
        if(item.length > 0){
            let newScoer = item.replace('=',':');
            newArr.push(newScoer)
            // console.log(newScoer);
        }
    });
    fs.writeFile(path.join(__dirname, "成绩02.txt"),newArr.join('\n'),err =>{
        if(err) return console.log('文件写入失败',err.message);
        console.log('成绩处理成功');
        
    })
    
    
})