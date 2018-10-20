// require axios module
var axios = require('axios');
// get data from the API
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((result)=>{
    // decalre variables
    var response = "";
    var userId = result.data.results[userId].userId;
    var title = result.data.results[userId].title;
    var body = result.data.results[userId].body;
    // store response
    response= `${userId} post title: ${title},: ${body}`;
    // log the response
    console.log(response);
})
// log the error number
.catch((error)=>{console.log(error);});