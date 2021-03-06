import Component from 'ember-component'
import computed from 'ember-computed-decorators'
import get from 'ember-metal/get'



export default Component.extend({

  // ----- Arguments -----
  users:           undefined,
  cityName:        undefined,
  distanceLimitKm: undefined,




  // ----- Services -----



  // ----- Overridden properties -----
  classNames: ['userList'],



  // ----- Static properties -----



  // ----- Computed properties -----
  @computed   ('users.@each.distanceKm', 'distanceLimitKm')
  usersInRange (users,                    distanceLimitKm) {
    return users.filter(user => get(user, 'distanceKm') <= distanceLimitKm)
  },


  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
