import {describe, it, beforeEach, afterEach} from 'mocha'
import {expect} from 'chai'
import startApp from 'intercom-test-assignment/tests/helpers/start-app'
import destroyApp from 'intercom-test-assignment/tests/helpers/destroy-app'
import IndexPage from 'intercom-test-assignment/tests/pods/index/page-object'
import {usersFixtureCount} from 'intercom-test-assignment/mirage/fixtures/users'
import citiesFixture from 'intercom-test-assignment/mirage/fixtures/cities'
import _ from 'npm:lodash'



let m



describe('Acceptance | user list', function () {
  let application

  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })

  it('should work', async function () {
    this.timeout(10000)

    await IndexPage.visit()

    m = "Should not redirect elsewhere"
    expect(currentURL(), m).equal('/')

    m = "should contain the user list"
    expect(IndexPage.userList.isVisible, m).true

    m = `the user list should contain ${usersFixtureCount} items`
    expect(IndexPage.userList.users().count, m).equal(usersFixtureCount)

    let previousDistance

    _.times(usersFixtureCount, i => {
      m = `user ${i} should have name`
      expect(IndexPage.userList.users(i).name.text.length, m).ok

      m = `user ${i} should have latitude`
      expect(IndexPage.userList.users(i).latitude.text, m).match(/-?\d\d?\.?\d*/)

      m = `user ${i} should have longitude`
      expect(IndexPage.userList.users(i).longitude.text, m).match(/-?\d\d?\.?\d*/)

      m = `user ${i} should have distance`
      expect(IndexPage.userList.users(i).distance.text, m).match(/\d+\.?\d?\d? km/)

      const distance = parseInt(IndexPage.userList.users(i).distance.text.substr(/\d+\.?\d?\d?/), 10)

      if (i) {
        m = `distance of user ${i} should be larger than or equal to the distance of user ${i - 1}`
        expect(distance, m).gte(previousDistance)
      }

      previousDistance = distance
    })

    m = "should contain the cities chooser"
    expect(IndexPage.citiesChooser.isVisible, m).true

    m = `the cities chooser should contain ${citiesFixture.data.length} cities`
    expect(IndexPage.citiesChooser.select.options().count, m).equal(citiesFixture.data.length)
  })
})
