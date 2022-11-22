import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-type'

export default defineComponent({
  name: 'DButton',

  props: buttonProps,

  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)

    const blockCls = block.value ? 's-btn--block' : ''

    return () => {
      const text = slots.default ? slots.default() : ''
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`}
        >
          {text}
        </button>
      )
    }
  }
})
