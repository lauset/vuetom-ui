import { defineComponent, reactive, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, createElementBlock, createCommentVNode, renderSlot, createTextVNode, toDisplayString, vShow, ref, normalizeStyle, mergeProps, Fragment, computed, provide, h, inject } from 'vue';

const VtAlert = defineComponent({
  name: "VtAlert",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ""
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: "light",
      validator: function(value) {
        return ["light", "dark"].indexOf(value) !== -1;
      }
    }
  },
  emits: {
    close: null
  },
  setup(props, { emit }) {
    const state = reactive({ visible: true });
    let close = (event) => {
      state.visible = false;
      emit("close", event);
    };
    return {
      state,
      close
    };
  },
  computed: {
    typeClass() {
      return `vt-alert--${this.type}`;
    },
    iconClass() {
      const types = {
        success: "vt-icon-success",
        warning: "vt-icon-warning",
        error: "vt-icon-error"
      };
      return types[this.type] || "vt-icon-info";
    },
    isBigIcon() {
      return this.description || this.$slots.default ? "is-big" : "";
    },
    isBoldTitle() {
      return this.description || this.$slots.default ? "is-bold" : "";
    }
  }
});

const _hoisted_1$4 = { class: "vt-alert__content" };
const _hoisted_2$2 = {
  key: 1,
  class: "vt-alert__description"
};
const _hoisted_3$1 = {
  key: 2,
  class: "vt-alert__description"
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "vt-alert-fade" }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        class: normalizeClass(["vt-alert", _ctx.typeClass, _ctx.center ? "is-center" : "", "is-" + _ctx.effect]),
        role: "alert"
      }, [
        _ctx.showIcon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass([[_ctx.iconClass, _ctx.isBigIcon], "vt-alert__icon"])
        }, null, 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_1$4, [
          _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([[_ctx.isBoldTitle], "vt-alert__title"])
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2)) : createCommentVNode("v-if", true),
          _ctx.$slots.default && !_ctx.description ? (openBlock(), createElementBlock("p", _hoisted_2$2, [
            renderSlot(_ctx.$slots, "default")
          ])) : createCommentVNode("v-if", true),
          _ctx.description && !_ctx.$slots.default ? (openBlock(), createElementBlock("p", _hoisted_3$1, toDisplayString(_ctx.description), 1)) : createCommentVNode("v-if", true),
          withDirectives(createElementVNode("i", {
            class: normalizeClass([{ "is-customed": _ctx.closeText !== "", "vt-icon-close": _ctx.closeText === "" }, "vt-alert__closebtn"]),
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.close())
          }, toDisplayString(_ctx.closeText), 3), [
            [vShow, _ctx.closable]
          ])
        ])
      ], 2), [
        [vShow, _ctx.state.visible]
      ])
    ]),
    _: 3
  });
}

VtAlert.render = render$4;
VtAlert.__file = "src/components/alert/src/alert.vue";

VtAlert.install = function(app) {
  app.component(VtAlert.name, VtAlert);
};

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function initRef() {
  const vtButton = ref(null);
  return {
    vtButton
  };
}
const VtButton = {
  name: "VtButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "large"
    },
    icon: String,
    nativeType: {
      type: String,
      default: "button"
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    shadow: Boolean,
    text: Boolean
  },
  emits: {
    click: null
  },
  setup(props, context) {
    return __spreadValues({}, initRef());
  },
  mounted() {
    if (this.circle) {
      this.vtButton.style.height = `${this.vtButton.offsetWidth}px`;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
  computed: {
    _alFormItemSize() {
      return (this.alFormItem || {}).alFormItemSize;
    },
    buttonSize() {
      return this.size || this._alFormItemSize || (window.VuetomUI.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.alForm || {}).disabled;
    }
  }
};

const _hoisted_1$3 = ["disabled", "autofocus", "type"];
const _hoisted_2$1 = {
  key: 0,
  class: "vt-icon-loading"
};
const _hoisted_3 = { key: 2 };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["vt-button", [
      _ctx.type ? "vt-button--" + _ctx.type : "",
      _ctx.buttonSize ? "vt-button--" + _ctx.buttonSize : "",
      {
        "is-disabled": _ctx.buttonDisabled,
        "is-loading": _ctx.loading,
        "is-plain": _ctx.plain,
        "is-round": _ctx.round,
        "is-circle": _ctx.circle,
        "is-shadows": _ctx.shadow,
        "is-text": _ctx.text
      }
    ]]),
    ref: "vtButton",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    disabled: _ctx.buttonDisabled || _ctx.loading,
    autofocus: _ctx.autofocus,
    type: _ctx.nativeType
  }, [
    _ctx.loading ? (openBlock(), createElementBlock("i", _hoisted_2$1)) : createCommentVNode("v-if", true),
    _ctx.icon && !_ctx.loading ? (openBlock(), createElementBlock("i", {
      key: 1,
      class: normalizeClass(["vuetom-icon ", _ctx.icon])
    }, null, 2)) : createCommentVNode("v-if", true),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1$3);
}

VtButton.render = render$3;
VtButton.__file = "src/components/button/src/button.vue";

VtButton.install = function(app) {
  app.component(VtButton.name, VtButton);
};

var script$3 = defineComponent({
  name: "VtCard",
  props: {
    header: {
      type: String,
      default: ""
    },
    bodyStyle: {
      type: String,
      default: ""
    },
    shadow: {
      type: String,
      default: ""
    },
    bgcolor: {
      type: String,
      default: "#FFF"
    }
  }
});

