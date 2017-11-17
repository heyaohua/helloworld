var http = require("http");  
http.createServer(function(request, response) {    
    response.writeHead(200, {"Content-Type": "text/plain"});    
    response.write("Hello World, 测试");    
    response.end();  
}).listen(4000);  
console.log("nodejs start listen 8888 port!");  
