import Adapter from 'ember-data/adapter'
import fetch from 'ember-network/fetch'
import wrapPromise from 'intercom-test-assignment/utils/wrap-promise'



export default Adapter.extend({

  // ----- Overridden methods -----
  query (store, type, {url}/*, recordArray*/) {
    return wrapPromise(fetch(url))
      .then(responseObj => responseObj.text())
  }
})
