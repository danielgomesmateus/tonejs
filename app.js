(function(){

  'use strict';

  let app    = require('express')();
  let helmet = require('helmet');

  app.listen(8000, function() {
    console.log('Servidor ON!');
  });
})();
