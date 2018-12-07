'use strict';

const path = require('path');
const fs = require('fs');

// load all js files in app/apis/ directory automatically
module.exports = app => {
  app.beforeStart(async () => {
    if (app.config.swaggerbuilder.enable) {
      app.get('/swagger-ui.html', ctx => {
        let swaggerPath = path.join(__dirname, '/api-doc/index.html');
        ctx.response.status = 200;
        ctx.response.type = 'text/html';
        ctx.response.body = fs.readFileSync(swaggerPath).toString();
      });
      app.logger.info('[egg-swagger-doc] register router: /swagger-ui.html');
    }
  });
};