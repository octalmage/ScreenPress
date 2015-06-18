var wordpress = require("wordpress");
var fs = require("fs");

var config = JSON.parse(fs.readFileSync("config.json", "utf8"));
var client = wordpress.createClient(
{
	url: config.url,
	username: config.username,
	password: config.password
});

var imageFile = fs.readFileSync("test.png");

var timestamp = moment().format("YYYY-MM-DD [at] H.mm.ss A");
var destinationfile = "Screen Shot " + timestamp + ".png";

client.uploadFile(
{
	"name": "test.png",
	"type": "image/png",
	"bits": imageFile,
	"overwrite": true
}, function(error, file)
{
    if (error) throw error;
	console.log(file.url);
});