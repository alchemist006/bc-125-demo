import React from 'react'
import { render, screen } from '@testing-library/react'
import IconComponent from './index'
import Github from '../../../../public/assets/images/github_logo.svg'
import '@testing-library/jest-dom/extend-expect'

describe('IconComponent', () => {
  it('should render the icon component without any error', () => {
    render(<IconComponent src={Github} height="32px" width="32px" padding="5px" />)
    const icon = screen.getByTestId('iconComponent')
    expect(icon).toBeDefined()
  })

  it('should display the icon with the specified width and height', () => {
    render(<IconComponent src={Github} width="50px" height="50px" padding="10px" />)

    const icon = screen.getByTestId('iconComponent')
    expect(icon).toHaveAttribute('width', '50px')
    expect(icon).toHaveAttribute('height', '50px')
    icon.setAttribute('padding', '10px')
  })
})
