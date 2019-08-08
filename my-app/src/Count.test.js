import { strike } from './Count'
import { render } from 'react-testing-library'

describe('Count.js', () => {
  describe('strike()', () => {
    it('line 4 text', () => {
      expect(strike(0)).toBe(1)
      expect(strike(1)).toBe(2)
      expect(strike(2)).toBe(0)
      expect(strike(3)).toBe(3)

    })
  })
})