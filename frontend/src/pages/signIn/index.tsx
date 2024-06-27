import React from 'react'
import SignInSignUpTemplate from '../../components/templates/SignIn_SignUp'
import PrivacyPolicy from '../../../public/assets/images/PrivacyPolicy.svg'
import SignIn from '../../components/organisms/SignIn'

const SignInPage = () => {
  return <SignInSignUpTemplate body={<SignIn sx={{ width: '480px' }} />} image={PrivacyPolicy} />
}

export default SignInPage
