const path = require("path");

module.exports = appInfo => {
  const config = {};

  config.keys = "123456";

  config.middleware = ["errorHandler"];

  config.jwt = {
    secret: "123456"
  };

  /**
   * egg-swagger-doc
   * @member Config#swagger-doc
   * @property {String} dirScanner - 插件扫描的文档路径
   * @property {String} basePath - api前置路由
   * @property {Object} apiInfo - 可参考Swagger文档中的Info
   * @property {Array[String]} apiInfo - 可参考Swagger文档中的Info
   * @property {Array[String]} schemes - 访问地址协议http或者https
   * @property {Array[String]} consumes - contentType的集合
   * @property {Array[String]} produces - contentType的集合
   * @property {Object} securityDefinitions - 安全验证，具体参考swagger官方文档
   * @property {Boolean} enableSecurity - 是否使用安全验证
   * @property {Boolean} enable - swagger-ui是否可以访问
   */
  config.swaggerbuilder = {
    enable: true,
    enableSecurity: true,
    dirScanner: "./app/controller/v1",
    basePath: "/api/v1",
    apiInfo: {
      title: "AOSS",
      description: "swagger-ui for egg",
      version: "1.0.0"
    },
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
      APIKey: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        description: "Bearer {token}"
      }
    }
  };

  /**
   * 静态资源
   */
  config.static = {
    prefix: '/',
    dir: [path.join(__dirname, '../api-doc')]
  };

  return config;
};
