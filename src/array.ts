/**
 * 比较函数
 *
 * @public
 */
export type UniqueComparator<T> = (value: T, next: T[], index: number, result: T[]) => boolean

/**
 * 默认唯一性比较函数
 *
 *
 * @param current - 当前比对项
 * @param array - 后续的所有项
 *
 * @returns 判断结果
 */
function defaultUniqueComparator<T = unknown>(current: T, array: T[]): boolean {
  return array.indexOf(current) > -1
}

/**
 * 数组唯一性处理
 *
 * @public
 *
 * @param array  - 需要操作的数组
 * @param comparator - 默认使用 [].indexOf 进行比较处理
 * @returns            处理结果
 *
 * @example <caption> 基础使用 </caption>
 *
 * ```typescript
 * import { unique } from '@zhengxs/npm-module-boilerplate'
 *
 * // 获取去重结果
 * unique(['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0])
 * // -> ['a', 'b', '1', 'c', '', 1, 0]
 * ```
 *
 * <br/>
 *
 * @example <caption> 使用自定义函数进行比较 </caption>
 *
 * ```typescript
 * import { unique } from '@zhengxs/npm-module-boilerplate'
 *
 * const values = ['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]
 *
 * function isNumber(value: unknown): value is number {
 *   return typeof value === 'number' || typeof value === 'string' && /^\d+$/.test(value)
 * }
 *
 * function comparator<T = unknown>(current: T, array: T[]): boolean {
 *   return array.some(value => {
 *     return isNumber(value) && isNumber(current) ? Number(value) === Number(current) : value === current
 *   })
 * }
 *
 * // 获取去重结果
 * unique(values, comparator)
 * // -> ['a', 'b', 'c', '', 1, 0]
 * ```
 */
export function unique<T = unknown>(array: T[], comparator: UniqueComparator<T> = defaultUniqueComparator): T[] {
  return array.reduce((result, value, index) => {
    const flag = comparator(value, array.slice(index + 1), index, result)
    return flag ? result : result.concat(value)
  }, [] as T[])
}
