/**
 * 数字合计
 *
 * @public
 * @param numbers  - 数字列表
 * @returns 合计值
 *
 * @example <caption> 基础使用 </caption>
 *
 * ```js
 * sum(1, 2)
 * // 3
 * ```
 */
export function sum(...numbers: number[]): number {
  return numbers.reduce((total, number) => total + number, 0)
}
