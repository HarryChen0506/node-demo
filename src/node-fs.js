
// fs 模块使用

const fs = require('fs');
const path = require('path');
const util = require('util');

// 异步方式
// fs.readFile(path.resolve(__dirname, '../package.json'), 'utf-8', function(err, data){
//     if(err){
//         console.log(err)
//     }else {
//         console.log(data)
//         console.log(JSON.parse(data))
//     }
// })

// 同步方式
// const data = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8');
// console.log(data)

const readFile = util.promisify(fs.readFile);

// readFile(path.resolve(__dirname, '../package.json'), 'utf-8').then(function(data){
//     console.log('data',data, typeof data)
// })

// async await包装
async function init(){
    const data = await readFile(path.resolve(__dirname, '../package.json'), 'utf-8');
    console.log(typeof data, data)
}

init()