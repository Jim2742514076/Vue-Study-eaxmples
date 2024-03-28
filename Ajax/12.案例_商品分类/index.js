

let first = []
let second = []


axios({
    url:"https://hmajax.itheima.net/api/category/top"
}).then(result => {
    first =   result.data.data
    // console.log(first)
    second = first.map(item =>{
        return axios({
            url:"https://hmajax.itheima.net/api/category/sub",
            params:{
                id:item.id
            }
        })
    })
    // console.log(second)
    return Promise.all(second)
}).then(result => {
    console.log(result)
    // second = result
    const htmlstr = result.map(item =>{
    return    `
    <div class="item">
    <h3>${item.data.data.name}</h3>
    <ul>
    ${item.data.data.children.map(item =>{
        return `<li>
        <a href="javascript:;">
          <img src=${item.picture} />
          <p>${item.name}</p>
        </a>
      </li>`
    }).join("")}
    </ul>
  </div>
</div>`
    }).join("")
    document.querySelector(".sub-list").innerHTML = htmlstr
})
// console.log(first)
