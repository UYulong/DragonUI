import { defineComponent, ref } from 'vue'

export default defineComponent({
  directives: {
    focus: el => {
      el.focus()
    }
  },

  setup() {
    const count = ref(0)

    return () => (
      <div>
        <p>count is {count.value}</p>
        {/* <input type="text" v-focus v-model={count.value} /> */}
      </div>
    )
  }
})
