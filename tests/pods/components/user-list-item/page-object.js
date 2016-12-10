import {/*collection, */create} from 'ember-cli-page-object'
import c from 'intercom-test-assignment/tests/helpers/page-object/component'



const obj = c('.userListItem', {
  name:      c('.userListItem-name'),
  latitude:  c('.userListItem-latitude'),
  longitude: c('.userListItem-longitude'),
  distance:  c('.userListItem-distance'),
})



export default obj
export const userListItem = create(obj)
