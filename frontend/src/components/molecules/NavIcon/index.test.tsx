import { fireEvent, render } from '@testing-library/react'
import NavIcon from '.'
import HOME_LOGO from '../../../../public/assets/icons/Box.svg'
import React from 'react'

describe('testing navIcon component', () => {
  test('should renders correctly', () => {
    const onClick = jest.fn()
    const { getByText } = render(<NavIcon src={HOME_LOGO} label="HOME" onClick={onClick} />)
    const ele = getByText('HOME')
    expect(ele).toBeInTheDocument()
    fireEvent.click(ele)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
