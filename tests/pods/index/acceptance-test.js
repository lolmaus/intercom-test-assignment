import {describe, it, beforeEach, afterEach} from 'mocha'
import {expect} from 'chai'
import startApp from 'intercom-test-assignment/tests/helpers/start-app'
import destroyApp from 'intercom-test-assignment/tests/helpers/destroy-app'
import IndexPage from 'intercom-test-assignment/tests/pods/index/page-object'
import {usersFixtureCount} from 'intercom-test-assignment/mirage/fixtures/users'
import citiesFixture from 'intercom-test-assignment/mirage/fixtures/cities'



describe('Acceptance | user list', function () {
  let application

  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })

  it('can visit the index page', async function () {
    await IndexPage.visit()
    expect(currentURL()).equal('/')
  })

  it('should contain the user list', async function () {
    await IndexPage.visit()
    expect(IndexPage.userList.isVisible).true
  })

  it(`the user list should contain ${usersFixtureCount} items`, async function () {
    await IndexPage.visit()
    expect(IndexPage.userList.users().count).equal(usersFixtureCount)
  })

  it('should contain the cities chooser', async function () {
    await IndexPage.visit()
    expect(IndexPage.citiesChooser.isVisible).true
  })

  it(`the cities chooser should contain ${citiesFixture.data.length} cities`, async function () {
    await IndexPage.visit()
    expect(IndexPage.citiesChooser.select.options().count).equal(citiesFixture.data.length)
  })
})
