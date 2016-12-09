import Route from 'ember-route'
import RSVP from 'rsvp'



export default Route.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  model ({
    usersURL = 'https://cdn.rawgit.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt'
  } = {}) {
    const store = this.get('store')

    return RSVP.hash({
      users: store.query('user', {url: usersURL})
    })
  },



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
