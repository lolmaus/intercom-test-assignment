import {create, visitable} from 'ember-cli-page-object'
import c from 'intercom-test-assignment/tests/helpers/page-object/component'
import citiesChooser from '../components/cities-chooser/page-object'
import userList from '../components/user-list/page-object'



export default create({
  visit: visitable('/'),

  citiesChooser,
  userList,

  distance: {
    slider: c('.route-city-distance-slider'),
    label:  c('.route-city-distance-label'),
  },
})
