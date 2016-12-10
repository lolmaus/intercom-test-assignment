import {expect} from 'chai'
import {it, describe, beforeEach, afterEach} from 'mocha'
import {setupComponentTest} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {citiesChooser} from './page-object'
import sinon from 'sinon'



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



  it("should work", function () {
    const cities = [
      {id: '1', name: "Foo", latitude: 123, longitude: 456},
      {id: '2', name: "Bar", latitude: 111, longitude: 222},
    ]

    const changeCityAction = sinon.spy(() => {
      this.set('currentCity', cities[1])
    })

    this.setProperties({
      cities,
      currentCity: cities[0],
      changeCityAction
    })

    citiesChooser.render(hbs`{{cities-chooser
      cities           = cities
      currentCity      = currentCity
      changeCityAction = (action changeCityAction)
    }}`)

    m = 'Select should be visible'
    expect(citiesChooser.select.isVisible, m).true

    m = `City select value initial`
    expect(citiesChooser.select.value, m).equal(cities[0].id)

    m = `City name initial`
    expect(citiesChooser.name.text, m).equal(cities[0].name)

    m = `City latitude initial`
    expect(citiesChooser.latitude.text, m).equal(`${cities[0].latitude}`)

    m = `City longitude initial`
    expect(citiesChooser.longitude.text, m).equal(`${cities[0].longitude}`)

    citiesChooser.select.fill(cities[1].id)

    m = "Action should be called once"
    expect(changeCityAction.calledOnce, m).true

    m = "Action should be called with second city's id"
    expect(changeCityAction.calledWith(cities[1].id), m).true

    m = `City select value after selection`
    expect(citiesChooser.select.value, m).equal(cities[1].id)

    m = `City name after selection`
    expect(citiesChooser.name.text, m).equal(cities[1].name)

    m = `City latitude after selection`
    expect(citiesChooser.latitude.text, m).equal(`${cities[1].latitude}`)

    m = `City longitude after selection`
    expect(citiesChooser.longitude.text, m).equal(`${cities[1].longitude}`)
  })
})
