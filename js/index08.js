fetch('https://jsonplaceholder.typicode.com/users')
.then( response => response.text())
.then(result => {
    const users=JSON.parse(result)
    // console.log(users)
    return users[1]
})
.then(users =>{
    const {address}=users
    // console.log(address);
    return address;
})
.then(
    address =>{
        const {geo}=address;
        // console.log(geo)
        return geo
    }
)
.then(
    geo=>{
    const {lat}=geo;
        // console.log(lat)
}
)
