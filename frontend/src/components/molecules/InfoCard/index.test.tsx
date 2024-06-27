import { render } from '@testing-library/react'
import InfoCard from '.'
import EMAIL_LOGO from '../../../../public/assets/icons/Email.svg'
import React from 'react'

describe('testing infocard component', () => {
  test('should renders correctly', () => {
    const { getByText } = render(
      <InfoCard title="Email" content="John.smith@checkr.com" icon={EMAIL_LOGO} />
    )
    getByText('Email')
  })
})
