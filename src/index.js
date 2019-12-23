/**
 * 检测字符串是否为JSON字符串.
 * @param {string} str - 字符串.
 * @returns {boolean} - 布尔值.
 */
export function isJsonStr(str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str);
      return typeof obj === 'object' && obj !== null;
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
}
/**
 * 获取字符串字符长度.
 * @param {string} str - 字符串.
 * @returns {number} - 长度.
 */
export function getCharLength(str) {
  if (typeof str !== 'string') {
    return 0;
  }
  return str.replace(/[^\x00-\xff]/g, 'ss').length;
}

/**
 * 按字符长度截取字符串.
 * @param {string} str - 字符串.
 * @param {number} n - 字符长度.
 * @returns {string} - 截取后的字符串.
 */
export function substrByCharLength(str, n) {
  n = parseInt(n);
  if (typeof str !== 'string' || !n || n <= 0) {
    return ''
  }
  var reg = /[^\x00-\xff]/g;
  if (str.replace(reg, 'ss').length <= n) {
    return str;
  }
  var m = Math.floor(n / 2);
  for (var i = m; i < str.length; i++) {
    if (str.substr(0, i).replace(reg, 'ss').length >= n) {
      return str.substr(0, i);
    }
  }
  return str;
}

/**
 * 获取 n 位数字验证码
 * @param {number} [n = 4] - 验证码位数
 */
export function digitCode(n) {
  if (!n || typeof n !== 'number' || isNaN(n)) n = 4;
  if (n <= 0) n = 1;
  if (n > 15) n = 15;
  return Math.random().toString().slice(-n);
}

/**
 * 剪贴板对象
 * @namespace Clipboard
 */
export var Clipboard = {
  /** 
   * @param {string} text - 字符串.
   * @inner
   * */
  copy(text) {
    var id = 'tempClipboardSelection';
    var input = document.getElementById(id);
    if (!input) {
      input = document.createElement('input');
      input.setAttribute('style', 'position:fixed;top:-10000px');
      input.setAttribute('id', id);
      document.body.appendChild(input);
    }
    input.value = text;
    input.select();
    document.execCommand('copy');
  }
}

