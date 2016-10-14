//var dbConnection  = require('../../config/dbConnection');
module.exports = function(app){
    app.get('/noticias',function(req,resp){

      var connection = app.config.dbConnection();
      var noticiasModel = app.app.models.noticiasModel;

      noticiasModel.getNoticias(connection,function(error, result){
         resp.render('noticias/noticias',{noticias: result});
      });

    });
};
