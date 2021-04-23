/**
 * 数字合计
 *
 * @public
 *
 * @param numbers - 数字列表
 * @returns 合计值
 *
 * @example <caption> 基础使用 </caption>
 *
 * ```javascript
 * import { sum } from '@zhengxs/npm-module-boilerplate'
 *
 * sum(1, 2)
 * // -> 3
 *
 * sum(1, 2, 3)
 * // -> 6
 * ```
 */
export function sum(...numbers: number[]): number {
  return numbers.reduce((total, value) => total + value, 0)
}
