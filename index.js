const fs = require('fs');

function readAllObjectsFromFileSync(path){
	return JSON.parse(fs.readFileSync(path, 'utf8'));
}

module.exports.getAllSync = function(path) {
	return readAllObjectsFromFileSync(path);
}

module.exports.getSync = function(path, key, value) {
	return readAllObjectsFromFileSync(path).filter(object => object[key] == value);
}