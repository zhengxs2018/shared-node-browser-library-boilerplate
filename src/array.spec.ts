import { unique } from './array'

const values = ['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]

describe('test array.js', function () {
  it('test unique()', function () {
    expect(unique(values)).toStrictEqual(['a', 'b', '1', 'c', '', 1, 0])
  })

  it('test unique(compare)', function () {
    const compare = (current: unknown, next: unknown[]) => {
      return next.some(value => value == current)
    }

    expect(unique(values, compare)).toStrictEqual(['a', 'b', 'c', '', 1, 0])
  })
})
