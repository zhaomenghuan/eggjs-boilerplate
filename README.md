# eggjs-boilerplate

A boilerplate project based on Egg.js Framework.

## plugins

### egg-validate

project：https://github.com/eggjs/egg-validate

> **Install**

```
npm i egg-validate --save
```

> **Usage & configuration**

```js
// {app_root}/config/plugin.js
exports.validate = {
  enable: true,
  package: "egg-validate"
};
```

### egg-sequelize

project：https://github.com/eggjs/egg-sequelize

> **Install**

```
npm i -S egg-sequelize
npm install -S mysql2
npm install -D sequelize-cli
```

> **Usage & configuration**

```js
// {app_root}/config/plugin.js
exports.sequelize = {
  enable: true,
  package: "egg-sequelize"
};
```

```js
// {app_root}/config/config.default.js
exports.sequelize = {
  dialect: "mysql", // support: mysql, mariadb, postgres, mssql
  database: "test",
  host: "localhost",
  port: "3306",
  username: "root",
  password: ""
  // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
  // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
  // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
  // more sequelize options
};
```

> **Migration**

project: https://github.com/sequelize/cli

Generate a sequelize configuration file `config/config.json` by executing `npm run sequelize:init`.

Generates a new migration file：

```
npm run migrate:generate [file_name]
```

Run pending migrations：

```
npm run migrate:up
```

Reverts a migration：

```
npm run migrate:down
```

### egg-swagger-doc

project：https://github.com/Ysj291823/egg-swagger-doc

> **Install**

```
npm i egg-swagger-doc -S
```

> **Usage & configuration**

```js
// {app_root}/config/plugin.js
exports.swaggerdoc = {
  enable: true,
  package: "egg-swagger-doc"
};
```

```js
// {app_root}/config/config.default.js
exports.swaggerdoc = {
  dirScanner: "./app/controller",
  apiInfo: {
    title: "egg-swagger",
    description: "swagger-ui for egg",
    version: "1.0.0"
  },
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  enable: true
};
```

### egg-jwt

project：https://github.com/okoala/egg-jwt

> **Install**

```
npm i egg-jwt --save
```

> **Usage & configuration**

```js
// {app_root}/config/plugin.js
exports.jwt = {
  enable: true,
  package: "egg-jwt"
};
```

```js
// {app_root}/config/config.default.js
exports.jwt = {
  secret: "123456"
};
```