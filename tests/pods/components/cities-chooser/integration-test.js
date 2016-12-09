import {expect} from 'chai'
import {it, describe, beforeEach, afterEach} from 'mocha'
import {setupComponentTest} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {citiesChooser} from './page-object'



let m



describe('Integration | Component | cities chooser', function () {

  setupComponentTest('component:cities-chooser', {
    integration: true,
  })

  beforeEach(function () {
    citiesChooser.setContext(this)
  })

  afterEach(function () {
    citiesChooser.removeContext()
  })



  it("should display two cities", function () {
    this.set('cities', [
      { id: '1', name: "Foo" },
      { id: '2', name: "Bar" },
    ])

    citiesChooser.render(hbs`{{cities-chooser cities=cities}}`)

    m = 'Select should be visible'
    expect(citiesChooser.select.isVisible, m).true
  })
})
