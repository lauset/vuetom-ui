<script>
import { h } from 'vue'
import JsonString from './type/json-string.vue'
import JsonUndefined from './type/json-undefined.vue'
import JsonNumber from './type/json-number.vue'
import JsonBoolean from './type/json-boolean.vue'
import JsonObject from './type/json-object.vue'
import JsonArray from './type/json-array.vue'
import JsonFunction from './type/json-function.vue'
import JsonDate from './type/json-date.vue'

export default {
  name: 'JsonBox',
  inject: ['expandDepth', 'onKeyclick'],
  props: {
    value: {
      type: [Object, Array, String, Number, Boolean, Function, Date],
      default: null,
    },
    keyName: {
      type: String,
      default: '',
    },
    sort: Boolean,
    depth: {
      type: Number,
      default: 0,
    },
    previewMode: Boolean,
    forceExpand: Boolean,
    showArrayIndex: Boolean,
    showDoubleQuotes: Boolean,
    path: {
      type: String,
      default: '$',
    },
  },
  data() {
    return {
      expand: true,
      forceExpandMe: this.forceExpand,
    }
  },
  mounted() {
    this.expand =
      this.previewMode ||
      (this.depth >= this.expandDepth ? false : true) ||
      this.forceExpandMe
  },
  methods: {
    toggle() {
      this.expand = !this.expand

      this.dispatchEvent()
    },
    toggleAll() {
      this.expand = !this.expand
      this.forceExpandMe = this.expand

      this.dispatchEvent()
    },
    dispatchEvent() {
      try {
        this.$el.dispatchEvent(new Event('resized'))
      } catch (e) {
        // handle IE not supporting Event constructor
        var evt = document.createEvent('Event')
        evt.initEvent('resized', true, false)
        this.$el.dispatchEvent(evt)
      }
    },
    getPath() {
      const path = [this.keyName]
      let p = this.$parent
      while (p.depth) {
        if (p.$el.classList.contains('vt-jv-node')) {
          path.push(p.keyName)
        }
        p = p.$parent
      }
      return path.reverse()
    },
  },
  render() {
    let elements = []
    let dataType

    if (this.value === null || this.value === undefined) {
      dataType = JsonUndefined
    } else if (Array.isArray(this.value)) {
      dataType = JsonArray
    } else if (Object.prototype.toString.call(this.value) === '[object Date]') {
      dataType = JsonDate
    } else if (typeof this.value === 'object') {
      dataType = JsonObject
    } else if (typeof this.value === 'number') {
      dataType = JsonNumber
    } else if (typeof this.value === 'string') {
      dataType = JsonString
    } else if (typeof this.value === 'boolean') {
      dataType = JsonBoolean
    } else if (typeof this.value === 'function') {
      dataType = JsonFunction
    }
    const complex =
      this.keyName &&
      this.value &&
      (Array.isArray(this.value) ||
        (typeof this.value === 'object' &&
          Object.prototype.toString.call(this.value) !== '[object Date]'))

    if (!this.previewMode && complex) {
      elements.push(
        h('span', {
          class: {
            'vt-jv-toggle': true,
            open: !!this.expand,
          },
          onClick: (event) => {
            if (event.altKey) {
              this.toggleAll()
            } else {
              this.toggle()
            }
          },
        })
      )
    }

    if (this.keyName) {
      elements.push(
        h('span', {
          class: {
            'vt-jv-key': true,
          },
          innerText: this.showDoubleQuotes
            ? `"${this.keyName}":`
            : `${this.keyName}:`,
          onClick: () => {
            this.onKeyclick(this.path)
          },
        })
      )
    }

    elements.push(
      h(dataType, {
        class: {
          'vt-jv-push': true,
        },
        jsonValue: this.value,
        keyName: this.keyName,
        sort: this.sort,
        depth: this.depth,
        expand: this.expand,
        previewMode: this.previewMode,
        forceExpand: this.forceExpandMe,
        showArrayIndex: this.showArrayIndex,
        showDoubleQuotes: this.showDoubleQuotes,
        path: this.path,
        'onUpdate:expand': (value) => {
          this.expand = value
        },
        'onUpdate:expandAll': (value) => {
          this.expand = value
          this.forceExpandMe = this.expand
        },
      })
    )

    return h(
      'div',
      {
        class: {
          'vt-jv-node': true,
          'vt-jv-key-node': Boolean(this.keyName) && !complex,
          toggle: !this.previewMode && complex,
        },
      },
      elements
    )
  },
}
</script>

<style lang="scss">
.vt-jv-node {
  position: relative;

  &:after {
    content: ',';
  }
  &:last-of-type {
    &:after {
      content: '';
    }
  }

  &.toggle {
    margin-left: 13px !important;
  }

  & .vt-jv-node {
    margin-left: 25px;
  }
}
</style>
