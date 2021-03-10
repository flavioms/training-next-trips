import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)
    screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'Petrópolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Rio de Janeiro',
      slug: 'Rio de Janeiro',
      location: {
        latitude: 14,
        longitude: -10
      }
    }

    render(<Map places={[place, placeTwo]} />)
    expect(screen.getByTitle(/Petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Rio de Janeiro/i)).toBeInTheDocument()
  })
})
