module.exports = app => {
  const { router, controller } = app;

  // 测试
  router.get("/", controller.home.index);

  // 用户
  router.resources("users", "/api/v1/users", app.jwt, controller.v1.users);
};