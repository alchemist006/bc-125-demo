import { render } from '@testing-library/react'
import React from 'react'

import privacyPolicyImage from '../../../../public/assets/images/PrivacyPolicy.svg'
import Image from '.'
describe('testing Image Component', () => {
  test('should renders correctly', () => {
    render(<Image src={privacyPolicyImage} />)
  })
})
