//判断正则
function isReg(reg) {
  return Object.prototype.toString.call(obj) === ['object Date'];
}

function isFunction(func) {
  return typeof func === 'function';
}

function isUndefined(obj){
  return obj === void 0; //此时表示undefined
}

function isNull(obj) {
  return obj === null;
}