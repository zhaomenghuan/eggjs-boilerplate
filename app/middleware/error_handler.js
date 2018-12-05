"use strict";

module.exports = (option, app) => {
  return async function(ctx, next) {
    try {
      await next();
    } catch (err) {
      let status = err.status || 500;
      let message = "";

      if (err.errors instanceof Array) {
        err.errors.map(item => {
          if (status === 422) {
            message += `${item.code}, ${item.field} ${item.message};`;
          }
        });
      } else {
        message = err.message;
      }

      ctx.status = status;
      ctx.body = {
        code: status,
        message: message
      };
    }
  };
};
