module.exports.formulario_inclusao_noticia = function (application, req, resp){
  resp.render('admin/form_add_noticia',{validacao: {}, noticia: {}});
}

module.exports.noticias_salvar = function (application, req, resp){
  var noticia = req.body;

  req.assert('titulo','Título é obrigatório').notEmpty();
  req.assert('resumo','Resumo é obrigatório').notEmpty();
  req.assert('resumo','Resumo deve conter entre 10 e 100 carateres').len(10,100);
  req.assert('autor','Autor é obrigatório').notEmpty();
  req.assert('data_noticia','Data Notícia é obrigatória').notEmpty().isDate({format:'YYYY-MM-DD'});
  req.assert('noticia','Notícia é obrigatório').notEmpty();

  var erros = req.validationErrors();
  console.log(noticia);
  if(erros){
    resp.render("admin/form_add_noticia",{validacao: erros, noticia: noticia});
    return;
  }

  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.salvarNoticia(noticia,function(error, result){
     resp.redirect('/noticias');
  });
}
