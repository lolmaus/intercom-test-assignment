import {expect} from 'chai'
import {describeModule, it} from 'ember-mocha'
import { startMirage } from 'intercom-test-assignment/initializers/ember-cli-mirage'
import RSVP from 'rsvp'
import User from 'intercom-test-assignment/models/user'
import City from 'intercom-test-assignment/models/city'
import UserCityJunction from 'intercom-test-assignment/models/user-city-junction'
import {usersFixtureCount} from 'intercom-test-assignment/mirage/fixtures/users'
import citiesFixture from 'intercom-test-assignment/mirage/fixtures/cities'
import sinon from 'sinon'



let m




describeModule('route:city', 'Unit | Route | city',
  {
    // Specify the other units that are required for this test.
    needs: [
      'adapter:application',
      'serializer:application',
      'model:city',
      'model:user-city-junction',
      'model:user',
      'adapter:user',
      'serializer:user',
    ],

    beforeEach () {
      this.server = startMirage()
    },

    afterEach () {
      this.server.shutdown()
    },
  },
  function () {



    it('exists', function () {
      const route = this.subject()
      expect(route).to.be.ok
    })



    it("`model` should resolve to a hash with records", async function () {
      const route = this.subject()

      const modelPromise = route.model({cityId: 'dublin'})

      m = "Should return an instance of RSVP.Promise"
      expect(modelPromise, m).instanceof(RSVP.Promise)

      const model = await modelPromise

      m = "Promise should resolve into a hash"
      expect(model, m).a('object')

      m = `Hash should contain users`
      expect(model.users, m).ok

      const users = model.users.toArray()

      m = `Hash should contain ${usersFixtureCount} users`
      expect(users, m).length(usersFixtureCount)

      users.forEach(user => {
        m = `User with id ${user.id} should be an instance of the User model`
        expect(user instanceof User, m).true
      })

      m = `Hash should contain cities`
      expect(model.cities, m).ok

      const cities = model.cities.toArray()

      m = `Hash should contain ${citiesFixture.data.length} cities`
      expect(cities, m).length(citiesFixture.data.length)

      m = "Each city should be an instance of the City model"
      cities.forEach(city => {
        expect(city instanceof City, m).true
      })

      m = `Hash should contain a current city`
      expect(model.currentCity instanceof City, m).true

      m = `Current city should be Dublin (by id)`
      expect(model.currentCity.get('id'), m).equal('dublin')

      m = `Current city should be Dublin (by name)`
      expect(model.currentCity.get('name'), m).equal('Dublin')

      m = `Hash should contain junctions`
      expect(model.userCityJunctions, m).ok

      const junctions = model.userCityJunctions.toArray()

      m = `Hash should contain ${usersFixtureCount} junctions`
      expect(junctions, m).length(usersFixtureCount)

      await junctions.forEach(async function (junction) {
        m = "Each junction should be an instance of the UserCityJunction model"
        expect(junction instanceof UserCityJunction, m).true

        m = "Each junction should have a city"
        const city = await junction.get('city')
        expect(city instanceof City, m).true

        m = "Each junction should have a user"
        const user = await junction.get('user')
        expect(user instanceof User, m).true
      })
    })



    it("`_populateJunctions` should call store.push with JSONAPI payload and return the result", function () {
      const store = {
        push: sinon.stub().returns(42)
      }

      const route = this.subject({store})

      const arg = {
        currentCity: {id: 'togliatti'},
        users: [{id: 'foo'}, {id: 'bar'}],
      }

      const expectedPayload = {
        data: [
          {
            id: 'foo-togliatti',
            type: 'user-city-junction',
            relationships: {
              user: {data: {id: 'foo',       type: 'user'}},
              city: {data: {id: 'togliatti', type: 'city'}},
            }
          },
          {
            id: 'bar-togliatti',
            type: 'user-city-junction',
            relationships: {
              user: {data: {id: 'bar',       type: 'user'}},
              city: {data: {id: 'togliatti', type: 'city'}},
            }
          },
        ]
      }

      const result = route._populateJunctions(arg)

      m = "Should call store.push once"
      expect(store.push.calledOnce, m).true

      m = `Should call store.push with JSONAPI payload`
      expect(store.push.args[0][0], m).eql(expectedPayload)

      m = "Should return what store.push returns"
      expect(result, m).equal(42)
    })
  }
)
