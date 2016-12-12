import users  from './fixtures/users'
import cities from './fixtures/cities'

export default function () {

  this.passthrough('/write-coverage')

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  const usersURL  = 'https://cdn.rawgit.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt'
  const citiesURL = 'https://cdn.rawgit.com/lolmaus/d78a75f903b176a488a0e6533e65ca8b/raw/a7919fa7c9b3359a975bdd56a917d26060f7c7fe/cities.json'

  this.get(usersURL,  () => users)
  this.get(citiesURL, () => cities)
}
