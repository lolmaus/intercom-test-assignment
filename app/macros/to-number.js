import computed from 'ember-computed'



export default function toNumberMacro (stringPropertyName, base = 10) {
  return computed(stringPropertyName, function () {
    const value = this.get(stringPropertyName)
    return parseInt(value, base)
  })
}
