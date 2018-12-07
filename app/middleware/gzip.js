const isJSON = require('koa-is-json');
const IOUtil = require('../utils/IOUtil');

module.exports = options => {
  return async function gzip(ctx, next) {
    await next();

    // 后续中间件执行完成后将响应体转换成 gzip
    let buffer = ctx.body;
    if (!buffer) return;
    
    // 支持 options.threshold
    if (options.threshold && ctx.length < options.threshold) return;
    
    // Stream 对象
    if (IOUtil.isStream(buffer)) {
      let stream = buffer;
      buffer = await IOUtil.streamToBuffer(stream);
    }

    // JSON 对象
    if (isJSON(buffer)) {
      buffer = JSON.stringify(buffer);
    }

    // 设置 gzip body，修正响应头
    ctx.body = IOUtil.createGzipStream(buffer);
    ctx.set('Content-Encoding', 'gzip');
  };
};