import React from 'react'
import { render } from '@testing-library/react'
import SignInSignUpTemplate from '.'
import SignUp from '../../organisms/SignUp'
import PrivacyPolicy from '../../../../public/assets/images/PrivacyPolicy.svg'
import { BrowserRouter } from 'react-router-dom'

describe('SignIn SIgnUp Template', () => {
  test('should render the template with body', () => {
    render(
      <SignInSignUpTemplate
        body={
          <BrowserRouter>
            <SignUp />
          </BrowserRouter>
        }
        image={PrivacyPolicy}
      />
    )
  })
})
