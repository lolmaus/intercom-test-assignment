import Ember from 'ember'
import config from './config/environment'
import nprogress from 'ember-cli-nprogress'

const Router = Ember.Router.extend({

  // ----- Overridden properties -----
  location: config.locationType,
  rootURL:  config.rootURL,



  // ----- Custom properties -----
  initialLoadingComplete: false,



  // ----- Overridden methods -----
  willTransition () {
    if (this.get('initialLoadingComplete')) nprogress.start()

    this._super(...arguments)
  },

  didTransition () {
    this._super(...arguments)

    if (this.get('initialLoadingComplete')) nprogress.done()
    else this.set('initialLoadingComplete', true)
  },
})




Router.map(function () {
  this.route('city', {path: ':cityId'})
})




export default Router
