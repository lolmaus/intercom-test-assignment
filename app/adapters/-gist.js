import Adapter from 'ember-data/adapter'
import fetch from 'ember-network/fetch'



export default Adapter.extend({

  // ----- Overridden methods -----
  query (store, type, {url}/*, recordArray*/) {
    return fetch(url)
      .then(responseObj => responseObj.text())
  }
})
