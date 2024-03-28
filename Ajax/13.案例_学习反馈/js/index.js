/*
 * @FilePath: \Vue-Study-eaxmples\Ajax\13.案例_学习反馈\js\index.js
 * @Software: vscode
 * @Author: 万锦
 * @Date: 2024-03-28 16:42:57
 * @email: 2742514076@qq.com
 */
/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */


// 三级联动

axios({
    url:"https://hmajax.itheima.net/api/province"
}).then(result =>{
    // console.log(result.data.list)
    const pname = result.data.list
    const pstr = pname.map(item => {
        return `<option value="${item}">${item}</option>`
    }).join("")
    document.querySelector(".province").innerHTML = '<option value="">省份</option>'+pstr
})

document.querySelector(".province").addEventListener("change",async e =>{
    // console.log(e.target.value)
    const pname = e.target.value
    const cname = await axios({
        url:"https://hmajax.itheima.net/api/city",
        params : {pname}
    })
    // console.log(cname.data.list)
    const cstr = cname.data.list.map(item =>{
        return `<option value="${item}">${item}</option>`
    }).join("")
    document.querySelector(".city").innerHTML = '<option value="">城市</option>'+cstr

    document.querySelector(".area").innerHTML = '<option value="">地区</option>'

})

document.querySelector(".city").addEventListener("change",async e =>{
    // console.log(e.target.value)
    const pname = document.querySelector(".province").value
    const cname = document.querySelector(".city").value
    const area = await axios({
        url:"https://hmajax.itheima.net/api/area",
        params : {pname,cname}
    })
    // console.log(area.data.list)
    const cstr = area.data.list.map(item =>{
        return `<option value="${item}">${item}</option>`
    }).join("")
    document.querySelector(".area").innerHTML = '<option value="">地区</option>'+cstr
})


// 表单提交
document.querySelector(".submit").addEventListener("click",async e =>{
    const form = document.querySelector(".info-form")
    const data = serialize(form, { hash: true, empty: true })
    // console.log(data)
    try{
        const result = await axios({
        url :"https://hmajax.itheima.net/api/feedback",
        method : "POST",
        data
    })
    } catch(error){
        // alert(error.message)
        // console.dir(error)
        alert(error.response.data.message)
    }
    
})