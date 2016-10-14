module.exports = function(app){
  app.get('/form_inclusao_noticia',function(req,resp){
    resp.render('admin/form_add_noticia');
  });
}
