<script>
import { h } from 'vue'

export default {
  name: 'JsonUndefined',
  functional: true,
  props: {
    jsonValue: {
      type: Object,
      default: null
    }
  },
  render () {
    return h('span', {
      class: {
        'vt-jv-item': true,
        'vt-jv-undefined': true,
      },
      innerText: this.jsonValue === null ? 'null' : 'undefined'
    })
  }
}
</script>
