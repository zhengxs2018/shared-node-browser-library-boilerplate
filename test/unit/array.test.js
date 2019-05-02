import { deepStrictEqual } from 'assert'

import { unique } from 'shared-node-browser-library-boilerplate'

describe('test array.js', function () {
  it('test unique()', function () {
    const values = ['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]

    deepStrictEqual(unique(values), ['a', 'b', '1', 'c', '', 1, 0], '去重结果与预期不符')
    deepStrictEqual(unique(values, null, true), ['c', 0, 1], '返回的重复值与预期不符')

    const compare = (v, rValue) => {
      const s = (v || '').toString()
      const k = /^\d+$/.test(s)

      return rValue.some(rv => {
        return k ? (rv || '').toString() === s : rv === v
      })
    }

    deepStrictEqual(unique(values, compare), ['a', 'b', 'c', '', 1, 0], '使用自定义比较函数去重的结果与预期不符')
    deepStrictEqual(unique(values, compare, true), ['c', '1', 0, 1], '使用自定义比较函数返回的重复值与预期不符')
  })
})
