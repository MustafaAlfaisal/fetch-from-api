// require axios module
var axios = require('axios');
// get data from the API
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((result)=>{
    var response = "";
    var userId = result.data.results[userId].userId;
    var title = result.data.results[userId].title;
    var body = result.data.results[userId].body;
    response= `${userId} post title: ${title},: ${body}`;
    console.log(response);
})
// log the error number
.catch((error)=>{console.log(error);});