fetch('https://jsonplaceholder.typicode.com/todos')
// text 화
.then(response=> response.text())
// 받을 화일을 for in 문 결과를 내보내기
.then(result => {
    // console.log(result)
    const level = JSON.parse(result);
    // console.log(level)
    const basic = level.filter((item)=>
    item.userId===4)
    // console.log(basic)

    for(let i in basic){
        document.write(
            `
            ${basic[i].id} : ${basic[i].title}<br>
            `
        )
    }
}
)






