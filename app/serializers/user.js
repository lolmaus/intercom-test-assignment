import JSONSerializer from 'ember-data/serializers/json'



export default JSONSerializer.extend({



  // ----- Overridden properties -----
  primaryKey: 'user_id',



  // ----- Overridden methods -----
  normalizeQueryResponse (store, primaryModelClass, payload, id, requestType) {
    const users =
      payload
        .split('\n')
        .filter(str => str.trim().length) // Remove blank lines
        .map(JSON.parse)

    return this._super(store, primaryModelClass, users, id, requestType)
  },

})
