import JSONSerializer from 'ember-data/serializers/json'



export default JSONSerializer.extend({



  // ----- Overridden properties -----
  primaryKey: 'user_id',



  // ----- Overridden methods -----
  normalizeQueryResponse (store, primaryModelClass, payload, id, requestType) {
    console.log('serializer normalizeQueryResponse', {store, primaryModelClass, payload, id, requestType})

    const users =
      payload
        .split('\n')
        .filter(str => str.trim().length) // Remove blank lines
        .map(JSON.parse)

    const result = this._super(store, primaryModelClass, users, id, requestType)

    console.log({users, result})

    return result
  },

})
