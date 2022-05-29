<script>
import { h } from 'vue'

export default {
  name: 'JsonNumber',
  functional: true,
  props: {
    jsonValue: {
      type: Number,
      required: true
    }
  },
  render () {
    const isInteger = Number.isInteger(this.jsonValue)

    return h('span', {
      class: {
        'vt-jv-item': true,
        'vt-jv-number': true,
        'vt-jv-number-integer': isInteger,
        'vt-jv-number-float': !isInteger,
      },
      innerText: this.jsonValue.toString()
    })
  }
}
</script>
