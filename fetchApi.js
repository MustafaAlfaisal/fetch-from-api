//call the fetch function
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())//response type
.then(data => console.log(data)); //log the data;