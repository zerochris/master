var express = require('express');
var app = express();
var http = require('http');
var fh = require('./readContent.js');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.get('/getVerseContent', function(req,res){
	res.writeHead(200, {'content-type': 'text/json' });
	if(req.query.lang == "cn"){
		res.write( JSON.stringify(fh.getVerseContent('./files/verse_CN.txt')));
	}
	else{
		res.write( JSON.stringify(fh.getVerseContent('./files/verse_EN.txt')));
	}
	res.end('\n');
});

app.get('/getIntroContent', function(req,res){
	res.writeHead(200, {'content-type': 'text/json' });
	if(req.query.lang == "cn"){
		res.write( JSON.stringify(fh.getIntroContent('./files/intro_CN.txt')));
	}
	else{
		res.write( JSON.stringify(fh.getIntroContent('./files/intro_EN.txt')));
	}
	res.end('\n');
});

app.get('/getServiceContent', function(req,res){
	res.writeHead(200, {'content-type': 'text/json' });
	if(req.query.lang == "cn"){
		res.write( JSON.stringify(fh.getServiceContent('./files/service_CN.txt')));
	}
	else{
		res.write( JSON.stringify(fh.getServiceContent('./files/service_EN.txt')));
	}
	res.end('\n');
});

app.get('/getGalleryContent', function(req,res){
	res.writeHead(200, {'content-type': 'text/json' });
	
	res.write( JSON.stringify(fh.getGalleryContent('./files/gallery.txt')));

	res.end('\n');
});

app.get('/getVideoContent', function(req,res){
	res.writeHead(200, {'content-type': 'text/json' });
	
	res.write( JSON.stringify(fh.getVideoContent('./files/video.txt')));

	res.end('\n');
});

app.get('/getSponsorContent', function(req,res){
	res.writeHead(200, {'content-type': 'text/json' });
	if(req.query.lang == "cn"){
		res.write( JSON.stringify(fh.getSponsorContent('./files/sponsor_CN.txt')));
	}
	else{
		res.write( JSON.stringify(fh.getSponsorContent('./files/sponsor_EN.txt')));
	}
	res.end('\n');
});



app.get('/', function(req,res){
	res.sendFile('/home.html', {root: __dirname});
});

app.get('/home', function(req,res){
	res.sendFile('/home.html', {root:__dirname});
});

app.get('/about', function(req,res){
	
	res.sendFile('/about.html', {root:__dirname});
});

app.get('/services', function(req,res){
	res.sendFile('/services.html', {root:__dirname});
});

app.get('/contact', function(req,res){
	res.sendFile('/contact.html', {root:__dirname});
});

app.get('/partners', function(req,res){
	res.sendFile('/partners.html', {root:__dirname});
});

app.get('/media', function(req,res){
	res.sendFile('/media.html', {root: __dirname});
});


app.use(express.static('public'));

http.createServer(app).listen(app.get('port') ,app.get('ip'), function () {
    console.log("Express server listening at %s:%d ", app.get('ip'),app.get('port'));
});
