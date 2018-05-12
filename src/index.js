

// 入口文件

// console.log('hello,node')

const path = require('path');
// console.log('__dirname',__dirname)
// const objectPath = path.join(__dirname, '/demo/index.js');
// const objectPath = path.join('/foo', 'bar', 'baz/asdf', 'quux','../..') 
// console.log('objectPath', objectPath);

// console.log('resolve', path.resolve('foo/demo','/src/hello','./me'))
// console.log('resolve', path.resolve(__dirname,'foo/demo','./src/hello','./me'))

// glob的使用
const glob = require('glob');

// glob(path.join(__dirname, 'js/*.js'), function(err, files){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(files)
//     }    
// })

// 获取匹配字符串
function getFileName(path, pattern){   
    const res = path.match(pattern);
    if(res){
        return res[1]
    }
    return ''
}

const obj = {};
const fileList = glob.sync(path.join(__dirname, 'js/*.js'))
fileList.forEach(function(v){
    
    obj[getFileName(v, /([^\/]+)\.js/)] = require(v);
})
console.log('obj', obj)
console.log('fileList', fileList)

// 正则实现替换

// var str = 'http://www.baidu.com/abc/:id/demo/:foo/:hh?name=123'
// // 抽取id foo

// function compileUrlParams(path, options){
//     const pattern = /(:[^\/\?]+)/g;
//     let url = path.replace(pattern, function(result, $1){
//         return  options.params[$1.slice(1)]?options.params[$1.slice(1)]:$1
//     })
//     if(pattern.test(url)){
//         // console.log('params还有未匹配的项目')
//         throw new Error('params还有未匹配的项目')
//     }
//     return url
// }

// console.log(compileUrlParams(str, {
//     params: {
//         id: 'id123',
//         foo: 'foo456'
//     }
// }))