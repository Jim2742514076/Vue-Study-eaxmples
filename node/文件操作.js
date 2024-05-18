/*
 * @FilePath: \Vue-Study-eaxmples\node\文件操作.js
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-05-18 09:53:46
 * @email: 2742514076@qq.com
 */




const fs = require("fs")

fs.writeFile("./test.txt", "hello world", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("写入成功")
    }
})
fs.readFile("./test.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
