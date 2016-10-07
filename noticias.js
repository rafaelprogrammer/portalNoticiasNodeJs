var http = require('http');

var http = http.createServer(function(req, resp){

  var categoria = req.url;

  if(categoria == '/tecnologia'){
      resp.end('<html><body>Noticias de Tecnologia</body></html>');
  }else if(categoria == '/moda'){
      resp.end('<html><body>Noticias de Moda</body></html>');
  }else if(categoria == '/beleza'){
      resp.end('<html><body>Noticias de Beleza</body></html>');
  } else {
      resp.end('<html><body>Portal de Noticias</body></html>');
  }

});

http.listen(3000);
