fetch('https://jsonplaceholder.typicode.com/photos')
// text 화
.then(response=> response.text())
// 받을 화일을 for in 문 결과를 내보내기
.then(result => {
    // console.log(result)
    const level = JSON.parse(result);
    // console.log(level)
    const basic = level.filter(item=>
    item.albumId===1)
    // console.log(basic)

    for(let i of basic){
        document.write(
            `
            <figure>
            <img src="${i.thumbnailUrl}" alt:${i.title}">
            <figcaption>
            ${i.title}
            </figcaption>
            </figure>
            `
        )
    }
}
)






