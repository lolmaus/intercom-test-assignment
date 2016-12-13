import Controller from 'ember-controller'
import computed from 'ember-computed-decorators'
import service from 'ember-service/inject'



export default Controller.extend({

  // ----- Services -----
  fastboot: service(),



  // ----- Overridden properties -----



  // ----- Static properties -----
  distanceLimitKm: 100,



  // ----- Computed properties -----
  @computed    ('model.userCityJunctions.@each.distanceKm')
  maxDistanceLimitKm (userCityJunctions) {
    return 1 +
      userCityJunctions
        .sortBy('distanceKm')
        .get('lastObject.distanceKm')
  },



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  actions: {
    changeCityAction (cityId) {
      this.transitionToRoute('city', cityId)
    }
  }
})
