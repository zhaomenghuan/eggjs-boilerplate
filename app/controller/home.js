module.exports = app => {
  /**
   * @Controller 测试
   */
  class Controller extends app.Controller {
    /**
     * @Summary HelloWorld
     * @Router GET /
     */
    async index() {
      this.ctx.body = "Hello World";
    }
  }
  return Controller;
};