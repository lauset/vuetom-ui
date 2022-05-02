/*!
  * vuetom-ui v0.1.0
  * Build Date 2022/5/2 02:50:44 
  * Build Env development
  * @license MIT
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('date-fns')) :
  typeof define === 'function' && define.amd ? define(['vue', 'date-fns'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VuetomUI = factory(global.Vue, global.dateFns));
})(this, (function (vue, dateFns) { 'use strict';

  const VtAlert = vue.defineComponent({
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
      const state = vue.reactive({ visible: true });
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

  const _hoisted_1$b = { class: "vt-alert__content" };
  const _hoisted_2$9 = {
    key: 1,
    class: "vt-alert__description"
  };
  const _hoisted_3$8 = {
    key: 2,
    class: "vt-alert__description"
  };
  function render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.Transition, { name: "vt-alert-fade" }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", {
          class: vue.normalizeClass(["vt-alert", _ctx.typeClass, _ctx.center ? "is-center" : "", "is-" + _ctx.effect]),
          role: "alert"
        }, [
          _ctx.showIcon ? (vue.openBlock(), vue.createElementBlock("i", {
            key: 0,
            class: vue.normalizeClass([[_ctx.iconClass, _ctx.isBigIcon], "vt-alert__icon"])
          }, null, 2)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", _hoisted_1$b, [
            _ctx.title || _ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              class: vue.normalizeClass([[_ctx.isBoldTitle], "vt-alert__title"])
            }, [
              vue.renderSlot(_ctx.$slots, "title", {}, () => [
                vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
              ])
            ], 2)) : vue.createCommentVNode("v-if", true),
            _ctx.$slots.default && !_ctx.description ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_2$9, [
              vue.renderSlot(_ctx.$slots, "default")
            ])) : vue.createCommentVNode("v-if", true),
            _ctx.description && !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_3$8, vue.toDisplayString(_ctx.description), 1)) : vue.createCommentVNode("v-if", true),
            vue.withDirectives(vue.createElementVNode("i", {
              class: vue.normalizeClass([{ "is-customed": _ctx.closeText !== "", "vt-icon-close": _ctx.closeText === "" }, "vt-alert__closebtn"]),
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.close())
            }, vue.toDisplayString(_ctx.closeText), 3), [
              [vue.vShow, _ctx.closable]
            ])
          ])
        ], 2), [
          [vue.vShow, _ctx.state.visible]
        ])
      ]),
      _: 3
    });
  }

  VtAlert.render = render$b;
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
    const vtButton = vue.ref(null);
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
      buttonSize() {
        return this.size || (window.VuetomUI.$ELEMENT || {}).size;
      },
      buttonDisabled() {
        return this.disabled;
      }
    }
  };

  const _hoisted_1$a = ["disabled", "autofocus", "type"];
  const _hoisted_2$8 = {
    key: 0,
    class: "vt-icon-loading"
  };
  const _hoisted_3$7 = { key: 2 };
  function render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", {
      class: vue.normalizeClass(["vt-button", [
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
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_2$8)) : vue.createCommentVNode("v-if", true),
      _ctx.icon && !_ctx.loading ? (vue.openBlock(), vue.createElementBlock("i", {
        key: 1,
        class: vue.normalizeClass(["vuetom-icon ", _ctx.icon])
      }, null, 2)) : vue.createCommentVNode("v-if", true),
      _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$7, [
        vue.renderSlot(_ctx.$slots, "default")
      ])) : vue.createCommentVNode("v-if", true)
    ], 10, _hoisted_1$a);
  }

  VtButton.render = render$a;
  VtButton.__file = "src/components/button/src/button.vue";

  VtButton.install = function(app) {
    app.component(VtButton.name, VtButton);
  };

  var script$a = vue.defineComponent({
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

  const _hoisted_1$9 = {
    key: 0,
    class: "vt-card__header"
  };
  function render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      style: vue.normalizeStyle({ "background-color": _ctx.bgcolor }),
      class: vue.normalizeClass(["vt-card", _ctx.shadow ? "is-" + _ctx.shadow + "-shadow" : "is-always-shadow"])
    }, [
      _ctx.$slots.header || _ctx.header ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
        vue.renderSlot(_ctx.$slots, "header", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.header), 1)
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", {
        class: "vt-card__body",
        style: vue.normalizeStyle(_ctx.bodyStyle)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 4)
    ], 6);
  }

  script$a.render = render$9;
  script$a.__file = "src/components/card/src/card.vue";

  script$a.install = function(app) {
    app.component(script$a.name, script$a);
  };

  var script$9 = vue.defineComponent({
    name: "VtIcon",
    props: {
      name: String
    }
  });

  function render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("i", {
      class: vue.normalizeClass("vuetom-icon vt-icon-" + _ctx.name)
    }, null, 2);
  }

  script$9.render = render$8;
  script$9.__file = "src/components/icon/src/icon.vue";

  script$9.install = function(app) {
    app.component(script$9.name, script$9);
  };

  var script$8 = vue.defineComponent({
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

  const _hoisted_1$8 = ["href"];
  const _hoisted_2$7 = {
    key: 1,
    class: "vt-link--inner"
  };
  function render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("a", vue.mergeProps({
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
      _ctx.icon ? (vue.openBlock(), vue.createElementBlock("i", {
        key: 0,
        class: vue.normalizeClass(_ctx.icon)
      }, null, 2)) : vue.createCommentVNode("v-if", true),
      _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$7, [
        vue.renderSlot(_ctx.$slots, "default")
      ])) : vue.createCommentVNode("v-if", true),
      _ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
        _ctx.$slots.icon ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }) : vue.createCommentVNode("v-if", true)
      ], 2112)) : vue.createCommentVNode("v-if", true)
    ], 16, _hoisted_1$8);
  }

  script$8.render = render$7;
  script$8.__file = "src/components/link/src/link.vue";

  script$8.install = function(app) {
    app.component(script$8.name, script$8);
  };

  var VtRow = vue.defineComponent({
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
      const style = vue.computed(() => {
        const ret = {};
        if (props.gutter) {
          ret.marginLeft = `-${props.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }
        return ret;
      });
      vue.provide("gutter", props.gutter);
      return () => vue.h(props.tag, {
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

  var VtCol = vue.defineComponent({
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
      const gutter = vue.computed(() => vue.inject("gutter", 0));
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
      return () => vue.h(props.tag, {
        class: ["vt-col", classList],
        style
      }, slots);
    }
  });

  VtCol.install = function(app) {
    app.component(VtCol.name, VtCol);
  };

  const _hoisted_1$7 = { class: "vt-div" };
  var script$7 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      const c = vue.ref(1);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, vue.toDisplayString(c.value), 1);
      };
    }
  });

  script$7.__file = "src/components/div/div.vue";

  const DEFAULT_SORT_TYPE = "asc";
  const SORT_TYPES = {
    Ascending: "asc",
    Descending: "desc",
    None: "none"
  };
  const PAGINATION_MODES = {
    Pages: "pages",
    Records: "records"
  };
  const DEFAULT_ROWS_PER_PAGE_DROPDOWN = [10, 20, 30, 40, 50];

  function isObject(obj) {
    return typeof obj === "object" && obj !== null;
  }
  function isEqual(obj1, obj2) {
    if (!isObject(obj1) || !isObject(obj2)) {
      return obj1 === obj2;
    }
    if (obj1 === obj2) {
      return true;
    }
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
    for (let key in obj1) {
      const res = isEqual(obj1[key], obj2[key]);
      if (!res) {
        return false;
      }
    }
    return true;
  }

  let diacritics = {
    a: [
      "a",
      "\xE0",
      "\xE1",
      "\xE2",
      "\xE3",
      "\xE4",
      "\xE5",
      "\xE6",
      "\u0101",
      "\u0103",
      "\u0105",
      "\u01CE",
      "\u01DF",
      "\u01E1",
      "\u01FB",
      "\u0201",
      "\u0203",
      "\u0227",
      "\u0250",
      "\u0251",
      "\u0252",
      "\u0363",
      "\u0430",
      "\u04D1",
      "\u04D3",
      "\u1D43",
      "\u1D44",
      "\u1D8F",
      "\u1E01",
      "\u1E9A",
      "\u1EA1",
      "\u1EA3",
      "\u1EA5",
      "\u1EA7",
      "\u1EA9",
      "\u1EAB",
      "\u1EAD",
      "\u1EAF",
      "\u1EB1",
      "\u1EB3",
      "\u1EB5",
      "\u1EB7",
      "\u2090",
      "\u2C65",
      "\uFF41"
    ],
    b: ["b", "\u0180", "\u0183", "\u0253", "\u15AF", "\u1D47", "\u1D6C", "\u1D80", "\u1E03", "\u1E05", "\u1E07", "\uFF42"],
    c: ["c", "\xE7", "\u0107", "\u0109", "\u010B", "\u010D", "\u0188", "\u023C", "\u0255", "\u0368", "\u1D04", "\u1D9C", "\u1E09", "\u2184", "\uFF43"],
    d: [
      "d",
      "\u010F",
      "\u0111",
      "\u018B",
      "\u018C",
      "\u0221",
      "\u0256",
      "\u0257",
      "\u0369",
      "\u1D48",
      "\u1D6D",
      "\u1D81",
      "\u1D91",
      "\u1E0B",
      "\u1E0D",
      "\u1E0F",
      "\u1E11",
      "\u1E13",
      "\uFF44"
    ],
    e: [
      "e",
      "\xE8",
      "\xE9",
      "\xEA",
      "\xEB",
      "\u0113",
      "\u0115",
      "\u0117",
      "\u0119",
      "\u011B",
      "\u01DD",
      "\u0205",
      "\u0207",
      "\u0229",
      "\u0247",
      "\u0258",
      "\u0364",
      "\u1D49",
      "\u1D92",
      "\u1E15",
      "\u1E17",
      "\u1E19",
      "\u1E1B",
      "\u1E1D",
      "\u1EB9",
      "\u1EBB",
      "\u1EBD",
      "\u1EBF",
      "\u1EC1",
      "\u1EC3",
      "\u1EC5",
      "\u1EC7",
      "\u2091",
      "\uFF45"
    ],
    f: ["f", "\u0192", "\u1D6E", "\u1D82", "\u1DA0", "\u1E1F", "\uFF46"],
    g: ["g", "\u011D", "\u011F", "\u0121", "\u0123", "\u01E5", "\u01E7", "\u01F5", "\u0260", "\u0261", "\u1D4D", "\u1D77", "\u1D79", "\u1D83", "\u1DA2", "\u1E21", "\uFF47"],
    h: [
      "h",
      "\u0125",
      "\u0127",
      "\u0195",
      "\u021F",
      "\u0265",
      "\u0266",
      "\u02AE",
      "\u02AF",
      "\u02B0",
      "\u02B1",
      "\u036A",
      "\u04BA",
      "\u04BB",
      "\u144B",
      "\u1DA3",
      "\u1E23",
      "\u1E25",
      "\u1E27",
      "\u1E29",
      "\u1E2B",
      "\u2C68",
      "\uFF48"
    ],
    i: [
      "i",
      "\xEC",
      "\xED",
      "\xEE",
      "\xEF",
      "\u0129",
      "\u012B",
      "\u012D",
      "\u012F",
      "\u01D0",
      "\u0209",
      "\u020B",
      "\u0268",
      "\u0365",
      "\u1D09",
      "\u1D4E",
      "\u1D62",
      "\u1D96",
      "\u1DA4",
      "\u1E2D",
      "\u1E2F",
      "\u1EC9",
      "\u1ECB",
      "\uFF49"
    ],
    j: ["j", "\u0135", "\u01F0", "\u0249", "\u029D", "\u02B2", "\u1DA1", "\u1DA8", "\uFF4A"],
    k: ["k", "\u0137", "\u0199", "\u01E9", "\u029E", "\u1D4F", "\u1D84", "\u1E31", "\u1E33", "\u1E35", "\u2C6A", "\uFF4B"],
    l: [
      "l",
      "\u013A",
      "\u013C",
      "\u013E",
      "\u0140",
      "\u0142",
      "\u019A",
      "\u0234",
      "\u026B",
      "\u026C",
      "\u026D",
      "\u02E1",
      "\u1D85",
      "\u1DA9",
      "\u1DAA",
      "\u1E37",
      "\u1E39",
      "\u1E3B",
      "\u1E3D",
      "\u2113",
      "\u2C61"
    ],
    m: ["m", "\u026F", "\u0270", "\u0271", "\u036B", "\u1D1F", "\u1D50", "\u1D5A", "\u1D6F", "\u1D86", "\u1DAC", "\u1DAD", "\u1E3F", "\u1E41", "\u1E43", "\u33A1", "\u33A5", "\uFF4D"],
    n: [
      "n",
      "\xF1",
      "\u0144",
      "\u0146",
      "\u0148",
      "\u0149",
      "\u019E",
      "\u01F9",
      "\u0235",
      "\u0272",
      "\u0273",
      "\u1D70",
      "\u1D87",
      "\u1DAE",
      "\u1DAF",
      "\u1E45",
      "\u1E47",
      "\u1E49",
      "\u1E4B",
      "\u207F",
      "\uFF4E"
    ],
    o: [
      "o",
      "\xF2",
      "\xF3",
      "\xF4",
      "\xF5",
      "\xF6",
      "\xF8",
      "\u014D",
      "\u014F",
      "\u0151",
      "\u01A1",
      "\u01D2",
      "\u01EB",
      "\u01ED",
      "\u01FF",
      "\u020D",
      "\u020F",
      "\u022B",
      "\u022D",
      "\u022F",
      "\u0231",
      "\u0275",
      "\u0366",
      "\u043E",
      "\u04E7",
      "\u04E9",
      "\u1D0F",
      "\u1D11",
      "\u1D13",
      "\u1D3C",
      "\u1D52",
      "\u1DB1",
      "\u1E4D",
      "\u1E4F",
      "\u1E51",
      "\u1E53",
      "\u1ECD",
      "\u1ECF",
      "\u1ED1",
      "\u1ED3",
      "\u1ED5",
      "\u1ED7",
      "\u1ED9",
      "\u1EDB",
      "\u1EDD",
      "\u1EDF",
      "\u1EE1",
      "\u1EE3",
      "\u2092",
      "\uFF4F",
      "\u{1042C}"
    ],
    p: ["p", "\u1D56", "\u1D71", "\u1D7D", "\u1D88", "\u1E55", "\u1E57", "\uFF50"],
    q: ["q", "\u024B", "\u02A0", "\u16E9", "\uFF51"],
    r: [
      "r",
      "\u0155",
      "\u0157",
      "\u0159",
      "\u0211",
      "\u0213",
      "\u024D",
      "\u0279",
      "\u027B",
      "\u02B3",
      "\u02B4",
      "\u02B5",
      "\u036C",
      "\u1D63",
      "\u1D72",
      "\u1D89",
      "\u1E59",
      "\u1E5B",
      "\u1E5D",
      "\u1E5F"
    ],
    s: ["s", "\u015B", "\u015D", "\u015F", "\u0161", "\u0219", "\u0282", "\u1506", "\u1D8A", "\u1E61", "\u1E63", "\u1E65", "\u1E67", "\u1E69", "\uFF53"],
    t: [
      "t",
      "\u0163",
      "\u0165",
      "\u0167",
      "\u01AB",
      "\u01AD",
      "\u021B",
      "\u0287",
      "\u036D",
      "\u1D40",
      "\u1D57",
      "\u1D75",
      "\u1DB5",
      "\u1E6B",
      "\u1E6D",
      "\u1E6F",
      "\u1E71",
      "\u1E97",
      "\uFF54"
    ],
    u: [
      "u",
      "\xF9",
      "\xFA",
      "\xFB",
      "\xFC",
      "\u0169",
      "\u016B",
      "\u016D",
      "\u016F",
      "\u0171",
      "\u0173",
      "\u01B0",
      "\u01D4",
      "\u01D6",
      "\u01D8",
      "\u01DA",
      "\u01DC",
      "\u0215",
      "\u0217",
      "\u0367",
      "\u07CE",
      "\u1D58",
      "\u1D64",
      "\u1E73",
      "\u1E75",
      "\u1E77",
      "\u1E79",
      "\u1E7B",
      "\u1EE5",
      "\u1EE7",
      "\u1EE9",
      "\u1EEB",
      "\u1EED",
      "\u1EEF",
      "\u1EF1",
      "\uFF55"
    ],
    v: ["v", "\u028B", "\u036E", "\u1D5B", "\u1D65", "\u1DB9", "\u1E7D", "\u1E7F", "\u2C71", "\uFF56", "\u2C74"],
    w: ["w", "\u0175", "\u02B7", "\u1D42", "\u1E81", "\u1E83", "\u1E85", "\u1E87", "\u1E89", "\u1E98", "\u2C73", "\uFF57"],
    x: ["x", "\u033D", "\u0353", "\u1D8D", "\u036F", "\u1E8B", "\u1E8D", "\u2093", "\uFF58"],
    y: ["y", "\xFD", "\xFF", "\u0177", "\u0233", "\u024F", "\u02B8", "\u1E8F", "\u1EF3", "\u1EF5", "\u1EF7", "\u1EF9", "\uFF59"],
    z: [
      "z",
      "\u017A",
      "\u017C",
      "\u017E",
      "\u01B6",
      "\u0225",
      "\u0240",
      "\u0290",
      "\u0291",
      "\u1646",
      "\u1647",
      "\u1DBB",
      "\u1DBC",
      "\u1DBD",
      "\u1E91",
      "\u1E93",
      "\u1E95",
      "\u2C6C",
      "\uFF5A"
    ]
  };
  const compiledDiactitics = function() {
    let x = {};
    for (let key in diacritics) {
      let ok = diacritics[key];
      for (let rval in ok) {
        let val = ok[rval];
        if (val !== key) {
          x[val] = key;
        }
      }
    }
    return x;
  }();
  const regexNonASCII = /[^a-z0-9\s,.-]/;
  const diacriticless = (text) => {
    if (text.search(regexNonASCII) === -1) {
      return text;
    }
    let result = "";
    let len = text.length;
    for (var i = 0; i < len; i++) {
      let searchChar = text.charAt(i);
      result += searchChar in compiledDiactitics ? compiledDiactitics[searchChar] : searchChar;
    }
    return result;
  };

  const escapeRegExp = (str) => str.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
  var defaultType = {
    format(x) {
      return x;
    },
    filterPredicate(rowval, filter, skipDiacritics = false, fromDropdown = false) {
      if (typeof rowval === "undefined" || rowval === null) {
        return false;
      }
      const rowValue = skipDiacritics ? String(rowval).toLowerCase() : diacriticless(escapeRegExp(String(rowval)).toLowerCase());
      const searchTerm = skipDiacritics ? filter.toLowerCase() : diacriticless(escapeRegExp(filter).toLowerCase());
      return fromDropdown ? rowValue === searchTerm : rowValue.indexOf(searchTerm) > -1;
    },
    compare(x, y) {
      function cook(d) {
        if (typeof d === "undefined" || d === null)
          return "";
        return diacriticless(String(d).toLowerCase());
      }
      x = cook(x);
      y = cook(y);
      if (x < y)
        return -1;
      if (x > y)
        return 1;
      return 0;
    }
  };

  var script$6 = {
    name: "VtPaginationPageInfo",
    props: {
      currentPage: {
        default: 1
      },
      lastPage: {
        default: 1
      },
      totalRecords: {
        default: 0
      },
      ofText: {
        default: "of",
        type: String
      },
      pageText: {
        default: "page",
        type: String
      },
      currentPerPage: {},
      mode: {
        default: PAGINATION_MODES.Records
      },
      infoFn: { default: null }
    },
    data() {
      return {
        id: this.getId()
      };
    },
    computed: {
      pageInfo() {
        return `${this.ofText} ${this.lastPage}`;
      },
      firstRecordOnPage() {
        return (this.currentPage - 1) * this.currentPerPage + 1;
      },
      lastRecordOnPage() {
        return Math.min(this.totalRecords, this.currentPage * this.currentPerPage);
      },
      recordInfo() {
        let first = this.firstRecordOnPage;
        const last = this.lastRecordOnPage;
        if (last === 0) {
          first = 0;
        }
        return `${first} - ${last} ${this.ofText} ${this.totalRecords}`;
      },
      infoParams() {
        let first = this.firstRecordOnPage;
        const last = this.lastRecordOnPage;
        if (last === 0) {
          first = 0;
        }
        return {
          firstRecordOnPage: first,
          lastRecordOnPage: last,
          totalRecords: this.totalRecords,
          currentPage: this.currentPage,
          totalPages: this.lastPage
        };
      }
    },
    methods: {
      getId() {
        return `vt-page-input-${Math.floor(Math.random() * Date.now())}`;
      },
      changePage(event) {
        const value = parseInt(event.target.value, 10);
        //! invalid number
        if (Number.isNaN(value) || value > this.lastPage || value < 1) {
          event.target.value = this.currentPage;
          return false;
        }
        event.target.value = value;
        this.$emit("page-changed", value);
      }
    },
    mounted() {
    },
    components: {}
  };

  const _hoisted_1$6 = { class: "footer__navigation__page-info" };
  const _hoisted_2$6 = { key: 0 };
  const _hoisted_3$6 = ["for"];
  const _hoisted_4$6 = ["id", "value"];
  const _hoisted_5$6 = /* @__PURE__ */ vue.createElementVNode("span", {
    id: "change-page-hint",
    style: { "display": "none" }
  }, " Type a page number and press Enter to change the page. ", -1);
  const _hoisted_6$6 = { key: 2 };
  function render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
      $props.infoFn ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$6, vue.toDisplayString($props.infoFn($options.infoParams)), 1)) : $props.mode === "pages" ? (vue.openBlock(), vue.createElementBlock("form", {
        key: 1,
        onSubmit: _cache[1] || (_cache[1] = vue.withModifiers(() => {
        }, ["prevent"]))
      }, [
        vue.createElementVNode("label", {
          for: $data.id,
          class: "page-info__label"
        }, [
          vue.createElementVNode("span", null, vue.toDisplayString($props.pageText), 1),
          vue.createElementVNode("input", {
            id: $data.id,
            "aria-describedby": "change-page-hint",
            "aria-controls": "vgb-table",
            class: "footer__navigation__page-info__current-entry",
            type: "text",
            onKeyup: _cache[0] || (_cache[0] = vue.withKeys(vue.withModifiers((...args) => $options.changePage && $options.changePage(...args), ["stop"]), ["enter"])),
            value: $props.currentPage
          }, null, 40, _hoisted_4$6),
          vue.createElementVNode("span", null, vue.toDisplayString($options.pageInfo), 1)
        ], 8, _hoisted_3$6),
        _hoisted_5$6
      ], 32)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$6, vue.toDisplayString($options.recordInfo), 1))
    ]);
  }

  script$6.render = render$6;
  script$6.__file = "src/components/table/src/pagination/VtPaginationPageInfo.vue";

  var script$5 = {
    name: "VtPagination",
    props: {
      styleClass: { default: "table table-bordered" },
      total: { default: null },
      perPage: {},
      rtl: { default: false },
      perPageDropdownEnabled: { default: true },
      customRowsPerPageDropdown: { default() {
        return [];
      } },
      paginateDropdownAllowAll: { default: true },
      mode: { default: PAGINATION_MODES.Records },
      nextText: { default: "Next" },
      prevText: { default: "Prev" },
      rowsPerPageText: { default: "Rows per page:" },
      ofText: { default: "of" },
      pageText: { default: "page" },
      allText: { default: "All" },
      infoFn: { default: null }
    },
    data() {
      return {
        id: this.getId(),
        currentPage: 1,
        prevPage: 0,
        currentPerPage: 10,
        rowsPerPageOptions: []
      };
    },
    watch: {
      perPage: {
        handler(newValue, oldValue) {
          this.handlePerPage();
          this.perPageChanged(oldValue);
        },
        immediate: true
      },
      customRowsPerPageDropdown() {
        this.handlePerPage();
      },
      total: {
        handler(newValue, oldValue) {
          if (this.rowsPerPageOptions.indexOf(this.currentPerPage) === -1) {
            this.currentPerPage = newValue;
          }
        }
      }
    },
    computed: {
      pagesCount() {
        const quotient = Math.floor(this.total / this.currentPerPage);
        const remainder = this.total % this.currentPerPage;
        return remainder === 0 ? quotient : quotient + 1;
      },
      nextIsPossible() {
        return this.currentPage < this.pagesCount;
      },
      prevIsPossible() {
        return this.currentPage > 1;
      }
    },
    methods: {
      getId() {
        return `vt-select-rpp-${Math.floor(Math.random() * Date.now())}`;
      },
      changePage(pageNumber, emit = true) {
        if (pageNumber > 0 && this.total > this.currentPerPage * (pageNumber - 1)) {
          this.prevPage = this.currentPage;
          this.currentPage = pageNumber;
          this.pageChanged(emit);
        }
      },
      nextPage() {
        if (this.nextIsPossible) {
          this.prevPage = this.currentPage;
          ++this.currentPage;
          this.pageChanged();
        }
      },
      previousPage() {
        if (this.prevIsPossible) {
          this.prevPage = this.currentPage;
          --this.currentPage;
          this.pageChanged();
        }
      },
      pageChanged(emit = true) {
        const payload = {
          currentPage: this.currentPage,
          prevPage: this.prevPage
        };
        if (!emit)
          payload.noEmit = true;
        this.$emit("page-changed", payload);
      },
      perPageChanged(oldValue) {
        if (oldValue) {
          this.$emit("per-page-changed", { currentPerPage: this.currentPerPage });
        }
        this.changePage(1, false);
      },
      handlePerPage() {
        if (this.customRowsPerPageDropdown !== null && (Array.isArray(this.customRowsPerPageDropdown) && this.customRowsPerPageDropdown.length !== 0)) {
          this.rowsPerPageOptions = JSON.parse(JSON.stringify(this.customRowsPerPageDropdown));
        } else {
          this.rowsPerPageOptions = JSON.parse(JSON.stringify(DEFAULT_ROWS_PER_PAGE_DROPDOWN));
        }
        if (this.perPage) {
          this.currentPerPage = this.perPage;
          let found = false;
          for (let i = 0; i < this.rowsPerPageOptions.length; i++) {
            if (this.rowsPerPageOptions[i] === this.perPage) {
              found = true;
            }
          }
          if (!found && this.perPage !== -1) {
            this.rowsPerPageOptions.unshift(this.perPage);
          }
        } else {
          this.currentPerPage = 10;
        }
      }
    },
    mounted() {
    },
    components: {
      "pagination-page-info": script$6
    }
  };

  const _hoisted_1$5 = { class: "vt-wrap__footer vt-clearfix" };
  const _hoisted_2$5 = {
    key: 0,
    class: "footer__row-count vt-pull-left"
  };
  const _hoisted_3$5 = ["for"];
  const _hoisted_4$5 = ["id"];
  const _hoisted_5$5 = ["value"];
  const _hoisted_6$5 = ["value"];
  const _hoisted_7$4 = { class: "footer__navigation vt-pull-right" };
  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_pagination_page_info = vue.resolveComponent("pagination-page-info");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
      $props.perPageDropdownEnabled ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$5, [
        vue.createElementVNode("form", null, [
          vue.createElementVNode("label", {
            for: $data.id,
            class: "footer__row-count__label"
          }, vue.toDisplayString($props.rowsPerPageText) + ":", 9, _hoisted_3$5),
          vue.withDirectives(vue.createElementVNode("select", {
            id: $data.id,
            autocomplete: "off",
            name: "perPageSelect",
            class: "footer__row-count__select",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.currentPerPage = $event),
            onChange: _cache[1] || (_cache[1] = (...args) => $options.perPageChanged && $options.perPageChanged(...args)),
            "aria-controls": "vt-table"
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.rowsPerPageOptions, (option, idx) => {
              return vue.openBlock(), vue.createElementBlock("option", {
                key: idx,
                value: option
              }, vue.toDisplayString(option), 9, _hoisted_5$5);
            }), 128)),
            $props.paginateDropdownAllowAll ? (vue.openBlock(), vue.createElementBlock("option", {
              key: 0,
              value: $props.total
            }, vue.toDisplayString($props.allText), 9, _hoisted_6$5)) : vue.createCommentVNode("v-if", true)
          ], 40, _hoisted_4$5), [
            [vue.vModelSelect, $data.currentPerPage]
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_7$4, [
        vue.createVNode(_component_pagination_page_info, {
          onPageChanged: $options.changePage,
          "total-records": $props.total,
          "last-page": $options.pagesCount,
          "current-page": $data.currentPage,
          "current-per-page": $data.currentPerPage,
          "of-text": $props.ofText,
          "page-text": $props.pageText,
          "info-fn": $props.infoFn,
          mode: $props.mode
        }, null, 8, ["onPageChanged", "total-records", "last-page", "current-page", "current-per-page", "of-text", "page-text", "info-fn", "mode"]),
        vue.createElementVNode("button", {
          type: "button",
          "aria-controls": "vt-table",
          class: vue.normalizeClass(["footer__navigation__page-btn", { disabled: !$options.prevIsPossible }]),
          onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.previousPage && $options.previousPage(...args), ["prevent", "stop"]))
        }, [
          vue.createElementVNode("span", {
            "aria-hidden": "true",
            class: vue.normalizeClass(["chevron", { "left": !$props.rtl, "right": $props.rtl }])
          }, null, 2),
          vue.createElementVNode("span", null, vue.toDisplayString($props.prevText), 1)
        ], 2),
        vue.createElementVNode("button", {
          type: "button",
          "aria-controls": "vt-table",
          class: vue.normalizeClass(["footer__navigation__page-btn", { disabled: !$options.nextIsPossible }]),
          onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.nextPage && $options.nextPage(...args), ["prevent", "stop"]))
        }, [
          vue.createElementVNode("span", null, vue.toDisplayString($props.nextText), 1),
          vue.createElementVNode("span", {
            "aria-hidden": "true",
            class: vue.normalizeClass(["chevron", { "right": !$props.rtl, "left": $props.rtl }])
          }, null, 2)
        ], 2)
      ])
    ]);
  }

  script$5.render = render$5;
  script$5.__file = "src/components/table/src/pagination/VtPagination.vue";

  var script$4 = {
    name: "VtGlobalSearch",
    props: [
      "value",
      "searchEnabled",
      "globalSearchPlaceholder"
    ],
    emits: [
      "input",
      "keyup",
      "enter"
    ],
    data() {
      return {
        globalSearchTerm: null,
        id: this.getId()
      };
    },
    computed: {
      showControlBar() {
        if (this.searchEnabled)
          return true;
        if (this.$slots && this.$slots["internal-table-actions"])
          return true;
        return false;
      }
    },
    methods: {
      updateValue(value) {
        this.$emit("input", value);
        this.$emit("keyup", value);
      },
      entered(value) {
        this.$emit("enter", value);
      },
      getId() {
        return `vt-search-${Math.floor(Math.random() * Date.now())}`;
      }
    }
  };

  const _hoisted_1$4 = {
    key: 0,
    class: "vt-global-search vt-clearfix"
  };
  const _hoisted_2$4 = { class: "vt-global-search__input vt-pull-left" };
  const _hoisted_3$4 = ["for"];
  const _hoisted_4$4 = /* @__PURE__ */ vue.createElementVNode("span", {
    "aria-hidden": "true",
    class: "input__icon"
  }, [
    /* @__PURE__ */ vue.createElementVNode("div", { class: "magnifying-glass" })
  ], -1);
  const _hoisted_5$4 = /* @__PURE__ */ vue.createElementVNode("span", { class: "sr-only" }, "Search", -1);
  const _hoisted_6$4 = [
    _hoisted_4$4,
    _hoisted_5$4
  ];
  const _hoisted_7$3 = ["id", "placeholder", "value"];
  const _hoisted_8$3 = { class: "vt-global-search__actions vt-pull-right" };
  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return $options.showControlBar ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
      vue.createElementVNode("div", _hoisted_2$4, [
        $props.searchEnabled ? (vue.openBlock(), vue.createElementBlock("form", {
          key: 0,
          onSubmit: _cache[2] || (_cache[2] = vue.withModifiers(() => {
          }, ["prevent"])),
          role: "search"
        }, [
          vue.createElementVNode("label", { for: $data.id }, _hoisted_6$4, 8, _hoisted_3$4),
          vue.createElementVNode("input", {
            id: $data.id,
            type: "text",
            class: "vt-input vt-pull-left",
            placeholder: $props.globalSearchPlaceholder,
            value: $props.value,
            onInput: _cache[0] || (_cache[0] = ($event) => $options.updateValue($event.target.value)),
            onKeyup: _cache[1] || (_cache[1] = vue.withKeys(($event) => $options.entered($event.target.value), ["enter"]))
          }, null, 40, _hoisted_7$3)
        ], 32)) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("div", _hoisted_8$3, [
        vue.renderSlot(_ctx.$slots, "internal-table-actions")
      ])
    ])) : vue.createCommentVNode("v-if", true);
  }

  script$4.render = render$4;
  script$4.__file = "src/components/table/src/VtGlobalSearch.vue";

  var script$3 = {
    name: "VtFilterRow",
    props: [
      "lineNumbers",
      "columns",
      "typedColumns",
      "globalSearchEnabled",
      "selectable",
      "mode"
    ],
    emits: ["filter-changed"],
    watch: {
      columns: {
        handler(newValue, oldValue) {
          this.populateInitialFilters();
        },
        deep: true,
        immediate: true
      }
    },
    data() {
      return {
        columnFilters: {},
        timer: null
      };
    },
    computed: {
      hasFilterRow() {
        for (let i = 0; i < this.columns.length; i++) {
          const col = this.columns[i];
          if (col.filterOptions && col.filterOptions.enabled) {
            return true;
          }
        }
        return false;
      }
    },
    methods: {
      fieldKey(field) {
        if (typeof field === "function" && field.name) {
          return field.name;
        }
        return field;
      },
      reset(emitEvent = false) {
        this.columnFilters = {};
        if (emitEvent) {
          this.$emit("filter-changed", this.columnFilters);
        }
      },
      isFilterable(column) {
        return column.filterOptions && column.filterOptions.enabled;
      },
      isDropdown(column) {
        return this.isFilterable(column) && column.filterOptions.filterDropdownItems && column.filterOptions.filterDropdownItems.length;
      },
      isDropdownObjects(column) {
        return this.isDropdown(column) && typeof column.filterOptions.filterDropdownItems[0] === "object";
      },
      isDropdownArray(column) {
        return this.isDropdown(column) && typeof column.filterOptions.filterDropdownItems[0] !== "object";
      },
      getClasses(column) {
        const firstClass = "filter-th";
        return column.filterOptions && column.filterOptions.styleClass ? [firstClass, ...column.filterOptions.styleClass.split(" ")].join(" ") : firstClass;
      },
      getPlaceholder(column) {
        const placeholder = this.isFilterable(column) && column.filterOptions.placeholder || `Filter ${column.label}`;
        return placeholder;
      },
      getName(column) {
        return `vt-${this.fieldKey(column.field)}`;
      },
      updateFiltersOnEnter(column, value) {
        if (this.timer)
          clearTimeout(this.timer);
        this.updateFiltersImmediately(column.field, value);
      },
      updateFiltersOnKeyup(column, value) {
        if (column.filterOptions.trigger === "enter")
          return;
        this.updateFilters(column, value);
      },
      updateSlotFilter(column, value) {
        let fieldToFilter = column.filterOptions.slotFilterField || column.field;
        if (typeof column.filterOptions.formatValue === "function") {
          value = column.filterOptions.formatValue(value);
        }
        this.updateFiltersImmediately(fieldToFilter, value);
      },
      updateFilters(column, value) {
        if (this.timer)
          clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.updateFiltersImmediately(column.field, value);
        }, 400);
      },
      updateFiltersImmediately(field, value) {
        this.columnFilters[this.fieldKey(field)] = value;
        this.$emit("filter-changed", this.columnFilters);
      },
      populateInitialFilters() {
        for (let i = 0; i < this.columns.length; i++) {
          const col = this.columns[i];
          if (this.isFilterable(col) && typeof col.filterOptions.filterValue !== "undefined" && col.filterOptions.filterValue !== null) {
            this.columnFilters[this.fieldKey(col.field)] = col.filterOptions.filterValue;
          }
        }
        this.$emit("filter-changed", this.columnFilters);
      }
    }
  };

  const _hoisted_1$3 = { key: 0 };
  const _hoisted_2$3 = { key: 0 };
  const _hoisted_3$3 = { key: 1 };
  const _hoisted_4$3 = { key: 0 };
  const _hoisted_5$3 = ["name", "placeholder", "value", "onKeyup", "onInput"];
  const _hoisted_6$3 = ["name", "value", "onChange"];
  const _hoisted_7$2 = {
    value: "",
    key: "-1"
  };
  const _hoisted_8$2 = ["value"];
  const _hoisted_9$2 = ["name", "value", "onChange"];
  const _hoisted_10$2 = {
    value: "",
    key: "-1"
  };
  const _hoisted_11$1 = ["value"];
  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return $options.hasFilterRow ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_1$3, [
      $props.lineNumbers ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_2$3)) : vue.createCommentVNode("v-if", true),
      $props.selectable ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_3$3)) : vue.createCommentVNode("v-if", true),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (column, index) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: index }, [
          !column.hidden ? (vue.openBlock(), vue.createElementBlock("th", {
            key: 0,
            class: vue.normalizeClass($options.getClasses(column))
          }, [
            vue.renderSlot(_ctx.$slots, "column-filter", {
              column,
              updateFilters: $options.updateSlotFilter
            }, () => [
              $options.isFilterable(column) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$3, [
                !$options.isDropdown(column) ? (vue.openBlock(), vue.createElementBlock("input", {
                  key: 0,
                  name: $options.getName(column),
                  type: "text",
                  class: "vt-input",
                  placeholder: $options.getPlaceholder(column),
                  value: $data.columnFilters[$options.fieldKey(column.field)],
                  onKeyup: vue.withKeys(($event) => $options.updateFiltersOnEnter(column, $event.target.value), ["enter"]),
                  onInput: ($event) => $options.updateFiltersOnKeyup(column, $event.target.value)
                }, null, 40, _hoisted_5$3)) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode(" options are a list of primitives "),
                $options.isDropdownArray(column) ? (vue.openBlock(), vue.createElementBlock("select", {
                  key: 1,
                  name: $options.getName(column),
                  class: "vt-select",
                  value: $data.columnFilters[$options.fieldKey(column.field)],
                  onChange: ($event) => $options.updateFiltersImmediately(column.field, $event.target.value)
                }, [
                  vue.createElementVNode("option", _hoisted_7$2, vue.toDisplayString($options.getPlaceholder(column)), 1),
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(column.filterOptions.filterDropdownItems, (option, i) => {
                    return vue.openBlock(), vue.createElementBlock("option", {
                      key: i,
                      value: option
                    }, vue.toDisplayString(option), 9, _hoisted_8$2);
                  }), 128))
                ], 40, _hoisted_6$3)) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode(" options are a list of objects with text and value "),
                $options.isDropdownObjects(column) ? (vue.openBlock(), vue.createElementBlock("select", {
                  key: 2,
                  name: $options.getName(column),
                  class: "vt-select",
                  value: $data.columnFilters[$options.fieldKey(column.field)],
                  onChange: ($event) => $options.updateFiltersImmediately(column.field, $event.target.value)
                }, [
                  vue.createElementVNode("option", _hoisted_10$2, vue.toDisplayString($options.getPlaceholder(column)), 1),
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(column.filterOptions.filterDropdownItems, (option, i) => {
                    return vue.openBlock(), vue.createElementBlock("option", {
                      key: i,
                      value: option.value
                    }, vue.toDisplayString(option.text), 9, _hoisted_11$1);
                  }), 128))
                ], 40, _hoisted_9$2)) : vue.createCommentVNode("v-if", true)
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], 64);
      }), 128))
    ])) : vue.createCommentVNode("v-if", true);
  }

  script$3.render = render$3;
  script$3.__file = "src/components/table/src/VtFilterRow.vue";

  function getColumnFirstSortType(column) {
    return column.firstSortType || DEFAULT_SORT_TYPE;
  }
  function getCurrentPrimarySort(sortArray, column) {
    return sortArray.length === 1 && sortArray[0].field === column.field ? sortArray[0].type : void 0;
  }
  function getNextSort(currentSort, column) {
    if (SORT_TYPES.Descending === getColumnFirstSortType(column) && currentSort === SORT_TYPES.Ascending) {
      return SORT_TYPES.None;
    } else if (currentSort === SORT_TYPES.Ascending) {
      return SORT_TYPES.Descending;
    }
    if (SORT_TYPES.Descending === getColumnFirstSortType(column) && currentSort === SORT_TYPES.Descending) {
      return SORT_TYPES.Ascending;
    } else if (currentSort === SORT_TYPES.Descending) {
      return SORT_TYPES.None;
    }
    if (SORT_TYPES.Descending === getColumnFirstSortType(column) && currentSort === SORT_TYPES.None) {
      return SORT_TYPES.Descending;
    } else {
      return SORT_TYPES.Ascending;
    }
  }
  function getIndex(sortArray, column) {
    for (let i = 0; i < sortArray.length; i++) {
      if (column.field === sortArray[i].field)
        return i;
    }
    return -1;
  }
  const primarySort = (sortArray, column) => {
    const currentPrimarySort = getCurrentPrimarySort(sortArray, column);
    const nextPrimarySort = getNextSort(currentPrimarySort, column);
    return [{
      field: column.field,
      type: currentPrimarySort ? nextPrimarySort : getColumnFirstSortType(column)
    }];
  };
  const secondarySort = (sortArray, column) => {
    const index = getIndex(sortArray, column);
    if (index === -1) {
      sortArray.push({
        field: column.field,
        type: getColumnFirstSortType(column)
      });
    } else {
      sortArray[index].type = getNextSort(sortArray[index].type, column);
    }
    return sortArray;
  };

  var script$2 = {
    name: "VtTableHeader",
    props: {
      lineNumbers: {
        default: false,
        type: Boolean
      },
      selectable: {
        default: false,
        type: Boolean
      },
      allSelected: {
        default: false,
        type: Boolean
      },
      allSelectedIndeterminate: {
        default: false,
        type: Boolean
      },
      columns: {
        type: Array
      },
      mode: {
        type: String
      },
      typedColumns: {},
      sortable: {
        type: Boolean
      },
      multipleColumnSort: {
        type: Boolean,
        default: true
      },
      getClasses: {
        type: Function
      },
      searchEnabled: {
        type: Boolean
      },
      tableRef: {},
      paginated: {}
    },
    emits: [
      "toggle-select-all",
      "sort-change",
      "filter-changed"
    ],
    watch: {
      columns: {
        handler() {
          this.setColumnStyles();
        },
        immediate: true
      },
      tableRef: {
        handler() {
          this.setColumnStyles();
        },
        immediate: true
      },
      paginated: {
        handler() {
          if (this.tableRef) {
            this.setColumnStyles();
          }
        },
        deep: true
      }
    },
    data() {
      return {
        checkBoxThStyle: {},
        lineNumberThStyle: {},
        columnStyles: [],
        sorts: [],
        ro: null
      };
    },
    computed: {},
    methods: {
      reset() {
        this.$refs["filter-row"].reset(true);
      },
      toggleSelectAll() {
        this.$emit("toggle-select-all");
      },
      isSortableColumn(column) {
        const { sortable, actions } = column;
        const isActions = typeof actions === "boolean" ? actions : false;
        if (isActions)
          return;
        const isSortable = typeof sortable === "boolean" ? sortable : this.sortable;
        return isSortable;
      },
      sort(e, column) {
        if (!this.isSortableColumn(column))
          return;
        if (e.shiftKey && this.multipleColumnSort) {
          this.sorts = secondarySort(this.sorts, column);
        } else {
          this.sorts = primarySort(this.sorts, column);
        }
        this.$emit("sort-change", this.sorts);
      },
      setInitialSort(sorts) {
        this.sorts = sorts;
        this.$emit("sort-change", this.sorts);
      },
      getColumnSort(column) {
        for (let i = 0; i < this.sorts.length; i += 1) {
          if (this.sorts[i].field === column.field) {
            return this.sorts[i].type || "asc";
          }
        }
        return null;
      },
      getColumnSortLong(column) {
        return this.getColumnSort(column) === "asc" ? "ascending" : "descending";
      },
      getHeaderClasses(column, index) {
        const classes = Object.assign({}, this.getClasses(index, "th"), {
          sortable: this.isSortableColumn(column),
          "sorting sorting-desc": this.getColumnSort(column) === "desc",
          "sorting sorting-asc": this.getColumnSort(column) === "asc"
        });
        return classes;
      },
      filterRows(columnFilters) {
        this.$emit("filter-changed", columnFilters);
      },
      getWidthStyle(dom) {
        if (window && window.getComputedStyle && dom) {
          const cellStyle = window.getComputedStyle(dom, null);
          return {
            width: cellStyle.width
          };
        }
        return {
          width: "auto"
        };
      },
      setColumnStyles() {
        const colStyles = [];
        for (let i = 0; i < this.columns.length; i++) {
          if (this.tableRef) {
            let skip = 0;
            if (this.selectable)
              skip++;
            if (this.lineNumbers)
              skip++;
            const cell = this.tableRef.rows[0].cells[i + skip];
            colStyles.push(this.getWidthStyle(cell));
          } else {
            colStyles.push({
              minWidth: this.columns[i].width ? this.columns[i].width : "auto",
              maxWidth: this.columns[i].width ? this.columns[i].width : "auto",
              width: this.columns[i].width ? this.columns[i].width : "auto"
            });
          }
        }
        this.columnStyles = colStyles;
      },
      getColumnStyle(column, index) {
        const styleObject = {
          minWidth: column.width ? column.width : "auto",
          maxWidth: column.width ? column.width : "auto",
          width: column.width ? column.width : "auto"
        };
        if (this.tableRef) {
          if (this.selectable)
            index++;
          if (this.lineNumbers)
            index++;
          const cell = this.tableRef.rows[0].cells[index];
          const cellStyle = window.getComputedStyle(cell, null);
          styleObject.width = cellStyle.width;
        }
        return styleObject;
      }
    },
    mounted() {
      this.$nextTick(() => {
        if ("ResizeObserver" in window) {
          this.ro = new ResizeObserver(() => {
            this.setColumnStyles();
          });
          this.ro.observe(this.$parent.$el);
          if (this.tableRef) {
            Array.from(this.$parent.$refs["table-header-primary"].$el.children[0].children).forEach((header) => {
              this.ro.observe(header);
            });
          }
        }
      });
    },
    beforeDestroy() {
      if (this.ro) {
        this.ro.disconnect();
      }
    },
    components: {
      "vt-filter-row": script$3
    }
  };

  const _hoisted_1$2 = {
    key: 0,
    scope: "col",
    class: "line-numbers"
  };
  const _hoisted_2$2 = {
    key: 1,
    scope: "col",
    class: "vt-checkbox-col"
  };
  const _hoisted_3$2 = ["checked", ".indeterminate"];
  const _hoisted_4$2 = ["title", "aria-sort", "aria-controls"];
  const _hoisted_5$2 = ["onClick"];
  const _hoisted_6$2 = { class: "sr-only" };
  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_vt_filter_row = vue.resolveComponent("vt-filter-row");
    return vue.openBlock(), vue.createElementBlock("thead", null, [
      vue.createElementVNode("tr", null, [
        $props.lineNumbers ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_1$2)) : vue.createCommentVNode("v-if", true),
        $props.selectable ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_2$2, [
          vue.createElementVNode("input", {
            type: "checkbox",
            checked: $props.allSelected,
            ".indeterminate": $props.allSelectedIndeterminate,
            onChange: _cache[0] || (_cache[0] = (...args) => $options.toggleSelectAll && $options.toggleSelectAll(...args))
          }, null, 40, _hoisted_3$2)
        ])) : vue.createCommentVNode("v-if", true),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (column, index) => {
          return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: index }, [
            !column.hidden ? (vue.openBlock(), vue.createElementBlock("th", {
              key: 0,
              scope: "col",
              title: column.tooltip,
              class: vue.normalizeClass($options.getHeaderClasses(column, index)),
              style: vue.normalizeStyle($data.columnStyles[index]),
              "aria-sort": $options.getColumnSortLong(column),
              "aria-controls": `col-${index}`
            }, [
              vue.renderSlot(_ctx.$slots, "table-column", { column }, () => [
                vue.createTextVNode(vue.toDisplayString(column.label), 1)
              ]),
              $options.isSortableColumn(column) ? (vue.openBlock(), vue.createElementBlock("button", {
                key: 0,
                onClick: ($event) => $options.sort($event, column)
              }, [
                vue.createElementVNode("span", _hoisted_6$2, " Sort table by " + vue.toDisplayString(column.label) + " in " + vue.toDisplayString($options.getColumnSortLong(column)) + " order ", 1)
              ], 8, _hoisted_5$2)) : vue.createCommentVNode("v-if", true)
            ], 14, _hoisted_4$2)) : vue.createCommentVNode("v-if", true)
          ], 64);
        }), 128))
      ]),
      vue.createVNode(_component_vt_filter_row, {
        ref: "filter-row",
        onFilterChanged: $options.filterRows,
        "global-search-enabled": $props.searchEnabled,
        "line-numbers": $props.lineNumbers,
        selectable: $props.selectable,
        columns: $props.columns,
        mode: $props.mode,
        "typed-columns": $props.typedColumns
      }, {
        "column-filter": vue.withCtx((slotProps) => [
          vue.renderSlot(_ctx.$slots, "column-filter", {
            column: slotProps.column,
            updateFilters: slotProps.updateFilters
          })
        ]),
        _: 3
      }, 8, ["onFilterChanged", "global-search-enabled", "line-numbers", "selectable", "columns", "mode", "typed-columns"])
    ]);
  }

  script$2.render = render$2;
  script$2.__file = "src/components/table/src/VtTableHeader.vue";

  var script$1 = {
    name: "VtHeaderRow",
    props: {
      headerRow: {
        type: Object
      },
      columns: {
        type: Array
      },
      lineNumbers: {
        type: Boolean
      },
      selectable: {
        type: Boolean
      },
      selectAllByGroup: {
        type: Boolean
      },
      collapsable: {
        type: [Boolean, Number],
        default: false
      },
      collectFormatted: {
        type: Function
      },
      formattedRow: {
        type: Function
      },
      getClasses: {
        type: Function
      },
      fullColspan: {
        type: Number
      },
      groupIndex: {
        type: Number
      }
    },
    emits: [
      "vtExpand",
      "select-group-change"
    ],
    data() {
      return {};
    },
    computed: {
      allSelected() {
        const { headerRow } = this;
        return headerRow.children.filter((row) => row.vtSelected).length === headerRow.children.length;
      }
    },
    methods: {
      columnCollapsable(currentIndex) {
        if (this.collapsable === true) {
          return currentIndex === 0;
        }
        return currentIndex === this.collapsable;
      },
      toggleSelectGroup(event) {
        this.$emit("select-group-change", {
          groupIndex: this.groupIndex,
          checked: event.target.checked
        });
      }
    },
    mounted() {
    },
    components: {}
  };

  const _hoisted_1$1 = ["colspan"];
  const _hoisted_2$1 = ["checked"];
  const _hoisted_3$1 = ["innerHTML"];
  const _hoisted_4$1 = { key: 1 };
  const _hoisted_5$1 = {
    key: 1,
    class: "vt-row-header"
  };
  const _hoisted_6$1 = {
    key: 2,
    class: "vt-row-header"
  };
  const _hoisted_7$1 = ["checked"];
  const _hoisted_8$1 = ["onClick"];
  const _hoisted_9$1 = { key: 0 };
  const _hoisted_10$1 = ["innerHTML"];
  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("tr", null, [
      $props.headerRow.mode === "span" ? (vue.openBlock(), vue.createElementBlock("th", {
        key: 0,
        class: "vt-left-align vt-row-header",
        colspan: $props.fullColspan
      }, [
        $props.selectAllByGroup ? vue.renderSlot(_ctx.$slots, "table-header-group-select", {
          key: 0,
          columns: $props.columns,
          row: $props.headerRow
        }, () => [
          vue.createElementVNode("input", {
            type: "checkbox",
            checked: $options.allSelected,
            onChange: _cache[0] || (_cache[0] = ($event) => $options.toggleSelectGroup($event))
          }, null, 40, _hoisted_2$1)
        ]) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("span", {
          onClick: _cache[1] || (_cache[1] = ($event) => $props.collapsable ? _ctx.$emit("vtExpand", !$props.headerRow.vtIsExpanded) : () => {
          })
        }, [
          $props.collapsable ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass(["triangle", { "expand": $props.headerRow.vtIsExpanded }])
          }, null, 2)) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "table-header-row", { row: $props.headerRow }, () => [
            $props.headerRow.html ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              innerHTML: $props.headerRow.label
            }, null, 8, _hoisted_3$1)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$1, vue.toDisplayString($props.headerRow.label), 1))
          ])
        ])
      ], 8, _hoisted_1$1)) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" if the mode is not span, we display every column "),
      $props.headerRow.mode !== "span" && $props.lineNumbers ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_5$1)) : vue.createCommentVNode("v-if", true),
      $props.headerRow.mode !== "span" && $props.selectable ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_6$1, [
        $props.selectAllByGroup ? vue.renderSlot(_ctx.$slots, "table-header-group-select", {
          key: 0,
          columns: $props.columns,
          row: $props.headerRow
        }, () => [
          vue.createElementVNode("input", {
            type: "checkbox",
            checked: $options.allSelected,
            onChange: _cache[2] || (_cache[2] = ($event) => $options.toggleSelectGroup($event))
          }, null, 40, _hoisted_7$1)
        ]) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (column, i) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: i }, [
          $props.headerRow.mode !== "span" && !column.hidden ? (vue.openBlock(), vue.createElementBlock("th", {
            key: 0,
            class: vue.normalizeClass(["vt-row-header", $props.getClasses(i, "td")]),
            onClick: ($event) => $options.columnCollapsable(i) ? _ctx.$emit("vtExpand", !$props.headerRow.vtIsExpanded) : () => {
            }
          }, [
            $options.columnCollapsable(i) ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              class: vue.normalizeClass(["triangle", { "expand": $props.headerRow.vtIsExpanded }])
            }, null, 2)) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "table-header-row", {
              row: $props.headerRow,
              column,
              formattedRow: $props.formattedRow($props.headerRow, true)
            }, () => [
              !column.html ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_9$1, vue.toDisplayString($props.collectFormatted($props.headerRow, column, true)), 1)) : vue.createCommentVNode("v-if", true),
              column.html ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 1,
                innerHTML: $props.collectFormatted($props.headerRow, column, true)
              }, null, 8, _hoisted_10$1)) : vue.createCommentVNode("v-if", true)
            ])
          ], 10, _hoisted_8$1)) : vue.createCommentVNode("v-if", true)
        ], 64);
      }), 128))
    ]);
  }

  script$1.render = render$1;
  script$1.__file = "src/components/table/src/VtHeaderRow.vue";

  const date = Object.assign({}, defaultType);
  date.isRight = true;
  date.compare = function(x, y, column) {
    function cook(d) {
      if (column && column.dateInputFormat) {
        return dateFns.parse(`${d}`, `${column.dateInputFormat}`, new Date());
      } else if (typeof d === "string") {
        try {
          return Date.parse(d);
        } catch (err) {
          return d;
        }
      }
      return d;
    }
    x = cook(x);
    y = cook(y);
    if (!dateFns.isValid(x)) {
      return -1;
    }
    if (!dateFns.isValid(y)) {
      return 1;
    }
    return dateFns.compareAsc(x, y);
  };
  date.format = function(v, column) {
    if (v === void 0 || v === null)
      return "";
    const date2 = dateFns.parse(v, column.dateInputFormat, new Date());
    if (dateFns.isValid(date2)) {
      return dateFns.format(date2, column.dateOutputFormat);
    }
    console.error(`Not a valid date: "${v}"`);
    return null;
  };

  var date$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': date
  });

  const number = Object.assign({}, defaultType);
  number.isRight = true;
  number.filterPredicate = function(rowval, filter) {
    return number.compare(rowval, filter) === 0;
  };
  number.compare = function(x, y) {
    function cook(d) {
      if (d === void 0 || d === null)
        return -Infinity;
      return d.indexOf(".") >= 0 ? parseFloat(d) : parseInt(d, 10);
    }
    x = typeof x === "number" ? x : cook(x);
    y = typeof y === "number" ? y : cook(y);
    if (x < y)
      return -1;
    if (x > y)
      return 1;
    return 0;
  };

  var number$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': number
  });

  const decimal = Object.assign({}, number);
  decimal.format = function(v) {
    if (v === void 0 || v === null)
      return "";
    return parseFloat(Math.round(v * 100) / 100).toFixed(2);
  };

  var decimal$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': decimal
  });

  const percentage = Object.assign({}, number);
  percentage.format = function(v) {
    if (v === void 0 || v === null)
      return "";
    return `${parseFloat(v * 100).toFixed(2)}%`;
  };

  var percentage$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': percentage
  });

  const boolean = Object.assign({}, defaultType);
  boolean.isRight = true;
  boolean.filterPredicate = function(rowval, filter) {
    return boolean.compare(rowval, filter) === 0;
  };
  boolean.compare = function(x, y) {
    function cook(d) {
      if (typeof d === "boolean")
        return d ? 1 : 0;
      if (typeof d === "string")
        return d === "true" ? 1 : 0;
      return -Infinity;
    }
    x = cook(x);
    y = cook(y);
    if (x < y)
      return -1;
    if (x > y)
      return 1;
    return 0;
  };

  var boolean$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': boolean
  });

  var index = {
    date: date$1,
    decimal: decimal$1,
    number: number$1,
    percentage: percentage$1,
    boolean: boolean$1
  };

  const dataTypes = {};
  const coreDataTypes = index;
  Object.keys(coreDataTypes).forEach((key) => {
    const compName = key.replace(/^\.\//, "").replace(/\.js/, "");
    dataTypes[compName] = coreDataTypes[key].default;
  });
  var script = {
    name: "vt-table",
    props: {
      isLoading: { default: null, type: Boolean },
      theme: { default: "" },
      mode: { default: "local" },
      totalRows: {},
      styleClass: { default: "vt-table bordered" },
      columns: {},
      rows: {},
      responsive: { default: true, type: Boolean },
      rtl: Boolean,
      rowStyleClass: { default: null, type: [Function, String] },
      tableOptions: {
        default() {
          return {
            maxHeight: null,
            lineNumbers: false,
            fixedHeader: false
          };
        }
      },
      groupOptions: {
        default() {
          return {
            enabled: false,
            collapsable: false,
            rowKey: null
          };
        }
      },
      selectOptions: {
        default() {
          return {
            enabled: false,
            selectionInfoClass: "",
            selectionText: "rows selected",
            clearSelectionText: "clear",
            disableSelectInfo: false,
            selectAllByGroup: false
          };
        }
      },
      sortOptions: {
        default() {
          return {
            enabled: true,
            multipleColumns: true,
            initialSortBy: {}
          };
        }
      },
      pageOptions: {
        default() {
          return {
            enabled: false,
            position: "bottom",
            perPage: 10,
            perPageDropdown: null,
            perPageDropdownEnabled: true,
            dropdownAllowAll: true,
            mode: "records",
            infoFn: null
          };
        }
      },
      searchOptions: {
        default() {
          return {
            enabled: false,
            trigger: null,
            externalQuery: null,
            searchFn: null,
            placeholder: "Search Table"
          };
        }
      }
    },
    data: () => ({
      tableLoading: false,
      nextText: "Next",
      prevText: "Previous",
      rowsPerPageText: "Rows per page",
      ofText: "of",
      allText: "All",
      pageText: "page",
      selectable: false,
      selectOnCheckboxOnly: false,
      selectAllByPage: true,
      disableSelectInfo: false,
      selectionInfoClass: "",
      selectionText: "rows selected",
      clearSelectionText: "clear",
      maintainExpanded: true,
      expandedRowKeys: /* @__PURE__ */ new Set(),
      sortable: true,
      defaultSortBy: null,
      multipleColumnSort: true,
      searchEnabled: false,
      searchTrigger: null,
      externalSearchQuery: null,
      searchFn: null,
      searchPlaceholder: "Search Table",
      searchSkipDiacritics: false,
      perPage: null,
      paginate: false,
      paginateOnTop: false,
      paginateOnBottom: true,
      customRowsPerPageDropdown: [],
      paginateDropdownAllowAll: true,
      paginationMode: "records",
      paginationInfoFn: null,
      currentPage: 1,
      currentPerPage: 10,
      sorts: [],
      globalSearchTerm: "",
      filteredRows: [],
      columnFilters: {},
      forceSearch: false,
      sortChanged: false,
      dataTypes: dataTypes || {}
    }),
    emits: [
      "select-all",
      "selected-rows-change",
      "search",
      "per-page-change",
      "page-change",
      "update:isLoading",
      "sort-change",
      "row-click",
      "row-dblclick",
      "row-aux-click",
      "cell-click",
      "column-filter"
    ],
    watch: {
      rows: {
        handler() {
          this.$emit("update:isLoading", false);
          this.filterRows(this.columnFilters, false);
        },
        deep: true,
        immediate: true
      },
      selectOptions: {
        handler() {
          this.initializeSelect();
        },
        deep: true,
        immediate: true
      },
      pageOptions: {
        handler(newValue, oldValue) {
          if (!isEqual(newValue, oldValue)) {
            this.initializePagination();
          }
        },
        deep: true,
        immediate: true
      },
      searchOptions: {
        handler() {
          if (this.searchOptions.externalQuery !== void 0 && this.searchOptions.externalQuery !== this.searchTerm) {
            this.externalSearchQuery = this.searchOptions.externalQuery;
            this.handleSearch();
          }
          this.initializeSearch();
        },
        deep: true,
        immediate: true
      },
      sortOptions: {
        handler(newValue, oldValue) {
          if (!isEqual(newValue, oldValue)) {
            this.initializeSort();
          }
        },
        deep: true
      },
      selectedRows(newValue, oldValue) {
        if (!isEqual(newValue, oldValue)) {
          this.$emit("selected-rows-change", {
            selectedRows: this.selectedRows
          });
        }
      }
    },
    computed: {
      tableStyles() {
        return this.tableStyleClasses;
      },
      hasFooterSlot() {
        return !!this.$slots["footer-actions"];
      },
      wrapperStyles() {
        return {
          overflow: "scroll-y",
          maxHeight: this.tableOptions.maxHeight ? this.tableOptions.maxHeight : "auto"
        };
      },
      rowKeyField() {
        return this.groupOptions.rowKey || "vgt_header_id";
      },
      hasHeaderRowTemplate() {
        return !!this.$slots["table-header-row"];
      },
      showEmptySlot() {
        if (!this.paginated.length)
          return true;
        if (this.paginated[0].label === "no groups" && !this.paginated[0].children.length) {
          return true;
        }
        return false;
      },
      allSelected() {
        return this.selectedRowCount > 0 && (this.selectAllByPage && this.selectedPageRowsCount === this.totalPageRowCount || !this.selectAllByPage && this.selectedRowCount === this.totalRowCount);
      },
      allSelectedIndeterminate() {
        return !this.allSelected && (this.selectAllByPage && this.selectedPageRowsCount > 0 || !this.selectAllByPage && this.selectedRowCount > 0);
      },
      selectionInfo() {
        return `${this.selectedRowCount} ${this.selectionText}`;
      },
      selectedRowCount() {
        return this.selectedRows.length;
      },
      selectedPageRowsCount() {
        return this.selectedPageRows.length;
      },
      selectedPageRows() {
        const selectedRows = [];
        this.paginated.forEach((headerRow) => {
          headerRow.children.forEach((row) => {
            if (row.vtSelected) {
              selectedRows.push(row);
            }
          });
        });
        return selectedRows;
      },
      selectedRows() {
        const selectedRows = [];
        this.processedRows.forEach((headerRow) => {
          headerRow.children.forEach((row) => {
            if (row.vtSelected) {
              selectedRows.push(row);
            }
          });
        });
        return selectedRows.sort((r1, r2) => r1.originalIndex - r2.originalIndex);
      },
      fullColspan() {
        let fullColspan = 0;
        for (let i = 0; i < this.columns.length; i += 1) {
          if (!this.columns[i].hidden) {
            fullColspan += 1;
          }
        }
        if (this.tableOptions.lineNumbers)
          fullColspan++;
        if (this.selectable)
          fullColspan++;
        return fullColspan;
      },
      groupHeaderOnTop() {
        if (this.groupOptions && this.groupOptions.enabled && this.groupOptions.headerPosition && this.groupOptions.headerPosition === "bottom") {
          return false;
        }
        if (this.groupOptions && this.groupOptions.enabled)
          return true;
        return false;
      },
      groupHeaderOnBottom() {
        if (this.groupOptions && this.groupOptions.enabled && this.groupOptions.headerPosition && this.groupOptions.headerPosition === "bottom") {
          return true;
        }
        return false;
      },
      totalRowCount() {
        const total = this.processedRows.reduce((total2, headerRow) => {
          const childrenCount = headerRow.children ? headerRow.children.length : 0;
          return total2 + childrenCount;
        }, 0);
        return total;
      },
      totalPageRowCount() {
        const total = this.paginated.reduce((total2, headerRow) => {
          const childrenCount = headerRow.children ? headerRow.children.length : 0;
          return total2 + childrenCount;
        }, 0);
        return total;
      },
      wrapStyleClasses() {
        let classes = "vt-wrap";
        if (this.rtl)
          classes += " rtl";
        classes += ` ${this.theme}`;
        return classes;
      },
      tableStyleClasses() {
        let classes = this.styleClass;
        classes += ` ${this.theme}`;
        return classes;
      },
      searchTerm() {
        return this.externalSearchQuery != null ? this.externalSearchQuery : this.globalSearchTerm;
      },
      globalSearchAllowed() {
        if (this.searchEnabled && !!this.globalSearchTerm && this.searchTrigger !== "enter") {
          return true;
        }
        if (this.externalSearchQuery != null && this.searchTrigger !== "enter") {
          return true;
        }
        if (this.forceSearch) {
          this.forceSearch = false;
          return true;
        }
        return false;
      },
      processedRows() {
        let computedRows = this.filteredRows;
        if (this.mode === "remote") {
          return computedRows;
        }
        if (this.globalSearchAllowed) {
          const allRows = [];
          this.filteredRows.forEach((headerRow) => {
            allRows.push(...headerRow.children);
          });
          const filteredRows = [];
          allRows.forEach((row) => {
            for (let i = 0; i < this.columns.length; i += 1) {
              const col = this.columns[i];
              if (!col.globalSearchDisabled) {
                if (this.searchFn) {
                  const foundMatch = this.searchFn(row, col, this.collectFormatted(row, col), this.searchTerm);
                  if (foundMatch) {
                    filteredRows.push(row);
                    break;
                  }
                } else {
                  const matched = defaultType.filterPredicate(this.collectFormatted(row, col), this.searchTerm, this.searchSkipDiacritics);
                  if (matched) {
                    filteredRows.push(row);
                    break;
                  }
                }
              }
            }
          });
          this.$emit("search", {
            searchTerm: this.searchTerm,
            rowCount: filteredRows.length
          });
          computedRows = [];
          this.filteredRows.forEach((headerRow) => {
            const i = headerRow.vgt_header_id;
            const children = filteredRows.filter((r) => r.vtId === i);
            if (children.length) {
              const newHeaderRow = JSON.parse(JSON.stringify(headerRow));
              newHeaderRow.children = children;
              computedRows.push(newHeaderRow);
            }
          });
        }
        if (this.sorts.length) {
          computedRows.forEach((cRows) => {
            cRows.children.sort((xRow, yRow) => {
              let sortValue;
              for (let i = 0; i < this.sorts.length; i += 1) {
                const srt = this.sorts[i];
                if (srt.type === SORT_TYPES.None) {
                  sortValue = sortValue || xRow.originalIndex - yRow.originalIndex;
                } else {
                  const column = this.getColumnForField(srt.field);
                  const xvalue = this.collect(xRow, srt.field);
                  const yvalue = this.collect(yRow, srt.field);
                  const { sortFn } = column;
                  if (sortFn && typeof sortFn === "function") {
                    sortValue = sortValue || sortFn(xvalue, yvalue, column, xRow, yRow) * (srt.type === SORT_TYPES.Descending ? -1 : 1);
                  } else {
                    sortValue = sortValue || column.typeDef.compare(xvalue, yvalue, column) * (srt.type === SORT_TYPES.Descending ? -1 : 1);
                  }
                }
              }
              return sortValue;
            });
          });
        }
        if (this.searchTrigger === "enter") {
          this.filteredRows = computedRows;
        }
        return computedRows;
      },
      paginated() {
        if (!this.processedRows.length)
          return [];
        if (this.mode === "remote") {
          return this.processedRows;
        }
        let paginatedRows = [];
        this.processedRows.forEach((childRows) => {
          if (this.groupOptions.enabled) {
            paginatedRows.push(childRows);
          }
          paginatedRows.push(...childRows.children);
        });
        if (this.paginate) {
          let pageStart = (this.currentPage - 1) * this.currentPerPage;
          if (pageStart >= paginatedRows.length || this.currentPerPage === -1) {
            this.currentPage = 1;
            pageStart = 0;
          }
          let pageEnd = paginatedRows.length + 1;
          if (this.currentPerPage !== -1) {
            pageEnd = this.currentPage * this.currentPerPage;
          }
          paginatedRows = paginatedRows.slice(pageStart, pageEnd);
        }
        const reconstructedRows = [];
        paginatedRows.forEach((flatRow) => {
          if (flatRow.vgt_header_id !== void 0) {
            this.handleExpanded(flatRow);
            const newHeaderRow = JSON.parse(JSON.stringify(flatRow));
            newHeaderRow.children = [];
            reconstructedRows.push(newHeaderRow);
          } else {
            let hRow = reconstructedRows.find((r) => r.vgt_header_id === flatRow.vtId);
            if (!hRow) {
              hRow = this.processedRows.find((r) => r.vgt_header_id === flatRow.vtId);
              if (hRow) {
                hRow = JSON.parse(JSON.stringify(hRow));
                hRow.children = [];
                reconstructedRows.push(hRow);
              }
            }
            hRow.children.push(flatRow);
          }
        });
        return reconstructedRows;
      },
      originalRows() {
        const rows = JSON.parse(JSON.stringify(this.rows));
        let nestedRows = [];
        if (!this.groupOptions.enabled) {
          nestedRows = this.handleGrouped([
            {
              label: "no groups",
              children: rows
            }
          ]);
        } else {
          nestedRows = this.handleGrouped(rows);
        }
        let index = 0;
        nestedRows.forEach((headerRow) => {
          headerRow.children.forEach((row) => {
            row.originalIndex = index++;
          });
        });
        return nestedRows;
      },
      typedColumns() {
        const columns = this.columns;
        for (let i = 0; i < this.columns.length; i++) {
          const column = columns[i];
          column.typeDef = this.dataTypes[column.type] || defaultType;
        }
        return columns;
      },
      hasRowClickListener() {
        return this.$attrs && this.$attrs["row-click"];
      }
    },
    methods: {
      handleExpanded(headerRow) {
        if (this.maintainExpanded && this.expandedRowKeys.has(headerRow[this.rowKeyField])) {
          headerRow["vgtIsExpanded"] = true;
        } else {
          headerRow["vgtIsExpanded"] = false;
        }
      },
      toggleExpand(id) {
        const headerRow = this.filteredRows.find((r) => r[this.rowKeyField] === id);
        if (headerRow) {
          headerRow["vgtIsExpanded"] = !headerRow.vgtIsExpanded;
        }
        if (this.maintainExpanded && headerRow.vgtIsExpanded) {
          this.expandedRowKeys.add(headerRow[this.rowKeyField]);
        } else {
          this.expandedRowKeys.delete(headerRow[this.rowKeyField]);
        }
      },
      expandAll() {
        this.filteredRows.forEach((row) => {
          row["vgtIsExpanded"] = true;
          if (this.maintainExpanded) {
            this.expandedRowKeys.add(row[this.rowKeyField]);
          }
        });
      },
      collapseAll() {
        this.filteredRows.forEach((row) => {
          row["vgtIsExpanded"] = false;
          this.expandedRowKeys.clear();
        });
      },
      getColumnForField(field) {
        for (let i = 0; i < this.typedColumns.length; i += 1) {
          if (this.typedColumns[i].field === field)
            return this.typedColumns[i];
        }
      },
      handleSearch() {
        this.resetTable();
        if (this.mode === "remote") {
          this.$emit("search", {
            searchTerm: this.searchTerm
          });
        }
      },
      reset() {
        this.initializeSort();
        this.changePage(1);
        this.$refs["table-header-primary"].reset(true);
        if (this.$refs["table-header-secondary"]) {
          this.$refs["table-header-secondary"].reset(true);
        }
      },
      emitSelectedRows() {
        this.$emit("select-all", {
          selected: this.selectedRowCount === this.totalRowCount,
          selectedRows: this.selectedRows
        });
      },
      unselectAllInternal(forceAll) {
        const rows = this.selectAllByPage && !forceAll ? this.paginated : this.filteredRows;
        rows.forEach((headerRow, i) => {
          headerRow.children.forEach((row, j) => {
            row["vtSelected"] = false;
          });
        });
        this.emitSelectedRows();
      },
      toggleSelectAll() {
        if (this.allSelected) {
          this.unselectAllInternal();
          return;
        }
        const rows = this.selectAllByPage ? this.paginated : this.filteredRows;
        rows.forEach((headerRow) => {
          headerRow.children.forEach((row) => {
            row["vtSelected"] = true;
          });
        });
        this.emitSelectedRows();
      },
      toggleSelectGroup(event, headerRow) {
        headerRow.children.forEach((row) => {
          row["vtSelected"] = event;
        });
      },
      changePage(value) {
        const enabled = this.paginate;
        let { paginationBottom, paginationTop } = this.$refs;
        if (enabled) {
          if (this.paginateOnTop && paginationTop) {
            paginationTop.currentPage = value;
          }
          if (this.paginateOnBottom && paginationBottom) {
            paginationBottom.currentPage = value;
          }
          this.currentPage = value;
        }
      },
      pageChangedEvent() {
        return {
          currentPage: this.currentPage,
          currentPerPage: this.currentPerPage,
          total: Math.floor(this.totalRowCount / this.currentPerPage)
        };
      },
      pageChanged(pagination) {
        this.currentPage = pagination.currentPage;
        if (!pagination.noEmit) {
          const pageChangedEvent = this.pageChangedEvent();
          pageChangedEvent.prevPage = pagination.prevPage;
          this.$emit("page-change", pageChangedEvent);
          if (this.mode === "remote") {
            this.$emit("update:isLoading", true);
          }
        }
      },
      perPageChanged(pagination) {
        this.currentPerPage = pagination.currentPerPage;
        let paginationPosition = this.pageOptions.position;
        if (this.$refs.paginationTop && (paginationPosition === "top" || paginationPosition === "both")) {
          this.$refs.paginationTop.currentPerPage = this.currentPerPage;
        }
        if (this.$refs.paginationBottom && (paginationPosition === "bottom" || paginationPosition === "both")) {
          this.$refs.paginationBottom.currentPerPage = this.currentPerPage;
        }
        const perPageChangedEvent = this.pageChangedEvent();
        this.$emit("per-page-change", perPageChangedEvent);
        if (this.mode === "remote") {
          this.$emit("update:isLoading", true);
        }
      },
      changeSort(sorts) {
        this.sorts = sorts;
        this.$emit("sort-change", sorts);
        this.changePage(1);
        if (this.mode === "remote") {
          this.$emit("update:isLoading", true);
          return;
        }
        this.sortChanged = true;
      },
      onCheckboxClicked(row, index, event) {
        row["vtSelected"] = !row.vtSelected;
        this.$emit("row-click", {
          row,
          idx: index,
          selected: !!row.vtSelected,
          event
        });
      },
      onRowDoubleClicked(row, index, event) {
        this.$emit("row-dblclick", {
          row,
          idx: index,
          selected: !!row.vtSelected,
          event
        });
      },
      onRowClicked(row, index, event) {
        if (this.selectable && !this.selectOnCheckboxOnly) {
          row["vtSelected"] = !row.vtSelected;
        }
        this.$emit("row-click", {
          row,
          idx: index,
          selected: !!row.vtSelected,
          event
        });
      },
      onRowAuxClicked(row, index, event) {
        this.$emit("row-aux-click", {
          row,
          idx: index,
          selected: !!row.vtSelected,
          event
        });
      },
      onCellClicked(row, column, rowIndex, event) {
        this.$emit("cell-click", {
          row,
          column,
          rowIndex,
          event
        });
      },
      searchTableOnEnter() {
        if (this.searchTrigger === "enter") {
          this.handleSearch();
          this.filteredRows = JSON.parse(JSON.stringify(this.originalRows));
          this.forceSearch = true;
          this.sortChanged = true;
        }
      },
      searchTableOnKeyUp() {
        if (this.searchTrigger !== "enter") {
          this.handleSearch();
        }
      },
      resetTable() {
        this.unselectAllInternal(true);
        this.changePage(1);
      },
      collect(obj, field) {
        function dig(obj2, selector) {
          let result = obj2;
          const splitter = selector.split(".");
          for (let i = 0; i < splitter.length; i++) {
            if (typeof result === "undefined" || result === null) {
              return void 0;
            }
            result = result[splitter[i]];
          }
          return result;
        }
        if (typeof field === "function")
          return field(obj);
        if (typeof field === "string")
          return dig(obj, field);
        return void 0;
      },
      collectFormatted(obj, column, headerRow = false) {
        let value;
        if (headerRow && column.headerField) {
          value = this.collect(obj, column.headerField);
        } else {
          value = this.collect(obj, column.field);
        }
        if (value === void 0)
          return "";
        if (column.formatFn && typeof column.formatFn === "function") {
          return column.formatFn(value, obj);
        }
        let type = column.typeDef;
        if (!type) {
          type = this.dataTypes[column.type] || defaultType;
        }
        let result = type.format(value, column);
        return result;
      },
      formattedRow(row, isHeaderRow = false) {
        const formattedRow = {};
        for (let i = 0; i < this.typedColumns.length; i++) {
          const col = this.typedColumns[i];
          if (col.field) {
            formattedRow[col.field] = this.collectFormatted(row, col, isHeaderRow);
          }
        }
        return formattedRow;
      },
      getClasses(index, element, row) {
        const { typeDef, fixed, [`${element}Class`]: custom } = this.typedColumns[index];
        let { isRight } = typeDef;
        if (this.rtl)
          isRight = true;
        const classes = {
          "vt-right-align": isRight,
          "vt-left-align": !isRight,
          "vt-fixed-right": fixed === "right",
          "vt-fixed-left": fixed === "left"
        };
        if (typeof custom === "function") {
          classes[custom(row)] = true;
        } else if (typeof custom === "string") {
          classes[custom] = true;
        }
        return classes;
      },
      getActionsClasses(index, element) {
        this.typedColumns.length;
        let valueColumns = this.typedColumns.filter((t) => t.actions != true);
        let newLen = valueColumns == null ? void 0 : valueColumns.length;
        let currentColumn = this.typedColumns[newLen + index];
        let isAction = (currentColumn == null ? void 0 : currentColumn.actions) || false;
        if (!isAction)
          return;
        let fixed = currentColumn == null ? void 0 : currentColumn.fixed;
        const classes = {
          "vt-fixed-right": fixed === "right",
          "vt-fixed-left": fixed === "left"
        };
        return classes;
      },
      filterRows(columnFilters, fromFilter = true) {
        this.columnFilters = columnFilters;
        let computedRows = JSON.parse(JSON.stringify(this.originalRows));
        let instancesOfFiltering = false;
        if (this.columnFilters && Object.keys(this.columnFilters).length) {
          if (this.mode !== "remote" || fromFilter) {
            this.changePage(1);
          }
          if (fromFilter) {
            this.$emit("column-filter", {
              columnFilters: this.columnFilters
            });
          }
          if (this.mode === "remote") {
            if (fromFilter) {
              this.$emit("update:isLoading", true);
            } else {
              this.filteredRows = computedRows;
            }
            return;
          }
          const fieldKey = (field) => {
            if (typeof field === "function" && field.name) {
              return field.name;
            }
            return field;
          };
          for (let i = 0; i < this.typedColumns.length; i++) {
            const col = this.typedColumns[i];
            if (this.columnFilters[fieldKey(col.field)]) {
              instancesOfFiltering = true;
              computedRows.forEach((headerRow) => {
                const newChildren = headerRow.children.filter((row) => {
                  if (col.filterOptions && typeof col.filterOptions.filterFn === "function") {
                    return col.filterOptions.filterFn(this.collect(row, col.field), this.columnFilters[fieldKey(col.field)]);
                  }
                  const { typeDef } = col;
                  return typeDef.filterPredicate(this.collect(row, col.field), this.columnFilters[fieldKey(col.field)], false, col.filterOptions && typeof col.filterOptions.filterDropdownItems === "object");
                });
                headerRow.children = newChildren;
              });
            }
          }
        }
        if (instancesOfFiltering) {
          this.filteredRows = computedRows.filter((h) => h.children && h.children.length);
        } else {
          this.filteredRows = computedRows;
        }
      },
      getCurrentIndex(rowId) {
        let index = 0;
        let found = false;
        for (let i = 0; i < this.paginated.length; i += 1) {
          const headerRow = this.paginated[i];
          const { children } = headerRow;
          if (children && children.length) {
            for (let j = 0; j < children.length; j += 1) {
              const c = children[j];
              if (c.originalIndex === rowId) {
                found = true;
                break;
              }
              index += 1;
            }
          }
          if (found)
            break;
        }
        return (this.currentPage - 1) * this.currentPerPage + index + 1;
      },
      getRowStyleClass(row) {
        let classes = "";
        if (this.hasRowClickListener)
          classes += "clickable";
        let rowStyleClasses;
        if (typeof this.rowStyleClass === "function") {
          rowStyleClasses = this.rowStyleClass(row);
        } else {
          rowStyleClasses = this.rowStyleClass;
        }
        if (rowStyleClasses) {
          classes += ` ${rowStyleClasses}`;
        }
        return classes;
      },
      handleGrouped(originalRows) {
        originalRows.forEach((headerRow, i) => {
          headerRow.vgt_header_id = i;
          if (this.groupOptions.maintainExpanded && this.expandedRowKeys.has(headerRow[this.groupOptions.rowKey])) {
            headerRow["vgtIsExpanded"] = true;
          }
          headerRow.children.forEach((childRow) => {
            childRow.vtId = i;
          });
        });
        return originalRows;
      },
      initializePagination() {
        const {
          enabled,
          perPage,
          position,
          perPageDropdown,
          perPageDropdownEnabled,
          dropdownAllowAll,
          nextLabel,
          prevLabel,
          rowsPerPageLabel,
          ofLabel,
          pageLabel,
          allLabel,
          setCurrentPage,
          mode,
          infoFn
        } = this.pageOptions;
        if (typeof enabled === "boolean") {
          this.paginate = enabled;
        }
        if (typeof perPage === "number") {
          this.perPage = perPage;
        }
        if (position === "top") {
          this.paginateOnTop = true;
          this.paginateOnBottom = false;
        } else if (position === "both") {
          this.paginateOnTop = true;
          this.paginateOnBottom = true;
        }
        if (Array.isArray(perPageDropdown) && perPageDropdown.length) {
          this.customRowsPerPageDropdown = perPageDropdown;
          if (!this.perPage) {
            [this.perPage] = perPageDropdown;
          }
        }
        if (typeof perPageDropdownEnabled === "boolean") {
          this.perPageDropdownEnabled = perPageDropdownEnabled;
        }
        if (typeof dropdownAllowAll === "boolean") {
          this.paginateDropdownAllowAll = dropdownAllowAll;
        }
        if (typeof mode === "string") {
          this.paginationMode = mode;
        }
        if (typeof nextLabel === "string") {
          this.nextText = nextLabel;
        }
        if (typeof prevLabel === "string") {
          this.prevText = prevLabel;
        }
        if (typeof rowsPerPageLabel === "string") {
          this.rowsPerPageText = rowsPerPageLabel;
        }
        if (typeof ofLabel === "string") {
          this.ofText = ofLabel;
        }
        if (typeof pageLabel === "string") {
          this.pageText = pageLabel;
        }
        if (typeof allLabel === "string") {
          this.allText = allLabel;
        }
        if (typeof setCurrentPage === "number") {
          setTimeout(() => {
            this.changePage(setCurrentPage);
          }, 500);
        }
        if (typeof infoFn === "function") {
          this.paginationInfoFn = infoFn;
        }
      },
      initializeSearch() {
        const {
          enabled,
          trigger,
          externalQuery,
          searchFn,
          placeholder,
          skipDiacritics
        } = this.searchOptions;
        if (typeof enabled === "boolean") {
          this.searchEnabled = enabled;
        }
        if (trigger === "enter") {
          this.searchTrigger = trigger;
        }
        if (typeof externalQuery === "string") {
          this.externalSearchQuery = externalQuery;
        }
        if (typeof searchFn === "function") {
          this.searchFn = searchFn;
        }
        if (typeof placeholder === "string") {
          this.searchPlaceholder = placeholder;
        }
        if (typeof skipDiacritics === "boolean") {
          this.searchSkipDiacritics = skipDiacritics;
        }
      },
      initializeSort() {
        const { enabled, initialSortBy, multipleColumns } = this.sortOptions;
        const initSortBy = JSON.parse(JSON.stringify(initialSortBy || {}));
        if (typeof enabled === "boolean") {
          this.sortable = enabled;
        }
        if (typeof multipleColumns === "boolean") {
          this.multipleColumnSort = multipleColumns;
        }
        if (typeof initSortBy === "object") {
          const ref = this.tableOptions.fixedHeader ? this.$refs["table-header-secondary"] : this.$refs["table-header-primary"];
          if (Array.isArray(initSortBy)) {
            ref.setInitialSort(initSortBy);
          } else {
            const hasField = Object.prototype.hasOwnProperty.call(initSortBy, "field");
            if (hasField)
              ref.setInitialSort([initSortBy]);
          }
        }
      },
      initializeSelect() {
        const {
          enabled,
          selectionInfoClass,
          selectionText,
          clearSelectionText,
          selectOnCheckboxOnly,
          selectAllByPage,
          disableSelectInfo,
          selectAllByGroup
        } = this.selectOptions;
        if (typeof enabled === "boolean") {
          this.selectable = enabled;
        }
        if (typeof selectOnCheckboxOnly === "boolean") {
          this.selectOnCheckboxOnly = selectOnCheckboxOnly;
        }
        if (typeof selectAllByPage === "boolean") {
          this.selectAllByPage = selectAllByPage;
        }
        if (typeof selectAllByGroup === "boolean") {
          this.selectAllByGroup = selectAllByGroup;
        }
        if (typeof disableSelectInfo === "boolean") {
          this.disableSelectInfo = disableSelectInfo;
        }
        if (typeof selectionInfoClass === "string") {
          this.selectionInfoClass = selectionInfoClass;
        }
        if (typeof selectionText === "string") {
          this.selectionText = selectionText;
        }
        if (typeof clearSelectionText === "string") {
          this.clearSelectionText = clearSelectionText;
        }
      }
    },
    mounted() {
      if (this.perPage) {
        this.currentPerPage = this.perPage;
      }
      this.initializeSort();
    },
    components: {
      "vt-pagination": script$5,
      "vt-global-search": script$4,
      "vt-header-row": script$1,
      "vt-table-header": script$2
    }
  };

  const _hoisted_1 = {
    key: 0,
    class: "vt-loading vt-center-align"
  };
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("span", { class: "vt-loading__content" }, " Loading... ", -1);
  const _hoisted_3 = { class: "vt-selection-info-row__actions vt-pull-right" };
  const _hoisted_4 = { class: "vt-fixed-header" };
  const _hoisted_5 = ["id"];
  const _hoisted_6 = ["id"];
  const _hoisted_7 = ["onDblclick", "onClick", "onAuxclick"];
  const _hoisted_8 = {
    key: 0,
    class: "line-numbers"
  };
  const _hoisted_9 = ["onClick"];
  const _hoisted_10 = ["disabled", "checked"];
  const _hoisted_11 = ["onClick", "data-label"];
  const _hoisted_12 = { key: 0 };
  const _hoisted_13 = ["innerHTML"];
  const _hoisted_14 = { key: 0 };
  const _hoisted_15 = ["colspan"];
  const _hoisted_16 = { class: "vt-center-align vt-text-disabled" };
  const _hoisted_17 = /* @__PURE__ */ vue.createTextVNode(" No Data ");
  const _hoisted_18 = {
    key: 2,
    class: "vt-wrap__actions-footer"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_vt_pagination = vue.resolveComponent("vt-pagination");
    const _component_vt_global_search = vue.resolveComponent("vt-global-search");
    const _component_vt_table_header = vue.resolveComponent("vt-table-header");
    const _component_vt_header_row = vue.resolveComponent("vt-header-row");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass($options.wrapStyleClasses)
    }, [
      $props.isLoading ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.renderSlot(_ctx.$slots, "loadingContent", {}, () => [
          _hoisted_2
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(["vt-inner-wrap", { "is-loading": $props.isLoading }])
      }, [
        _ctx.paginate && _ctx.paginateOnTop ? vue.renderSlot(_ctx.$slots, "pagination-top", {
          key: 0,
          pageChanged: $options.pageChanged,
          perPageChanged: $options.perPageChanged,
          total: $props.totalRows || $options.totalRowCount
        }, () => [
          vue.createVNode(_component_vt_pagination, {
            ref: "paginationTop",
            onPageChanged: $options.pageChanged,
            onPerPageChanged: $options.perPageChanged,
            perPage: _ctx.perPage,
            rtl: $props.rtl,
            total: $props.totalRows || $options.totalRowCount,
            mode: _ctx.paginationMode,
            nextText: _ctx.nextText,
            prevText: _ctx.prevText,
            rowsPerPageText: _ctx.rowsPerPageText,
            perPageDropdownEnabled: $props.pageOptions.perPageDropdownEnabled,
            customRowsPerPageDropdown: _ctx.customRowsPerPageDropdown,
            paginateDropdownAllowAll: _ctx.paginateDropdownAllowAll,
            ofText: _ctx.ofText,
            pageText: _ctx.pageText,
            allText: _ctx.allText,
            "info-fn": _ctx.paginationInfoFn
          }, null, 8, ["onPageChanged", "onPerPageChanged", "perPage", "rtl", "total", "mode", "nextText", "prevText", "rowsPerPageText", "perPageDropdownEnabled", "customRowsPerPageDropdown", "paginateDropdownAllowAll", "ofText", "pageText", "allText", "info-fn"])
        ]) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_vt_global_search, {
          onKeyup: $options.searchTableOnKeyUp,
          onEnter: $options.searchTableOnEnter,
          value: _ctx.globalSearchTerm,
          onInput: _cache[0] || (_cache[0] = ($event) => _ctx.globalSearchTerm = $event),
          "search-enabled": _ctx.searchEnabled && _ctx.externalSearchQuery == null,
          "global-search-placeholder": _ctx.searchPlaceholder
        }, vue.createSlots({ _: 2 }, [
          _ctx.$slots["table-actions"] ? {
            name: "internal-table-actions",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "table-actions")
            ])
          } : void 0
        ]), 1032, ["onKeyup", "onEnter", "value", "search-enabled", "global-search-placeholder"]),
        $options.selectedRowCount && !_ctx.disableSelectInfo ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: vue.normalizeClass(["vt-selection-info-row clearfix", _ctx.selectionInfoClass])
        }, [
          vue.createTextVNode(vue.toDisplayString($options.selectionInfo) + " ", 1),
          vue.createElementVNode("a", {
            href: "",
            onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => $options.unselectAllInternal(true), ["prevent"]))
          }, vue.toDisplayString(_ctx.clearSelectionText), 1),
          vue.createElementVNode("div", _hoisted_3, [
            vue.renderSlot(_ctx.$slots, "selected-row-actions")
          ])
        ], 2)) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", _hoisted_4, [
          $props.tableOptions.fixedHeader ? (vue.openBlock(), vue.createElementBlock("table", {
            key: 0,
            id: "vt-table",
            class: vue.normalizeClass($options.tableStyleClasses)
          }, [
            vue.createElementVNode("colgroup", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (column, index) => {
                return vue.openBlock(), vue.createElementBlock("col", {
                  key: index,
                  id: `col-${index}`
                }, null, 8, _hoisted_5);
              }), 128))
            ]),
            vue.createCommentVNode(" Table header "),
            vue.createVNode(_component_vt_table_header, {
              ref: "table-header-secondary",
              onToggleSelectAll: $options.toggleSelectAll,
              onSortChange: $options.changeSort,
              onFilterChanged: $options.filterRows,
              columns: $props.columns,
              "line-numbers": $props.tableOptions.lineNumbers,
              selectable: _ctx.selectable,
              "all-selected": $options.allSelected,
              "all-selected-indeterminate": $options.allSelectedIndeterminate,
              mode: $props.mode,
              sortable: _ctx.sortable,
              "multiple-column-sort": _ctx.multipleColumnSort,
              "typed-columns": $options.typedColumns,
              getClasses: $options.getClasses,
              searchEnabled: _ctx.searchEnabled,
              paginated: $options.paginated,
              "table-ref": _ctx.$refs.table
            }, {
              "table-column": vue.withCtx((slotProps) => [
                vue.renderSlot(_ctx.$slots, "table-column", {
                  column: slotProps.column
                }, () => [
                  vue.createElementVNode("span", null, vue.toDisplayString(slotProps.column.label), 1)
                ])
              ]),
              "column-filter": vue.withCtx((slotProps) => [
                vue.renderSlot(_ctx.$slots, "column-filter", {
                  column: slotProps.column,
                  updateFilters: slotProps.updateFilters
                })
              ]),
              _: 3
            }, 8, ["onToggleSelectAll", "onSortChange", "onFilterChanged", "columns", "line-numbers", "selectable", "all-selected", "all-selected-indeterminate", "mode", "sortable", "multiple-column-sort", "typed-columns", "getClasses", "searchEnabled", "paginated", "table-ref"])
          ], 2)) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass({ "vt-responsive": $props.responsive }),
          style: vue.normalizeStyle($options.wrapperStyles)
        }, [
          vue.createElementVNode("table", {
            id: "vt-table",
            ref: "table",
            class: vue.normalizeClass($options.tableStyles)
          }, [
            vue.createElementVNode("colgroup", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (column, index) => {
                return vue.openBlock(), vue.createElementBlock("col", {
                  key: index,
                  id: `col-${index}`
                }, null, 8, _hoisted_6);
              }), 128))
            ]),
            vue.createCommentVNode(" Table header "),
            vue.createVNode(_component_vt_table_header, {
              ref: "table-header-primary",
              onToggleSelectAll: $options.toggleSelectAll,
              onSortChange: $options.changeSort,
              onFilterChanged: $options.filterRows,
              columns: $props.columns,
              "line-numbers": $props.tableOptions.lineNumbers,
              selectable: _ctx.selectable,
              "all-selected": $options.allSelected,
              "all-selected-indeterminate": $options.allSelectedIndeterminate,
              mode: $props.mode,
              sortable: _ctx.sortable,
              "multiple-column-sort": _ctx.multipleColumnSort,
              "typed-columns": $options.typedColumns,
              getClasses: $options.getClasses,
              searchEnabled: _ctx.searchEnabled
            }, {
              "table-column": vue.withCtx((slotProps) => [
                vue.renderSlot(_ctx.$slots, "table-column", {
                  column: slotProps.column
                }, () => [
                  vue.createElementVNode("span", null, vue.toDisplayString(slotProps.column.label), 1)
                ])
              ]),
              "column-filter": vue.withCtx((slotProps) => [
                vue.renderSlot(_ctx.$slots, "column-filter", {
                  column: slotProps.column,
                  updateFilters: slotProps.updateFilters
                })
              ]),
              _: 3
            }, 8, ["onToggleSelectAll", "onSortChange", "onFilterChanged", "columns", "line-numbers", "selectable", "all-selected", "all-selected-indeterminate", "mode", "sortable", "multiple-column-sort", "typed-columns", "getClasses", "searchEnabled"]),
            vue.createCommentVNode(" Table body starts here "),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.paginated, (headerRow, hIndex) => {
              return vue.openBlock(), vue.createElementBlock("tbody", { key: hIndex }, [
                vue.createCommentVNode(" if group row header is at the top "),
                $options.groupHeaderOnTop ? (vue.openBlock(), vue.createBlock(_component_vt_header_row, {
                  key: 0,
                  onVgtExpand: ($event) => $options.toggleExpand(headerRow[$options.rowKeyField]),
                  "header-row": headerRow,
                  columns: $props.columns,
                  "line-numbers": $props.tableOptions.lineNumbers,
                  selectable: _ctx.selectable,
                  "select-all-by-group": _ctx.selectAllByGroup,
                  collapsable: $props.groupOptions.collapsable,
                  "collect-formatted": $options.collectFormatted,
                  "formatted-row": $options.formattedRow,
                  class: vue.normalizeClass($options.getRowStyleClass(headerRow)),
                  "get-classes": $options.getClasses,
                  "full-colspan": $options.fullColspan,
                  groupIndex: hIndex,
                  onSelectGroupChange: ($event) => $options.toggleSelectGroup($event, headerRow)
                }, vue.createSlots({ _: 2 }, [
                  $options.hasHeaderRowTemplate ? {
                    name: "table-header-row",
                    fn: vue.withCtx((slotProps) => [
                      vue.renderSlot(_ctx.$slots, "table-header-row", {
                        column: slotProps.column,
                        formattedRow: slotProps.formattedRow,
                        row: slotProps.row
                      })
                    ])
                  } : void 0
                ]), 1032, ["onVgtExpand", "header-row", "columns", "line-numbers", "selectable", "select-all-by-group", "collapsable", "collect-formatted", "formatted-row", "class", "get-classes", "full-colspan", "groupIndex", "onSelectGroupChange"])) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode(" normal rows here. we loop over all rows "),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(headerRow.children, (row, index) => {
                  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                    ($props.groupOptions.collapsable ? headerRow.vgtIsExpanded : true) ? (vue.openBlock(), vue.createElementBlock("tr", {
                      key: row.originalIndex,
                      class: vue.normalizeClass($options.getRowStyleClass(row)),
                      onDblclick: ($event) => $options.onRowDoubleClicked(row, index, $event),
                      onClick: ($event) => $options.onRowClicked(row, index, $event),
                      onAuxclick: ($event) => $options.onRowAuxClicked(row, index, $event)
                    }, [
                      $props.tableOptions.lineNumbers ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_8, vue.toDisplayString($options.getCurrentIndex(row.originalIndex)), 1)) : vue.createCommentVNode("v-if", true),
                      _ctx.selectable ? (vue.openBlock(), vue.createElementBlock("th", {
                        key: 1,
                        onClick: vue.withModifiers(($event) => $options.onCheckboxClicked(row, index, $event), ["stop"]),
                        class: "vt-checkbox-col"
                      }, [
                        vue.createElementVNode("input", {
                          type: "checkbox",
                          disabled: row.vgtDisabled,
                          checked: row.vtSelected
                        }, null, 8, _hoisted_10)
                      ], 8, _hoisted_9)) : vue.createCommentVNode("v-if", true),
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (column, i) => {
                        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                          !column.hidden && column.field ? (vue.openBlock(), vue.createElementBlock("td", {
                            key: i,
                            onClick: ($event) => $options.onCellClicked(row, column, index, $event),
                            class: vue.normalizeClass($options.getClasses(i, "td", row)),
                            "data-label": column.label
                          }, [
                            vue.renderSlot(_ctx.$slots, "table-row", {
                              row,
                              column,
                              formattedRow: $options.formattedRow(row),
                              index
                            }, () => [
                              !column.html ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_12, vue.toDisplayString($options.collectFormatted(row, column)), 1)) : (vue.openBlock(), vue.createElementBlock("span", {
                                key: 1,
                                innerHTML: $options.collect(row, column.field)
                              }, null, 8, _hoisted_13))
                            ])
                          ], 10, _hoisted_11)) : vue.createCommentVNode("v-if", true)
                        ], 64);
                      }), 256)),
                      (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (count, i) => {
                        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                          _ctx.$slots[`body-actions-${count}`] ? (vue.openBlock(), vue.createElementBlock("td", {
                            key: 0,
                            class: vue.normalizeClass($options.getActionsClasses(i, "td"))
                          }, [
                            vue.renderSlot(_ctx.$slots, `body-actions-${count}`, { row })
                          ], 2)) : vue.createCommentVNode("v-if", true)
                        ], 64);
                      }), 64))
                    ], 42, _hoisted_7)) : vue.createCommentVNode("v-if", true)
                  ], 64);
                }), 256)),
                vue.createCommentVNode(" if group row header is at the bottom "),
                $options.groupHeaderOnBottom ? (vue.openBlock(), vue.createBlock(_component_vt_header_row, {
                  key: 1,
                  "header-row": headerRow,
                  columns: $props.columns,
                  "line-numbers": $props.tableOptions.lineNumbers,
                  selectable: _ctx.selectable,
                  "select-all-by-group": _ctx.selectAllByGroup,
                  "collect-formatted": $options.collectFormatted,
                  "formatted-row": $options.formattedRow,
                  "get-classes": $options.getClasses,
                  "full-colspan": $options.fullColspan,
                  groupIndex: _ctx.index,
                  onSelectGroupChange: ($event) => $options.toggleSelectGroup($event, headerRow)
                }, vue.createSlots({ _: 2 }, [
                  $options.hasHeaderRowTemplate ? {
                    name: "table-header-row",
                    fn: vue.withCtx((slotProps) => [
                      vue.renderSlot(_ctx.$slots, "table-header-row", {
                        column: slotProps.column,
                        formattedRow: slotProps.formattedRow,
                        row: slotProps.row
                      })
                    ])
                  } : void 0
                ]), 1032, ["header-row", "columns", "line-numbers", "selectable", "select-all-by-group", "collect-formatted", "formatted-row", "get-classes", "full-colspan", "groupIndex", "onSelectGroupChange"])) : vue.createCommentVNode("v-if", true)
              ]);
            }), 128)),
            $options.showEmptySlot ? (vue.openBlock(), vue.createElementBlock("tbody", _hoisted_14, [
              vue.createElementVNode("tr", null, [
                vue.createElementVNode("td", { colspan: $options.fullColspan }, [
                  vue.createElementVNode("div", _hoisted_16, [
                    vue.renderSlot(_ctx.$slots, "no-data", {}, () => [
                      _hoisted_17
                    ])
                  ])
                ], 8, _hoisted_15)
              ])
            ])) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], 6),
        $options.hasFooterSlot ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_18, [
          vue.renderSlot(_ctx.$slots, "footer-actions")
        ])) : vue.createCommentVNode("v-if", true),
        _ctx.paginate && _ctx.paginateOnBottom ? vue.renderSlot(_ctx.$slots, "pagination-bottom", {
          key: 3,
          pageChanged: $options.pageChanged,
          perPageChanged: $options.perPageChanged,
          total: $props.totalRows || $options.totalRowCount
        }, () => [
          vue.createVNode(_component_vt_pagination, {
            ref: "paginationBottom",
            onPageChanged: $options.pageChanged,
            onPerPageChanged: $options.perPageChanged,
            perPage: _ctx.perPage,
            rtl: $props.rtl,
            total: $props.totalRows || $options.totalRowCount,
            mode: _ctx.paginationMode,
            nextText: _ctx.nextText,
            prevText: _ctx.prevText,
            rowsPerPageText: _ctx.rowsPerPageText,
            perPageDropdownEnabled: $props.pageOptions.perPageDropdownEnabled,
            customRowsPerPageDropdown: _ctx.customRowsPerPageDropdown,
            paginateDropdownAllowAll: _ctx.paginateDropdownAllowAll,
            ofText: _ctx.ofText,
            pageText: _ctx.pageText,
            allText: _ctx.allText,
            "info-fn": _ctx.paginationInfoFn
          }, null, 8, ["onPageChanged", "onPerPageChanged", "perPage", "rtl", "total", "mode", "nextText", "prevText", "rowsPerPageText", "perPageDropdownEnabled", "customRowsPerPageDropdown", "paginateDropdownAllowAll", "ofText", "pageText", "allText", "info-fn"])
        ]) : vue.createCommentVNode("v-if", true)
      ], 2)
    ], 2);
  }

  script.render = render;
  script.__file = "src/components/table/src/VtTable.vue";

  script.install = function(app) {
    app.component(script.name, script);
  };

  const components = [
    VtAlert,
    VtButton,
    script$a,
    script$9,
    script$8,
    VtRow,
    VtCol,
    script$7,
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
    VtCard: script$a,
    VtIcon: script$9,
    VtLink: script$8,
    VtRow,
    VtCol,
    VtDiv: script$7,
    VtTable: script
  };

  return VuetomUI;

}));
