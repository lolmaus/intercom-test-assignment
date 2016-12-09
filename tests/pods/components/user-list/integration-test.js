import {expect} from 'chai'
import {it, describe, beforeEach, afterEach} from 'mocha'
import {setupComponentTest} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {userList} from './page-object'

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

  it("should display two users", function () {
    this.set('users', [
      { id: '1', name: "Foo" },
      { id: '2', name: "Bar" },
    ])

    userList.render(hbs`{{user-list users=users}}`)

    expect(userList.users().count).equal(2)
  })
})
