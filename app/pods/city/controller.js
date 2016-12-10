import Controller from 'ember-controller'



export default Controller.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----
  distanceLimitKm: 100,



  // ----- Computed properties -----



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
