import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <>
        <div>{slots.default ? slots.default() : 'slots placement'}</div>
        <div>{slots.footer ? slots.footer() : 'slots placement'}</div>
      </>
    )
  }
})
