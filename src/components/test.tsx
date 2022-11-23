// 1. 函数式，直接返回jsx
// export default () => <div>hello world</div>

// 2. defineComponent(), 弊端：需要this
// import { defineComponent } from 'vue'
// export default defineComponent({
//   render() {
//     return <div>test 2</div>
//   }
// })

// 3. defineComponent(), Vue3 中推荐的方式，结合Compositon API 使用
import { defineComponent, ref } from 'vue'
import Child from './child'

export default defineComponent({
  directives: {
    focus: el => {
      el.focus()
    }
  },

  setup() {
    const count = ref(0)

    const list = ref<string[]>(['a', 'b', 'c'])

    const condition = ref<boolean>(true)

    return () => (
      <div>
        <p>count is {count.value}</p>
        <input type="text" v-focus v-model={count.value} />

        {/* v-for */}
        <ul>
          {list.value.map(str => (
            <li key={str}>{str}</li>
          ))}
        </ul>

        {/* v-if */}
        {condition.value ? <span>TRUE</span> : <span>FALSE</span>}

        {/* slots */}
        <Child
          v-slots={{
            default: () => <h1>default slots</h1>,
            footer: () => 'hhhhaaaa'
          }}
        ></Child>
      </div>
    )
  }
})
