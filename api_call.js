console.log("api calling ")
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response=>response.json())
.then(apiData=>console.log(apiData))
.catch(err=>console.log(err))


console.log('api calling 2')
console.log('photos')

fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))

console.log("api calling 3")
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(apiData=>console.log(apiData))
.catch(err=>console.log(err))