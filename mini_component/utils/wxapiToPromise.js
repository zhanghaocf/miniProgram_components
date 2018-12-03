import Promise from './es6_promise.js'
class IllegalAPIException {
  constructor(name) {
    this.message = "No Such API [" + name + "]";
    this.name = 'IllegalAPIException';
  }
}
/**
     * 扩展的工具方法
     */
let services = {
  /**
   * 延迟方法
   */
  sleep: (time) => new Promise((resolve) => setTimeout(resolve, time)),

  /**
   * 用于中断调用链
   */
  stop: () => new Promise(() => { }),

  /**
   * 空方法，只是为了使整个调用链排版美观
   */
  taskSequence: () => new Promise((resolve) => resolve()),

};
const proxy = new Proxy(services, {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else if (property in wx) {
      return (obj) => {
        return new Promise((resolve, reject) => {
          obj = obj || {};
          obj.success = (...args) => {
            resolve(...args)
          };
          obj.fail = (...args) => {
            reject(...args);
          };
          wx[property](obj);
        });
      }
    } else {
      throw new IllegalAPIException(property);
    }
  }
});
module.exports = {
  proxy: proxy
}