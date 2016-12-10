import Model from 'ember-data/model'
// import attr from 'ember-data/attr'
import {belongsTo} from 'ember-data/relationships'
import {reads} from 'ember-computed'
import computed from 'ember-computed-decorators'

const {
  abs,
  atan2,
  cos,
  PI,
  pow,
  sin,
  sqrt
} = Math



export default Model.extend({

  // ----- Relationships -----
  user: belongsTo('user'),
  city: belongsTo('city'),



  // ----- Static properties -----
  earthMeanRadiusKm: 6371,



  // ----- Computed properties -----
  name:          reads('user.name'),
  latitude:      reads('user.latitude'),
  longitude:     reads('user.longitude'),
  cityLatitude:  reads('city.latitude'),
  cityLongitude: reads('city.longitude'),

  @computed  ('latitude',   'longitude',   'cityLatitude', 'cityLongitude', 'earthMeanRadiusKm')
  distanceKm  (userLatitude, userLongitude, cityLatitude,   cityLongitude,    radius) {
    const phi1    = userLatitude  * PI / 180
    const lambda1 = userLongitude * PI / 180
    const phi2    = cityLatitude  * PI / 180
    const lambda2 = cityLongitude * PI / 180

    const deltaLambda = abs((lambda1 > lambda2) ? lambda1 - lambda2 : lambda2 - lambda1)

    // special case of the Vincenty formula https://en.wikipedia.org/wiki/Great-circle_distance
    const angleRad = atan2(
      sqrt(
        pow((
          cos(phi2) * sin(deltaLambda)
        ), 2)
        + pow((
          cos(phi1) * sin(phi2) - sin(phi1) * cos(phi2) * cos(deltaLambda)
        ), 2)
      ),

      sin(phi1) * sin(phi2) + cos(phi1) * cos(phi2) * cos(deltaLambda)
    )

    return angleRad * radius
  }
})
