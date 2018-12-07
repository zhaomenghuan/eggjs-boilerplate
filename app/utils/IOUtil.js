let Duplex = require("stream").Duplex;
const toArray = require("stream-to-array");
const sendToWormhole = require("stream-wormhole");
const zlib = require('zlib');

/**
 * 判断是否是 Buffer 对象
 * @param {*} buffer 
 */
function isBuffer(obj) {
  return Buffer.isBuffer(obj);
}

/**
 * 判断是否是 Stream 对象
 * @param {*} obj 
 */
function isStream(obj) {
  return (obj instanceof require("stream"));
}

/**
 * Stream to Buffer
 * @param {*} stream
 */
async function streamToBuffer(stream) {
  let buffer;
  try {
    const parts = await toArray(stream);
    buffer = Buffer.concat(parts);
  } catch (err) {
    await sendToWormhole(stream);
    throw err;
  }
  return buffer;
}

/**
 * Buffer to Stream
 * @param {*} buffer
 */
function bufferToStream(buffer) {
  let stream = new Duplex();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

/**
 * Gzip
 */
function createGzipStream(buffer) {
  const stream = zlib.createGzip();
  stream.end(buffer);
  return stream;
}

module.exports = {
  isBuffer,
  isStream,
  streamToBuffer,
  bufferToStream,
  createGzipStream
};
