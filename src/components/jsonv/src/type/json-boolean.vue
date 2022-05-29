<script>
import { h } from 'vue'

export default {
  name: 'JsonBoolean',
  functional: true,
  props: {
    jsonValue: Boolean
  },
  render () {
    return h('span', {
      class: {
        'vt-jv-item': true,
        'vt-jv-boolean': true,
      },
      innerText: this.jsonValue.toString()
    })
  }
}
</script>
