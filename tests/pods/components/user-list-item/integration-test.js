import {expect} from 'chai'
import {it, describe, beforeEach, afterEach} from 'mocha'
import {setupComponentTest} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {userListItem} from './page-object'


let m


describe('Integration | Component | user list item', function () {

  setupComponentTest('component:user-list-item', {
    integration: true,
  })

  beforeEach(function () {
    userListItem.setContext(this)
  })

  afterEach(function () {
    userListItem.removeContext()
  })

  it("should display fields", function () {
    this.set('user', {
      id:         '1',
      name:       'Foo',
      latitude:   3,
      longitude:  -2,
      distanceKm: 300.12345,
    })

    userListItem.render(hbs`{{user-list-item user=user}}`)

    m = "Name"
    expect(userListItem.name.text, m).equal('Foo')

    m = "Latitude"
    expect(userListItem.latitude.text, m).equal('3')

    m = "Longitude"
    expect(userListItem.longitude.text, m).equal('-2')

    m = "Distance"
    expect(userListItem.distance.text, m).equal('300.12 km')
  })
})
