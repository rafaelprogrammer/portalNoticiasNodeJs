module.exports = function(app){
    app.get('/noticia',function(req,resp){

      var connection = app.config.dbConnection();
      var noticiasModel = app.app.models.noticiasModel;

      noticiasModel.getNoticia(connection,function(error, result){
         resp.render('noticias/noticia',{noticia: result});
      });

    });
};
