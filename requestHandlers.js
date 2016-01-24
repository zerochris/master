var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

function start(response) {
	console.log("Request handler 'start' was called.");
	fs.readFile("./index.html", function(err, html){
		if(err){
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "\n");
			response.end();	
		}
		else{
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(html);
			response.end();
		}
	});
}


function show(response) {
  console.log("Request handler 'show' was called.");
  fs.readFile("./img/test.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.show = show;