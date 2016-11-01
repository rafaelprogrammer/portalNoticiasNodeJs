module.exports.noticias = function (application, req, resp){
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticias(function(error, result){
     resp.render('noticias/noticias',{noticias: result});
  });
}

module.exports.noticia = function (application, req, resp){
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticia(function(error, result){
     resp.render('noticias/noticia',{noticia: result});
  });
}
