var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

const Blogs =  JSON.parse(fs.readFileSync(path.join(__dirname, '../public/javascripts/posts.json'), 'utf8'));
const categories = [...new Set(Blogs.map(post => post.category))];

router.get('/', function(req, res,next) {
  res.render('blogs', { 
    posts: Blogs,
    category:categories
   });
});

router.get('/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id, 10);
  const blog = Blogs.find(b => b.slug === blogId);
  if (blog) {
      res.render('blog', { post: blog });
  } else {
      res.status(405).send('Blog not found');
  }
});

module.exports = router;
