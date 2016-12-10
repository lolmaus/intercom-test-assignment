import { expect } from 'chai'
import {it, describe/*, beforeEach, afterEach*/} from 'mocha'
import {setupModelTest} from 'ember-mocha'
import _ from 'npm:lodash'



describe('Unit | Model | user city junction', function () {

  setupModelTest('user-city-junction', {
    // Specify the other units that are required for this test.
    needs: ['model:user', 'model:city']
  })



  // Replace this with your real tests.
  it('`distance`', function () {
    const model = this.subject({
      latitude:      51.92893,
      longitude:     -10.27699,
      cityLatitude:  53.3393,
      cityLongitude: -6.2576841
    })

    const distance = _.round(model.get('distanceKm'), 2)

    expect(distance).equal(313.25)
  })
})
