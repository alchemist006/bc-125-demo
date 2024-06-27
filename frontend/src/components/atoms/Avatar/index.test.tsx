import { render } from '@testing-library/react'
import Avatar from '.'
import AVATAR_LOGO from '../../../../public/assets/images/avatar_image.svg'
import React from 'react'
describe('testing avatar component', () => {
  test('should renders correctly', () => {
    render(<Avatar src={AVATAR_LOGO} />)
  })
})
