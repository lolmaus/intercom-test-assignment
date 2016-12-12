import {/*collection, */create} from 'ember-cli-page-object'
import c from 'intercom-test-assignment/tests/helpers/page-object/component'



const obj = c('.userListItem', {
  id:        c('.userListItem-element._id        .userListItem-element-value'),
  name:      c('.userListItem-element._name      .userListItem-element-value'),
  latitude:  c('.userListItem-element._latitude  .userListItem-element-value'),
  longitude: c('.userListItem-element._longitude .userListItem-element-value'),
  distance:  c('.userListItem-element._distance  .userListItem-element-value'),
})



export default obj
export const userListItem = create(obj)
