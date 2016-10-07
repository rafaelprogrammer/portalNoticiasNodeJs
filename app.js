var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/tecnologia',function(req,resp){
  resp.render('secao/tecnologia');
});

app.get('/',function(req,resp){
  resp.send('<html><body>Portal de noticas</body></html>');
});



app.listen(3000,function(){
  console.log('servidor rodando com express..');
});
