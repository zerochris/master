"use strict";
var fs = require('fs');

exports.getIntroContent = function(dir){
	var content = fs.readFileSync(dir, 'utf-8');
	var res = content.split("#");
	var ret = {};
	for(var key in res){
		ret[key] = res[key];
	}
	return ret;
}

exports.getServiceContent = function(dir){
	var content = fs.readFileSync(dir, 'utf-8');
	var res = content.split("#");
	var ret = [];
	for(var key in res){
		var obj = {}
		obj["content"] = res[key];
		ret.push(obj);
	}
	return ret;
}

exports.getGalleryContent = function(dir){
	var content = fs.readFileSync(dir, 'utf-8');
	var res = content.split("#");
	var ret = [];
	for(var i=0; i<res.length; i+=3){
		var obj = {}
		obj["smallURL"] = res[i];
		obj["bigURL"] = res[i+1];
		obj["title"] = res[i+2];
		ret.push(obj);
	}
	return ret;
}

exports.getVideoContent = function(dir){
	var content = fs.readFileSync(dir, 'utf-8');
	var res = content.split("#");
	var ret = [];
	for(var i=0; i<res.length; i++){
		var obj = {}
		obj["url"] = res[i];
		ret.push(obj);
	}
	return ret;
}


exports.getSponsorContent = function(dir){
	var content = fs.readFileSync(dir, 'utf-8');
	var res = content.split("#");
	var ret = [];
	for(var key in res){
		var obj = {}
		obj["sponsorName"] = res[key];
		ret.push(obj);
	}
	return ret;
}

exports.getVerseContent = function(dir){
	var content = fs.readFileSync(dir, 'utf-8');
	var res = content.split("#");
	var ret= [];
	for(var i=0; i<res.length; i+=2){
		var obj = {}
		obj["book"] = res[i];
		obj["verse"]=res[i+1];
		ret.push(obj);
	}
	return ret;
}