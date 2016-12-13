import Component from 'ember-component'
import service from 'ember-service/inject'



export default Component.extend({

  // ----- Arguments -----
  cities:           undefined,
  currentCity:      undefined,
  changeCityAction: undefined,



  // ----- Services -----
  fastboot: service(),



  // ----- Overridden properties -----
  classNames: ['citiesChooser'],



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
