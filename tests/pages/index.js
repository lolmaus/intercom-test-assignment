import {
  create,
  visitable
} from 'ember-cli-page-object'

import userList from './components/user-list'



export default create({
  visit: visitable('/'),

  userList,
})
