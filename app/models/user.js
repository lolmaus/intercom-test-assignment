import Model from 'ember-data/model'
import attr from 'ember-data/attr'



export default Model.extend({
  name:      attr('string'),
  latitude:  attr('number'),
  longitude: attr('number'),
})
