// create new instance for the http request
var request = new XMLHttpRequest();
// open request to send the it
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// after loading the request from the server do function
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
    // if there is a respones print the posts to the console
  if (request.status >= 200 && request.status < 400) {
    data.forEach(post => {
      console.log(post.title);
      console.log(post.body);
    });
    // print error
  } else {
    console.log('error');
  }
}
// sent the request to the server
request.send();