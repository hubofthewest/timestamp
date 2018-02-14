// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var fullMonth = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:date", function (request, response) {
  var input = natural(request.params.date);
  response.send(input);
});

function natural(stamp){
  isNaN(stamp) || (stamp *= 1000);
  var date = new Date(stamp);  
  var month = fullMonth[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  var natural =`${month} ${day}, ${year}`;  
  var unix = (date.getTime()/1000).toString();
!isNaN(unix)|| (unix = natural = null);
return {"unix":unix,"natural":natural}; 
}

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
