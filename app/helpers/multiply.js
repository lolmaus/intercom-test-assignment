import {helper} from 'ember-helper'



export function multiply ([a, b]/*, hash*/) {
  return a * b
}

export default helper(multiply)
