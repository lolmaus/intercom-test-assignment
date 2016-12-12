import Component from 'ember-component'
import lte from 'ember-awesome-macros/lte'



export default Component.extend({

  // ----- Arguments -----
  user:            undefined,
  distanceLimitKm: undefined,
  labels:          false,



  // ----- Services -----



  // ----- Overridden properties -----
  classNameBindings: [
    ':userListItem',
    'isInRange:-inRange',
    'labels:-labels'
  ],



  // ----- Static properties -----
  isInRange: lte('user.distanceKm', 'distanceLimitKm'),



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
