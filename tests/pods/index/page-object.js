import {
  create,
  visitable
} from 'ember-cli-page-object'

import userList from '../components/user-list/page-object'



export default create({
  visit: visitable('/'),

  userList,
})
