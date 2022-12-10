;(function (e, t) {
  typeof exports == 'object' && typeof module < 'u'
    ? t(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], t)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self),
      t((e['dragon-ui'] = {}), e.Vue))
})(this, function (e, t) {
  'use strict'
  const u = {
      type: { type: String, default: 'secondary' },
      size: { type: String, default: 'mediums' },
      disabled: { type: Boolean, default: !1 },
      block: { type: Boolean, default: !1 }
    },
    s = t.defineComponent({
      name: 'DButton',
      props: u,
      setup(n, { slots: o }) {
        const { type: d, size: a, disabled: f, block: c } = t.toRefs(n),
          r = c.value ? 's-btn--block' : ''
        return () => {
          const p = o.default ? o.default() : '\u6309\u94AE'
          return t.createVNode(
            'button',
            {
              disabled: f.value,
              class: `s-btn s-btn--${d.value} s-btn--${a.value} ${r}`
            },
            [p]
          )
        }
      }
    }),
    l = [
      {
        install(n) {
          n.component(s.name, s)
        }
      }
    ],
    i = {
      install(n) {
        l.forEach(o => n.use(o))
      }
    }
  ;(e.Button = s),
    (e.default = i),
    Object.defineProperties(e, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' }
    })
})
