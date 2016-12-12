import {expect} from 'chai'
import {it, describe, beforeEach, afterEach} from 'mocha'
import {setupComponentTest} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {userList} from './page-object'


let m



describe('Integration | Component | user list', function () {

  setupComponentTest('component:user-list', {
    integration: true,
  })

  beforeEach(function () {
    userList.setContext(this)
  })

  afterEach(function () {
    userList.removeContext()
  })

  it("should display two users, empty state hidden", async function () {
    this.timeout(999999999)

    this.setProperties({
      users: [
        { id: '1', name: "Foo", distanceKm: 100},
        { id: '2', name: "Bar", distanceKm: 300 },
      ],
      distanceLimitKm: 200
    })

    userList.render(hbs`{{user-list users=users distanceLimitKm=distanceLimitKm}}`)

    m = "There should be two users"
    expect(userList.users().count).equal(2)

    m = "The first user should not be empty"
    expect(userList.users(0).hasClass('_empty'), m).false

    m = "The first user should be in range"
    expect(userList.users(0).hasClass('-inRange'), m).true

    m = "The second user should not be empty"
    expect(userList.users(1).hasClass('_empty'), m).false

    m = "The second user should be out of range"
    expect(userList.users(1).hasClass('-inRange'), m).false

    m = "The empty state should be out of range"
    expect(userList.emptyState.hasClass('-inRange'), m).false
  })

  it("should display empty state", function () {
    this.setProperties({
      users: [
        { id: '1', name: "Foo", distanceKm: 100},
        { id: '2', name: "Bar", distanceKm: 100 },
      ],
      distanceLimitKm: 50
    })

    userList.render(hbs`{{user-list users=users distanceLimitKm=distanceLimitKm}}`)

    m = "There should be two users"
    expect(userList.users().count).equal(2)

    m = "The first user should not be empty"
    expect(userList.users(0).hasClass('_empty'), m).false

    m = "The first user should be out of range"
    expect(userList.users(0).hasClass('-inRange'), m).false

    m = "The second user should not be empty"
    expect(userList.users(1).hasClass('_empty'), m).false

    m = "The second user should be out of range"
    expect(userList.users(1).hasClass('-inRange'), m).false

    m = "The empty user should not be out of range"
    expect(userList.emptyState.hasClass('-inRange'), m).true
  })
})
