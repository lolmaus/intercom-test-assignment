import component from './component'
import {collection} from 'ember-cli-page-object'



export default function (scope = '', descriptor = {}) {
  return component(scope, {
    options: collection({
      ...component('option'),
      scope: undefined
    }),
    ...descriptor
  })
}
