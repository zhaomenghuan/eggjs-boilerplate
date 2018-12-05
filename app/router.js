module.exports = app => {
  const { router, controller } = app;

  // 测试
  router.get("/api/v1/", controller.home.index);
};