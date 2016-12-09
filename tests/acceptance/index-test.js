import {describe, it, beforeEach, afterEach} from 'mocha'
import {expect} from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import IndexPage from '../pages/index'



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
})
