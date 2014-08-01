var SandCastle = require('../lib').SandCastle;
var mw = require('memwatch');

mw.on('stats', function (stats) {
	console.log(stats);
});

mw.on('leak', function (info) {
	console.log(info);
});

var sandcastle = new SandCastle();


//setInterval(function () { gc(); }, 5000);

/*var script = sandcastle.createScript("\
  exports.main = function() {\
    exit('Hello World!');\
  }\
");

script.once('exit', function(err, output) {
    console.log(output); // Hello World!
});

script.run();*/