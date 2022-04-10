/** @format */

//Create a server

const http = require('http');
const { sensitiveHeaders } = require('http2');

const server = http.createServer((req, res) => {
  console.log('Muje Ninda Nai Ati');
  console.log(req.method, req.url);
  res.setHeader('Content-Type', 'text/html');

  if (req.method === 'POST') {
    let body = '';

    req.on('end', () => {
      const userName = body.split('=')[1];
      res.end('<h1>' + userName + ' </h1>');
    });

    req.on('data', (chunk) => {
      // register event
      body += chunk;
      console.log(body);
    });
  } else {
    res.end(
      '<form method = "POST"><input type = "text" name ="username"/><button type="submit">Create User</button></form>'
    );
  }

  //   res.end('<h1>Success !! </h1>');
});

server.listen(2000);

/**
 * /*
 * A host environment for javascript
 * Allows you to run Javascript outside the broswer
 * Adds new API (eg - Filesystem) but drops others (eg DOM API) eg alert(messge) - node has no capacity to open a browser and run it .
 *require tells js to import some thing form a path or some element from it core module
 * @format
 
// ----------------------
 const fs = require('fs')
 const userName = 'Akhil';

 fs.writeFile('user-data.txt', `Name is ${userName} `, (err)=>{
     if(err){
         console.log(err);
         return;

     }
     console.log('Wrote File')
 })

//  -------------------------

//res.end because it will be on and keep sending req
res.end('<h1>Success ! <h1>') browser will understand and render this but to control it and type extensions we will need our content header set 
res.setHeader('content-Type' , 'text/plain');


express - framework for nodejs
making buildig web apps (server) with nodejs much easier
middleware focused

*/
