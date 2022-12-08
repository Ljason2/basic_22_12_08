fetch('https://jsonplaceholder.typicode.com/todos/1').
// text(): string,jsone() : promise 만들기 ->파싱에러
then(response=>response.text()).
then(result => {console.log(result)})