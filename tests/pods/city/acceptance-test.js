import {describe, it, beforeEach, afterEach} from 'mocha'
import {expect} from 'chai'
import startApp from 'intercom-test-assignment/tests/helpers/start-app'
import destroyApp from 'intercom-test-assignment/tests/helpers/destroy-app'
import IndexPage from './page-object'
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

    m = "Should redirect to Dublin"
    expect(currentURL(), m).equal('/dublin')

    m = "should contain the user list"
    expect(IndexPage.userList.isVisible, m).true

    m = `the user list should contain ${usersFixtureCount} items`
    expect(IndexPage.userList.users().count, m).equal(usersFixtureCount)

    let distances = []

    _.times(usersFixtureCount, i => {
      const user = IndexPage.userList.users(i)

      m = `user ${i} should have name`
      expect(user.name.text.length, m).ok

      m = `user ${i} should have latitude`
      expect(user.latitude.text, m).match(/-?\d\d?\.?\d*/)

      m = `user ${i} should have longitude`
      expect(user.longitude.text, m).match(/-?\d\d?\.?\d*/)

      m = `user ${i} should have distance`
      expect(user.distance.text, m).match(/\d+\.?\d?\d? km/)

      const distance = parseInt(user.distance.text.substr(/\d+\.?\d?\d?/), 10)

      distances.push(distance)

      const expectedClass = distance <= 100 ? '-inRange' : '-notInRange'
      const oppositeClass = distance >  100 ? '-inRange' : '-notInRange'

      m = `user ${i} should have class ${expectedClass}`
      expect(user.hasClass(expectedClass), m).true

      m = `user ${i} should not have class ${oppositeClass}`
      expect(user.hasClass(oppositeClass), m).false

      if (!i) return

      m = `distance of user ${i} should be larger than or equal to the distance of user ${i - 1}`
      expect(distance, m).gte(distances[i - 1])
    })

    m = "Should contain the distance slider"
    expect(IndexPage.distance.slider.isVisible, m).true

    m = "The distance label should initially be 100km"
    expect(IndexPage.distance.label.text, m).equal('100 km')

    // distances.forEach((distance, i) => {
    //   const user = IndexPage.userList.users(i)
    // })



    m = "should contain the cities chooser"
    expect(IndexPage.citiesChooser.isVisible, m).true

    m = `the cities chooser should contain ${citiesFixture.data.length} cities`
    expect(IndexPage.citiesChooser.select.options().count, m).equal(citiesFixture.data.length)

    citiesFixture.data.forEach(({id, attributes: {name}}, i) => {
      const city = IndexPage.citiesChooser.select.options(i)

      m = `City ${i} id`
      expect(city.value, m).equal(id)

      m = `City ${i} name`
      expect(city.text, m).equal(name)
    })

    const city = citiesFixture.data[0]

    m = `City select value initial`
    expect(IndexPage.citiesChooser.select.value, m).equal(city.id)

    m = `City name initial`
    expect(IndexPage.citiesChooser.name.text, m).equal(city.attributes.name)

    m = `City latitude initial`
    expect(IndexPage.citiesChooser.latitude.text, m).equal(`${city.attributes.latitude}`)

    m = `City longitude initial`
    expect(IndexPage.citiesChooser.longitude.text, m).equal(`${city.attributes.longitude}`)

    const newCity = citiesFixture.data[1]

    await IndexPage.citiesChooser.select.fill(newCity.id)

    m = `City select should change id after selecting the second city`
    expect(IndexPage.citiesChooser.select.value, m).equal(newCity.id)

    m = `City name should be updated after selecting the second city`
    expect(IndexPage.citiesChooser.name.text, m).equal(newCity.attributes.name)

    m = `City latitude should be updated after selecting the second city`
    expect(IndexPage.citiesChooser.latitude.text, m).equal(`${newCity.attributes.latitude}`)

    m = `City longitude should be updated after selecting the second city`
    expect(IndexPage.citiesChooser.longitude.text, m).equal(`${newCity.attributes.longitude}`)
  })
})
