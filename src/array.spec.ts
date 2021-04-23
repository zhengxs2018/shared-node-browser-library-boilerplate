import { deepStrictEqual } from 'power-assert'

import { unique } from './array'


describe('test array.js', function () {
  it('test unique()', function () {
    const values = ['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]

    deepStrictEqual(unique(values), ['a', 'b', '1', 'c', '', 1, 0], '去重结果与预期不符')
  })

  it('test unique(comparator)', function () {
    const values = ['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]

    function isNumber(value: unknown): value is number {
      return typeof value === 'number' || typeof value === 'string' && /^\d+$/.test(value)
    }

    function comparator<T = unknown>(current: T, array: T[]): boolean {
      return array.some(value => {
        return isNumber(value) && isNumber(current) ? Number(value) === Number(current) : value === current
      })
    }

    deepStrictEqual(
      unique(values, comparator),
      ['a', 'b', 'c', "", 1, 0],
      '使用自定义比较函数去重的结果与预期不符'
    )
  })
})
