/** 比较函数 */
export type UniqueCompare<T> = (value: T, array: T[]) => boolean

/**
 * 数组唯一性处理
 *
 * @public
 * @param array    - 需要操作的数组
 * @param compare  - 默认使用 Array#indexOf 进行比较处理
 * @param reverse  - 是否逆转结果，用于获取重复的值
 * @returns 处理结果
 *
 * @example <caption> 基础使用 </caption>
 *
 * ```js
 * unique(['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0])
 * // ['a', 'b', '1', 'c', '', 1, 0]
 * ```
 *
 * <br/>
 *
 * @example <caption> 使用自定义函数进行比较 </caption>
 *
 * ```js
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
 * ```
 */
export function unique<T>(
  array: T[],
  compare: UniqueCompare<T> = (v, a) => a.indexOf(v) > -1,
): T[] {
  return array.filter((value, i) => compare!(value, array.slice(i + 1)))
}
