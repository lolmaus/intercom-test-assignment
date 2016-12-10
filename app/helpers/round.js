import {helper} from 'ember-helper'
import _ from 'npm:lodash'



export function round ([value, precision = 0]/*, hash*/) {
  return _.round(value, precision)
}

export default helper(round)
