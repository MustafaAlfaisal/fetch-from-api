var axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
.then((result)=>{
    var response = "";
    var userId = result.data.results[0].userId;
    var title = result.data.results[0].title;
    var body = result.data.results[0].body;
    response= `${userId} coordinates: ${title}, ${body}`;
    console.log(response);
})
.catch((error)=>{console.log(error);});