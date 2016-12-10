import Ember from 'ember'
import Resolver from './resolver'
import loadInitializers from 'ember-load-initializers'
import config from './config/environment'

let App

// Browserify needs this
import 'npm:lodash'

Ember.MODEL_FACTORY_INJECTIONS = true

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
})

loadInitializers(App, config.modulePrefix)

export default App
