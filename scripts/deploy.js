var ghpages = require('gh-pages');
var path = require('path');


const GH_TOKEN = process.env.GH_TOKEN;

ghpages.publish(path.join(__dirname, '..','public'),{
  repo: 'https://' + GH_TOKEN + '@github.com/sh4869/gh-pages-travis-test',
  user: {
    name: 'sh4869',
    email: 'nobuk4869@gmail.com'
  },
  message: `[ci skip] Update webpage`,
},function(err){
  if(err){
    console.log("Error: " + err)
  } else {
     console.log("Update Webpage");
  }
});
