/*
 * @FilePath: \Vue-Study-eaxmples\Ajax\11-14.案例_天气预报\js\index.js
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-03-26 15:11:01
 * @email: 2742514076@qq.com
 */
/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */

// 获取天气信息函数
function getWeather(citycode){
    
    myAxios({
        url:"https://hmajax.itheima.net/api/weather",
        params:{
            city:citycode
        }
    }).then(result =>{
        const weather = result
        // console.log(weather)
        const wobj = result.data
        // console.log(wobj)
        // console.log(wobj.dayForecast)
        
        const app = new Vue({
            el:"#app",
            data: {
                wobj : wobj,
                todayWeather : wobj.todayWeather,
                forecastWeather : wobj.dayForecast,
                searchValue : "",
                citylist : []
            },
            methods:{
                search(){
                    // console.log(this.searchValue)  
                    myAxios({
                        url:"https://hmajax.itheima.net/api/weather/city",
                        params:{
                            city:this.searchValue
                        }
                    }).then(result =>{
                        console.log(result.data)
                        this.citylist = result.data
                        console.log(this.citylist)
                    })
                }
            }
        })
    }).catch(err =>{
        new Error("请求错误")
    });
}
getWeather("110100")

// console.log(document.querySelector(".search-city"));
// document.querySelector(".search-city").addEventListener("click",()=>{
//     console.log("hello world")
// })
// console.log(document.querySelector(".search-city"))

// const app = new Vue({
//     el:"#app",
//     data: {
//         wobj : wobj,
//         todayWeather : wobj.todayWeather,
//         forecastWeather : wobj.dayForecast
//     }
// })
