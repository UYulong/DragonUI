import { render } from '@testing-library/vue'
import Button from '../src/button'

// Button 组件应当正常工作
test('button should work', () => {
  const { getByRole } = render(Button)
  getByRole('button')
})

// 插槽应当正常工作
test('default slot should be 按钮', () => {
  const { getByText } = render(Button)
  getByText('按钮')
})

test('slot should work', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'confirm'
      }
    }
  })
  getByText('confirm')
})

// type 按钮类型应当正常工作
test('default type should secondary', () => {
  const { getByRole } = render(Button)
  const button = getByRole('button')
  expect(button.classList.contains('s-btn--secondary')).toBe(true)
})

test('type should work', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'primary'
    }
  })

  const button = getByRole('button')
  expect(button.classList.contains('s-btn--primary')).toBe(true)
})
