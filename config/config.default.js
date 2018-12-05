module.exports = appInfo => {
  const config = {};

  config.keys = "aemmprojectwithnodeserver";

  config.middleware = ["errorHandler"];

  /**
   * swagger-ui
   */
  config.swaggerdoc = {
    dirScanner: './app/controller',
    basePath: '/api/v1',
    apiInfo: {
      title: 'eggjs-boilerplate',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enable: true,
  };

  return config;
};
