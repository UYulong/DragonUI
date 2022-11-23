import { render } from '@testing-library/vue'
import Test from './ttest'

test('test.tsx should work', () => {
  const { getByText } = render(Test)

  getByText('count is 0')
})
