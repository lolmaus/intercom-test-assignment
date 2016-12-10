import {collection, create} from 'ember-cli-page-object'
import c from 'intercom-test-assignment/tests/helpers/page-object/component'
import item from '../user-list-item/page-object'



const obj = c('.userList', {
  users: collection({
    scope:     '.userList-items',
    itemScope: '.userList-item',
    item
  })
})



export default obj
export const userList = create(obj)
