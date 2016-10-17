module.exports = function(application){
  application.get('/form_inclusao_noticia',function(req,resp){
    resp.render('admin/form_add_noticia');
  });

  application.post('/noticias/salvar',function(req,resp){
    var noticia = req.body;

    var connection = application.config.dbConnection();
    var noticiasModel = application.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia,connection,function(error, result){
       resp.redirect('/noticias');
    });

  });
}
