import { defineComponent as d, toRefs as i, createVNode as r } from "vue";
const p = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "mediums"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  }
}, n = d({
  name: "DButton",
  props: p,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: s,
      disabled: l,
      block: a
    } = i(t), u = a.value ? "s-btn--block" : "";
    return () => {
      const c = e.default ? e.default() : "\u6309\u94AE";
      return r("button", {
        disabled: l.value,
        class: `s-btn s-btn--${o.value} s-btn--${s.value} ${u}`
      }, [c]);
    };
  }
}), b = {
  install(t) {
    t.component(n.name, n);
  }
}, f = [b], y = {
  install(t) {
    f.forEach((e) => t.use(e));
  }
};
export {
  n as Button,
  y as default
};
