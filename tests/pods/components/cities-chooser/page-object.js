import {/*collection, */create} from 'ember-cli-page-object'
import c from 'intercom-test-assignment/tests/helpers/page-object/component'
import select from 'intercom-test-assignment/tests/helpers/page-object/select'



const obj = c('.citiesChooser', {
  select: select('.citiesChooser-select')
})



export default obj
export const citiesChooser = create(obj)
