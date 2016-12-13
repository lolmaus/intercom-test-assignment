import RSVP from 'rsvp'



export default function wrapPromise (promise) {
  return new RSVP.Promise((resolve, reject) => promise.then(resolve, reject))
}
