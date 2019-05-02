import { strictEqual } from 'assert'

import { utils } from 'shared-node-browser-library-boilerplate'

describe('test utils.js', function () {
  it('Should output 3', function () {
    strictEqual(utils.sum(1, 2), 3, '合计结果与预期不符')
  })
})
