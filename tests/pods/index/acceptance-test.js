import {describe, it, beforeEach, afterEach} from 'mocha'
import {expect} from 'chai'
import startApp from 'intercom-test-assignment/tests/helpers/start-app'
import destroyApp from 'intercom-test-assignment/tests/helpers/destroy-app'
import IndexPage from 'intercom-test-assignment/tests/pods/index/page-object'



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

  it('the user list should contain 32 items', async function () {
    await IndexPage.visit()
    expect(IndexPage.userList.items().count).equal(32)
  })
})
