<script>
import { h } from 'vue'

export default {
  name: 'JsonFunction',
  functional: true,
  props: {
    jsonValue: {
      type: Function,
      required: true
    }
  },
  render () {
    return h('span', {
      class: {
        'vt-jv-item': true,
        'vt-jv-function': true,
      },
      attrs: {
        title: this.jsonValue.toString()
      },
      innerHTML: '&lt;function&gt;'
    })
  }
}
</script>
