module.exports = app => {
  /**
   * @Controller 用户
   */
  class UsersController extends app.Controller {
    /**
     * @Summary 查询用户列表
     * @Router GET /users
     * @Request query string *userKey 用户ID
     * @Request query number page 页数
     * @Request query number pageSize 每一页的数量
     */
    async index() {
      this.ctx.body = "查询用户列表";
    }
  }
  return UsersController;
};
