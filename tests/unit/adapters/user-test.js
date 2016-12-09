import { expect } from 'chai'
import { describeModule, it } from 'ember-mocha'
import { startMirage } from 'intercom-test-assignment/initializers/ember-cli-mirage'
import RSVP from 'rsvp'
import usersFixture from 'intercom-test-assignment/mirage/fixtures/users'



let m



describeModule(
  'adapter:user',
  'Unit | Adapter | user',
  {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
    beforeEach () {
      this.server = startMirage()
    },

    afterEach () {
      this.server.shutdown()
    },
  },
  function () {



    it('exists', function () {
      const adapter = this.subject()
      expect(adapter).to.be.ok
    })



    it("`query` should return a promise that resolves to a string", async function () {
      const adapter = this.subject()

      const resultPromise = adapter.query(null, null, {
        url: 'https://cdn.rawgit.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt'
      })

      m = "Should return an instance of RSVP.Promise"
      expect(resultPromise, m).instanceof(RSVP.Promise)

      const result = await resultPromise

      m = "Promise should resolve into payload"
      expect(result, m).equal(usersFixture)
    })



  }
)
