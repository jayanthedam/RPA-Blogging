var express = require('express')
var router = express.Router()
var path = require('path');
var fs = require('fs');

var events =  JSON.parse(fs.readFileSync(path.join(__dirname, '../public/javascripts/gallery.json'), 'utf8'));

router.get('/', function(req, res, next) {
  res.render('gallery', { events: events });
});


module.exports = router;