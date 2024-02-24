import test from 'ava'

import POS from './POS.js'

test("Test", t => {
  const pos = new POS
  t.truthy(pos)
})