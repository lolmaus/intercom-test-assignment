import Route from 'ember-route'
import RSVP from 'rsvp'



export default Route.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  model ({
    usersURL  = 'https://cdn.rawgit.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt',
    citiesURL = 'https://cdn.rawgit.com/lolmaus/d78a75f903b176a488a0e6533e65ca8b/raw/de5b26e390878c71d007589637934a9d0b683b58/cities.json'
  } = {}) {
    const store = this.get('store')

    return RSVP.hash({
      users:  store.query('user', {url: usersURL}),
      cities: store.query('city', {url: citiesURL}),
    })
  },



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
