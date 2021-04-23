import { strictEqual } from 'power-assert'

import { sum } from './utils'

describe('test utils.js', function () {
  it('Should output 3', function () {
    strictEqual(sum(1, 2), 3, '合计结果与预期不符')
  })
})
