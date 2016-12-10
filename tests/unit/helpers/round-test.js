import {expect} from 'chai'

import {describe, it} from 'mocha'
import {round} from 'intercom-test-assignment/helpers/round'



const cases = [
  {value: 1.2345, precision: undefined, expected: 1},
  {value: 1.2345, precision: 2,         expected: 1.23},
  {value: 1.2345, precision: 20,        expected: 1.2345},
]


describe('Unit | Helper | round', function () {

  cases.forEach(({value, precision, expected}) => {

    it(`value: ${value}, precision: ${precision}`, function () {
      const result = round([value, precision])
      expect(result).equal(expected)
    })

  })
})

