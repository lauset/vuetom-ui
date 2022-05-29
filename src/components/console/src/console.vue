<template>
  <div
    v-if="show"
    ref="vtConsoleRef"
    class="vt-console"
    :style="{ height: height, color: color }"
    :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'"
    @click="inputFocus"
  >
    <div v-if="$slots.header || header" class="vt-console__header">
      <slot name="header">
        {{ header }}
      </slot>
    </div>
    <div class="vt-console__body">
      <div ref="printRef" class="vt-console__print"></div>
      <div class="vt-console__input">
        <span class="vt-console__prefix">
          {{ cmdPrefix }}
        </span>
        <div class="vt-console__text">
          <input
            name="vt-cmd"
            type="text"
            ref="cmdRef"
            v-model="cmdStr"
            @keydown.enter="cmdInput"
          />
          <div class="vt-console__b">{{ cmdStr }} <span></span></div>
        </div>
      </div>
    </div>
    <div v-if="$slots.default" class="vt-console__footer">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VtConsole',
  props: {
    header: {
      type: String,
      default: '',
    },
    shadow: {
      type: String,
      default: 'hover',
    },
    show: {
      type: Boolean,
      default: true,
    },
    prefix: {
      type: String,
      default: '&nbsp;',
    },
    cmdPrefix: {
      type: String,
      default: ' >>>',
    },
    height: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#1df800',
    },
    dealy: {
      type: Number,
      default: 500,
    },
    rows: {
      type: Array,
      default: [],
    },
    pushMode: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    cmdSuffix: '<br />',
    cmdStr: '',
    cmdSys: ['clear', 'cls', 'exit'],
    oldRows: ['...'],
  }),

  emits: ['input-change', 'exit'],

  watch: {
    rows: {
      handler(newValue, oldValue) {
        let newRows = []
        if (this.pushMode) {
          newRows = newValue.slice(this.oldRows.length - 1)
          this.oldRows = newValue
        } else {
          newRows = newValue
        }
        this.printDomArr(newRows)
      },
      deep: true,
    },
  },

  methods: {
    printScroll({ pre = this.prefix, val }) {
      this.$refs.printRef.innerHTML += `${pre} ${val}${this.cmdSuffix}`
      this.$refs.vtConsoleRef.scrollTop = this.$refs.printRef.scrollHeight
    },
    clearDomStr() {
      this.$refs.printRef.innerHTML = ''
    },
    printDomArr(arr) {
      if (arr) {
        let self = this
        for (var i = 0; i < arr.length; i++) {
          ;(function (j) {
            const a = arr[i]
            setTimeout(function timer() {
              self.printScroll({ val: a })
            }, j * self.dealy)
          })(i)
        }
      }
    },
    printDomStr(str) {
      this.printDealy(str, this.dealy)
    },
    printCmdStr(val) {
      this.printScroll({ pre: this.cmdPrefix, val })
      this.$refs.cmdRef.value = this.cmdStr = ''
    },
    printWait(callback, val, time) {
      setTimeout(() => {
        callback(val)
      }, time)
    },
    printDealy(val, time) {
      setTimeout(() => {
        this.printScroll({ val })
      }, time)
    },
    printStart(val) {
      const { func, value } = this.checkType(val)
      func(value)
    },
    print(val) {
      this.printStart(val)
    },
    checkType(val) {
      let type = Object.prototype.toString.call(val)
      let func = () => {}
      let value = val
      switch (type) {
        case '[object Number]':
          func = this.printDomStr
          value = val + ''
          break
        case '[object String]':
          func = this.printDomStr
          break
        case '[object Array]':
          func = this.printDomArr
          break
        default:
          func = this.printDomStr
          break
      }
      return {
        func,
        value,
      }
    },
    cmdInit(cmd) {
      let cmdRes = cmd.replace(/(^\s*)|(\s*$)/g, '')
      if (!cmdRes) return
      switch (cmdRes) {
        case 'clear':
        case 'cls':
          this.$refs.cmdRef.value = this.cmdStr = ''
          this.clearDomStr()
          break
        case 'exit':
          this.$emit('exit', false)
          break
        default:
          this.printWait(this.printCmdStr, cmdRes, 0)
          break
      }
    },
    cmdInput(e) {
      let cmdRes = this.cmdStr
      if (this.cmdSys.indexOf(cmdRes) > -1) {
        this.cmdInit(cmdRes)
      } else {
        this.printWait(this.printCmdStr, cmdRes, 0)
        this.$emit('input-change', {
          cmd: cmdRes,
        })
      }
    },
    inputFocus() {
      this.$refs.cmdRef.focus()
    },
  },
})
</script>
