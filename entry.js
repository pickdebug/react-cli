require("./style.css");
document.write('<h1>hello webpack!</h1>');
//新增对module.js 的引用 
document.write(require('./module.js'));