import {
  clickable,
  fillable,
  findElement,
  isVisible,
  text,
  value
} from 'intercom-test-assignment/tests/page-object'



// A helper to leverage jQuery for page component queries
export function jquery (callback, errorIfMissing = true) {
  return {
    isDescriptor: true,

    get () {
      const $el = findElement(this)

      if (errorIfMissing && !$el.length) {
        throw new Error(`Element ${this.scope} not found.`)
      }

      return callback($el)
    }
  }
}



export default function component (scope = '', descriptor = {}) {

  // If a descriptor is passed as the first arg
  if (scope === Object(scope)) {
    descriptor = scope
    scope      = null
  }

  return {
    ...(scope ? {scope} : {}), // inject the scope only if it was provided

    blur:         jquery($el => $el.blur()),
    checked:      jquery($el => $el.is(':checked')),
    click:        clickable(),
    disabled:     jquery($el => $el.is('[disabled]')),
    exists:       jquery($el => $el.length > 0, false), // false: don't spit an error if element isn't found
    fill:         fillable(),
    focus:        jquery($el => $el.focus()),
    index:        jquery($el => $el.index()),
    isActive:     jquery($el => $el.is('.is-active')),
    isExpanded:   jquery($el => $el.is('.is-expanded')),
    isError:      jquery($el => $el.is('.is-error')),
    isVisibile:   isVisible(),
    text:         text(),
    value:        value(),

    ...descriptor
  }
}
