/**
 * 数组常用操作方法
 *
 * @module array
 */

/**
 * 数组唯一性处理

 * @param {Array} values                                              需要操作的数组
 * @param {Function} [callback=(v, rightValues) => rightValues.some(rv => v === rv)]  使用 array.some 进行比较处理
 * @param {Boolean} [reverse=false]                                   是否逆转结果，用于获取重复的值
 *
 * @returns {Array}              处理结果
 *
 * @example <caption> 基础使用 </caption>
 *
 * let values = ['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]
 *
 * unique(values)
 * // ['a', 'b', '1', 'c', '', 1, 0]
 *
 * unique(values, null, true)
 * // ['c', 0, 1]
 *
 * @example <caption> 使用自定义函数进行比较 </caption>
 *
 * const values = ['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]
 *
 * const compare = (v, rValue) => {
 *   const s = (v || '').toString()
 *   const k = /^\d+$/.test(s)
 *
 *   return rValue.some(rv => {
 *     return k ? (rv || '').toString() === s : rv === v
 *   })
 * }
 *
 * unique(values, compare)
 * // ['a', 'b', 'c', '', 1, 0]
 *
 * unique(values, compare, true)
 * // ['c', '1', 0, 1]
 */
export function unique (values, callback, reverse = false) {
  callback = callback || function compare (value, rightValues) {
    return rightValues.some(rValue => value === rValue)
  }
  return values.filter((value, i) => {
    let result = callback(value, values.slice(i + 1))
    return reverse ? result : !result
  })
}
