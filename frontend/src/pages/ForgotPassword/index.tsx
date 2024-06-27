import React, { useState } from 'react'
import SignInSignUpTemplate from '../../components/templates/SignIn_SignUp'
import ForgotPassword from '../../components/organisms/ForgotPassword'
import Image from '../../../public/assets/images/PrivacyPolicy.svg'
import AdverseActionModal from '../../components/molecules/AdverseActionModal'
import Otpcard from '../../components/organisms/OTPCard'
import { FORGOT_PASSWORD_PAGE_MODAL_LABEL } from '../../utils/constants'
import theme from '../../theme'

const ForgotPasswordPage = () => {
  const [isShowOTPModal, setIsShowOTPModal] = useState(false)
  const [isShowForgotPassword, setIsShowForgotPassword] = useState(true)
  const handleResetPasswordClick = () => {
    setIsShowOTPModal(true)
    setTimeout(() => {
      setIsShowOTPModal(false)
      setIsShowForgotPassword(false)
    }, 3000)
  }
  return (
    <>
      <SignInSignUpTemplate
        body={
          isShowForgotPassword ? (
            <ForgotPassword
              onResetPasswordClick={handleResetPasswordClick}
              sx={{ width: '480px' }}
            />
          ) : (
            <Otpcard sx={{ width: '480px' }} />
          )
        }
        image={Image}
      />
      <AdverseActionModal
        isOpen={isShowOTPModal}
        label={FORGOT_PASSWORD_PAGE_MODAL_LABEL}
        width={theme.spacing(137)}
        height={theme.spacing(100)}
      />
    </>
  )
}

export default ForgotPasswordPage
