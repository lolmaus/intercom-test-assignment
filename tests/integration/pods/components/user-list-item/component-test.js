import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent('user-list-item', 'Integration | Component | user list item',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value')
      // Handle any actions with this.on('myAction', function (val) { ... })
      // Template block usage:
      // this.render(hbs`
      //   {{#user-list-item}}
      //     template content
      //   {{/user-list-item}}
      // `)

      this.render(hbs`{{user-list-item}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
