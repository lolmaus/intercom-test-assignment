import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import toNumber from 'intercom-test-assignment/macros/to-number'



export default Model.extend({

  // ----- Attributes -----
  name:      attr('string'),
  latitude:  attr('number'),
  longitude: attr('number'),



  // ----- Computed properties -----
  numericId: toNumber('id')
})
