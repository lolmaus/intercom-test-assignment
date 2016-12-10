import Route from 'ember-route'
import RSVP from 'rsvp'



export default Route.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  model ({
    cityId,
    usersURL  = 'https://cdn.rawgit.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt',
    citiesURL = 'https://cdn.rawgit.com/lolmaus/d78a75f903b176a488a0e6533e65ca8b/raw/a7919fa7c9b3359a975bdd56a917d26060f7c7fe/cities.json'
  } = {}) {
    const store = this.get('store')

    return RSVP
      .hash({
        users:  store.query('user', {url: usersURL}),
        cities: store.query('city', {url: citiesURL}),
      })

      .then(model => RSVP.hash({
        ...model,
        currentCity: model.cities.findBy('id', cityId),
      }))

      .then(model => RSVP.hash({
        ...model,
        userCityJunctions: this._populateJunctions({
          currentCity: model.currentCity,
          users:       model.users
        })
      }))
  },



  // ----- Custom Methods -----
  _populateJunctions ({currentCity, users}) {
    const store  = this.get('store')

    const payload = {
      data: users.map(user => ({
        id: `${user.id}-${currentCity.id}`,
        type: 'user-city-junction',
        relationships: {
          user: {data: {id: user.id,        type: 'user'}},
          city: {data: {id: currentCity.id, type: 'city'}},
        }
      }))
    }

    return store.push(payload)
  },



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
