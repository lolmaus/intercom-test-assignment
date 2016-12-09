import {collection, create} from 'ember-cli-page-object'
import c from 'intercom-test-assignment/tests/helpers/component'
import item from '../user-list-item/page-object'



const obj = c('.userList', {
  users: collection({
    ...item,
    scope: '.userList-items'
  })
})



export default obj
export const userList = create(obj)
