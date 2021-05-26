
  import {render, screen} from '@testing-library/react'
  import header from './header'
    
  describe('header', () => {
      it('renders', () => {
          render(<header />)
          expect(screen.getByText('header')).toBeInTheDocument()
      })
  })
        