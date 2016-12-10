import {expect} from 'chai'

import {describe, it} from 'mocha'
import {multiply} from 'intercom-test-assignment/helpers/multiply'



const cases = [
  {a: 1, b: 2, expected: 2},
  {a: 2, b: 2, expected: 4},
  {a: 0, b: 5, expected: 0},
]


describe('Unit | Helper | multiply', function () {

  cases.forEach(({a, b, expected}) => {

    it(`a: ${a}, b: ${b}`, function () {
      const result = multiply([a, b])
      expect(result).equal(expected)
    })

  })
})

