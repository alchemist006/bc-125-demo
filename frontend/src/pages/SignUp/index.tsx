import React from 'react'
import SignInSignUpTemplate from '../../components/templates/SignIn_SignUp'
import PrivacyPolicy from '../../../public/assets/images/PrivacyPolicy.svg'
import SignUp from '../../components/organisms/SignUp'

const SignUpPage = () => {
  return <SignInSignUpTemplate body={<SignUp sx={{ width: '480px' }} />} image={PrivacyPolicy} />
}

export default SignUpPage
