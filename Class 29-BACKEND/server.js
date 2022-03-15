var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' :'text/plain'});
    res.end('Hello node world')
}).listen(process.env.PORT || 8650, function(){
    console.log("App is running in port 8650")
} )