// let http = require("http")

// let server = http.createServer((req,res)=>{
//     res.end("this is server site")

// })

// server.listen(8000,'localhost',()=>{
//     console.log('server is running on localhost 8000');

// })

let http = require("http");
let url = require('url')

let server = http.createServer((req, res) => {
    const data = url.parse(req.url,true).query
    console.log(data.name);
    console.log(data.salary);
    
  // res.end('this is server')
  if (req.url == "/") {
    res.end("<h1>this is / running </h1>");
  } else if (req.url == "/about") res.end("this is about page");
  else if (req.url == "/contact") res.end("this is contact page");
  else if (req.url == "/details") res.end("this is details page");
  else if (req.url == "/shop") res.end("this is shop page");
  else if (req.url == "/product") res.end("this is product page");
  else{
    res.writeHead(404)
    res.end('404 page not found')
  }
});

server.listen(8000, "localhost", () => {
  console.log("running on 8000");
});
