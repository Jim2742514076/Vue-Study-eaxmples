/*
 * @FilePath: \Vue-Study-eaxmples\Ajax\02.案例_图书管理\js\index_vue.js
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-03-25 15:13:54
 * @email: 2742514076@qq.com
 */

const creator = "jim"

function getData() {
    const bodyapp = new Vue({
        el : "#bodyapp",
        data:{
            bookList : axios({
                url : "https://hmajax.itheima.net/api/books",
                method : "GET",
                params : {
                    creator : creator
                }
            }).then(
                result => {
                    return result.data.data
                }
            )
        }
    
    
    
    
    
    })
}
getData()
