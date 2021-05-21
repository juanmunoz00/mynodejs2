var http = require('http'); // Declare the variable for the server environment

/* Server environment */
http.createServer( 
    function(req, res){ //Define the request and the response
        res.writeHead(200, {'Content-type': 'text/plain'});//Respond a 200 (scucess) and the content, which is plain text
        res.end('Hello world!')//End of the request so browser won't get stalled waiting for response.
    }
).listen(3000, '127.0.0.1');//Listening port 3000 of the localhost.
/* End of server environment */
console.log('Server listening at http://localhost:3000');