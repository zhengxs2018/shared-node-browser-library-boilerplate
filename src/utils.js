/**
 * 实用工具函数
 *
 * @module utils
 */

/**
 * 数字合计
 *
 * @param {Number[]} numbers  数字列表
 *
 * @returns {Number} 合计值
 *
 * @example
 *
 * sum(1, 2)
 * // 3
 */
export function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0)
}
