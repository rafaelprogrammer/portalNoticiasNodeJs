//var dbConnection  = require('../../config/dbConnection');
module.exports = function(application){
    application.get('/noticias',function(req,resp){

      var connection = application.config.dbConnection();
      var noticiasModel = application.app.models.noticiasModel;

      noticiasModel.getNoticias(connection,function(error, result){
         resp.render('noticias/noticias',{noticias: result});
      });

    });
};
