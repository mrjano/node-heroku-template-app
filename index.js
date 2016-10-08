var express = require('express'),
	app = express();
	MongoClient = require('mongodb').MongoClient,
	entries = null;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/entries', function(request, response) {

})

app.listen(app.get('port'), function() {
	MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
		entries = db.collection('entries');
	   	console.log('Node app is running on port', app.get('port'));
	  	db.close();
	});

});