const _hoisted_1$2 = {
  key: 0,
  class: "vt-card__header"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    style: normalizeStyle({ "background-color": _ctx.bgcolor }),
    class: normalizeClass(["vt-card", _ctx.shadow ? "is-" + _ctx.shadow + "-shadow" : "is-always-shadow"])
  }, [
    _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
      renderSlot(_ctx.$slots, "header", {}, () => [
        createTextVNode(toDisplayString(_ctx.header), 1)
      ])
    ])) : createCommentVNode("v-if", true),
    createElementVNode("div", {
      class: "vt-card__body",
      style: normalizeStyle(_ctx.bodyStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4)
  ], 6);
}

script$3.render = render$2;
script$3.__file = "src/components/card/src/card.vue";

script$3.install = function(app) {
  app.component(script$3.name, script$3);
};

var script$2 = defineComponent({
  name: "VtIcon",
  props: {
    name: String
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", {
    class: normalizeClass("vuetom-icon vt-icon-" + _ctx.name)
  }, null, 2);
}

script$2.render = render$1;
script$2.__file = "src/components/icon/src/icon.vue";

script$2.install = function(app) {
  app.component(script$2.name, script$2);
};

var script$1 = defineComponent({
  name: "VtLink",
  props: {
    type: {
      type: String,
      default: "default"
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String,
    icon: String
  },
  setup(props, { emit }) {
    let handleClick = (event) => {
      if (!props.disabled) {
        if (!props.href) {
          emit("click", event);
        }
      }
    };
    return {
      handleClick
    };
  }
});

const _hoisted_1$1 = ["href"];
const _hoisted_2 = {
  key: 1,
  class: "vt-link--inner"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", mergeProps({
    class: [
      "vt-link",
      _ctx.type ? `vt-link--${_ctx.type}` : "",
      _ctx.disabled && "is-disabled",
      _ctx.underline && !_ctx.disabled && "is-underline"
    ],
    href: _ctx.disabled ? null : _ctx.href
  }, _ctx.$attrs, {
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }), [
    _ctx.icon ? (openBlock(), createElementBlock("i", {
      key: 0,
      class: normalizeClass(_ctx.icon)
    }, null, 2)) : createCommentVNode("v-if", true),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("v-if", true),
    _ctx.$slots.icon ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 0 }) : createCommentVNode("v-if", true)
    ], 2112)) : createCommentVNode("v-if", true)
  ], 16, _hoisted_1$1);
}

script$1.render = render;
script$1.__file = "src/components/link/src/link.vue";

script$1.install = function(app) {
  app.component(script$1.name, script$1);
};

var VtRow = defineComponent({
  name: "VtRow",
  componentName: "VtRow",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    gutter: Number,
    type: {
      type: String,
      default: ""
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "top"
    }
  },
  setup(props, { slots }) {
    const style = computed(() => {
      const ret = {};
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    });
    provide("gutter", props.gutter);
    return () => h(props.tag, {
      class: [
        "vt-row",
        props.justify !== "start" ? `is-justify-${props.justify}` : "",
        props.align !== "top" ? `is-align-${props.align}` : "",
        { "vt-row--flex": props.type === "flex" }
      ],
      style
    }, slots);
  }
});

VtRow.install = function(app) {
  app.component(VtRow.name, VtRow);
};

var VtCol = defineComponent({
  name: "VtCol",
  componentName: "VtCol",
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: "div"
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  setup(props, { slots }) {
    const gutter = computed(() => inject("gutter", 0));
    const classList = [];
    const style = {
      paddingLeft: "",
      paddingRight: ""
    };
    if (gutter) {
      style.paddingLeft = `${gutter.value / 2}px`;
      style.paddingRight = style.paddingLeft;
    }
    ["span", "offset", "pull", "push"].forEach((prop) => {
      if (props[prop] || props[prop] === 0) {
        classList.push(prop !== "span" ? `vt-col-${prop}-${props[prop]}` : `vt-col-${props[prop]}`);
      }
    });
    ["xs", "sm", "md", "lg", "xl"].forEach((size) => {
      if (typeof props[size] === "number") {
        classList.push(`vt-col-${size}-${props[size]}`);
      } else if (typeof props[size] === "object") {
        const iProps = props[size];
        Object.keys(iProps).forEach((prop) => {
          classList.push(prop !== "span" ? `vt-col-${size}-${prop}-${iProps[prop]}` : `vt-col-${size}-${iProps[prop]}`);
        });
      }
    });
    return () => h(props.tag, {
      class: ["vt-col", classList],
      style
    }, slots);
  }
});

VtCol.install = function(app) {
  app.component(VtCol.name, VtCol);
};

const _hoisted_1 = { class: "vt-div" };
var script = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const c = ref(1);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(c.value), 1);
    };
  }
});

script.__file = "src/components/div/div.vue";

const components = [
  VtAlert,
  VtButton,
  script$3,
  script$2,
  script$1,
  VtRow,
  VtCol,
  script
];
const install = function(app, opts = {}) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
const VuetomUI = {
  name: "VuetomUI",
  version: "2.3.0",
  install,
  VtAlert,
  VtButton,
  VtCard: script$3,
  VtIcon: script$2,
  VtLink: script$1,
  VtRow,
  VtCol,
  VtDiv: script
};

export { VuetomUI as default };
