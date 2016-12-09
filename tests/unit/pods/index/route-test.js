import {expect} from 'chai'
import {describeModule, it} from 'ember-mocha'
import { startMirage } from 'intercom-test-assignment/initializers/ember-cli-mirage'
import RSVP from 'rsvp'
import User from 'intercom-test-assignment/models/user'
import usersFixture from 'intercom-test-assignment/mirage/fixtures/users'



let m

const usersFixtureCount =
  usersFixture
    .split('\n')
    .filter(str => str.trim().length) // Remove blank lines
    .length



describeModule('route:index', 'Unit | Route | index',
  {
    // Specify the other units that are required for this test.
    needs: ['model:user', 'adapter:application', 'serializer:user'],

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

      const resultPromise = route.model()

      m = "Should return an instance of RSVP.Promise"
      expect(resultPromise).instanceof(RSVP.Promise)

      const result = await resultPromise

      console.log({result})

      m = "Promise should resolve into a hash"
      expect(result, m).a('object')

      const users = result.users.toArray()

      m = "Hash should contain users"
      expect(users, m).length(usersFixtureCount)

      m = "Each user should be an instance of the User model"
      users.forEach(user => {
        expect(user instanceof User, m).ok
      })
    })
  }
)
