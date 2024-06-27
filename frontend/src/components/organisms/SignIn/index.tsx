import React, { useState } from 'react'
import { Card, Divider, Link, Stack, styled } from '@mui/material'
import theme from '../../../theme'
import MuiTypography from '../../atoms/Typography'
import {  SignInConstants } from '../../../utils/constants'
import CheckBox from '../../atoms/CheckBox'
import CustomButton from '../../atoms/Button'
import MuiIcon from '../../atoms/icon'
import Google from '../../../../public/assets/images/Logogoogle.svg'
import GitHub from '../../../../public/assets/images/github_logo.svg'
import TypographyInput from '../../molecules/TypographyInput'
import { handleEmailChange, handlePasswordChange, handleSignIn } from '../../../utils/helper'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'



const StyledLogInCard = styled(Card)({
  width: '482px',
  height: '720px',
  borderRadius: '6px',
  background: theme.palette.structural.white,
  marginTop: '48px',
  boxShadow: '0px 4px 28px 0px rgba(45, 45, 47, 0.10)'
})

const StyledLogInButton = styled(CustomButton)({
  height: '44px',
  borderRadius: '6px',
  textTransform: 'capitalize',
  backgroundColor: theme.palette.primary[500],
  ':disabled': {
    backgroundColor: theme.palette.primary[400],
    color: 'white'
  }
})

const StyledTypography = styled(MuiTypography)({
  marginBottom: '0'
})

const StyledButton = styled(CustomButton)({
  height: '48px',
  borderRadius: '4px',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'capitalize',
  background: theme.palette.structural.white,
  border: `1px solid ${theme.palette.structural.stroke}`,
  color: theme.palette.textColor.highEmphasis
})

export const SignIn = () => {
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const [formErrors, setFormErrors] = useState({
    emailError: '',
    passwordError: ''
  })

  const [, setDisableButton] = useState(true)

  const createHandleFieldChangeWrapper = (
    fieldName: string,
    handleFieldChange: (
      value: string,
      onSuccess: (newValue: string) => void,
      onDisable: (value: boolean) => void
    ) => void
  ) => {
    return (value: string) => {
      handleFieldChange(
        value,
        (newValue) => {
          setFormValues((prevValues) => ({
            ...prevValues,
            [fieldName]: newValue
          }))
        },
        setDisableButton
      )
    }
  }
  

  const handleEmailChangeWrapper = createHandleFieldChangeWrapper('email', handleEmailChange)
  const handlePasswordChangeWrapper = createHandleFieldChangeWrapper(
    'password',
    handlePasswordChange
  )

  const { email, password } = formValues

  const isFormValid =
    formValues.email !== '' &&
    formValues.password !== ''

  const handleSignInWrapper = () => {
    handleSignIn(formValues, navigate, setFormValues, toast)
  }

  return (
    <>
      <StyledLogInCard>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '54px 47px 48px 48px'
          }}>
          <Stack
            spacing={5}
            sx={{
              width: '440px',
              height: '600px'
            }}>
            <Stack gap={2}>
              <StyledTypography
                variant="h1"
                gutterBottom
                sx={{ color: theme.palette.textColor.highEmphasis }}
                text={SignInConstants.Signin}
              />

              <StyledTypography
                variant="body2"
                gutterBottom
                sx={{ color: theme.palette.textColor.mediumEmphasis }}
                text={SignInConstants.Subtitle}
              />
            </Stack>

            <Stack spacing={6}>
              <Stack spacing={1}>
                <TypographyInput
                  variant="body2"
                  label={SignInConstants.Email}
                  color={theme.palette.textColor.mediumEmphasis}
                  placeholder={SignInConstants.EmailPlaceholder}
                  value={email}
                  onChange={handleEmailChangeWrapper}
                  isPassword={false}
                  height={45}
                />
              </Stack>
              <Stack spacing={1}>
                <TypographyInput
                  variant="body2"
                  testId="password-input"
                  label={SignInConstants.Password}
                  color={theme.palette.textColor.mediumEmphasis}
                  placeholder={SignInConstants.PasswordPlaceholder}
                  value={password}
                  onChange={handlePasswordChangeWrapper}
                  isPassword={true}
                  height={45}
                />
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <CheckBox
                label={SignInConstants.Remember}
                checked={false}
                sx={{ color: theme.palette.structural.stroke }}
              />
              <Link
                variant="body1"
                component="button"
                underline="none"
                onClick={() => {
                  navigate('/forgotpassword')
                }}>
                {SignInConstants.ForgotPassword}
              </Link>
            </Stack>
            <StyledLogInButton
              variant="contained"
              disabled={!isFormValid}
              data-testid="signin button"
              onClick={handleSignInWrapper}>
              {SignInConstants.Signin}
            </StyledLogInButton>
            <Divider variant="fullWidth" textAlign="center">
              {SignInConstants.Or}
            </Divider>
            <StyledButton
              startIcon={<MuiIcon src={Google} />}
              onClick={() => {
                loginWithRedirect({
                  authorizationParams: { connection: 'google-oauth2', screen_hint: 'login' }
                })
              }}>
              {SignInConstants.SignInGoogle}
            </StyledButton>
            <StyledButton variant="outlined" startIcon={<MuiIcon src={GitHub} />}>
              {SignInConstants.SignInGithub}
            </StyledButton>
            <Stack direction="row" spacing={2} justifyContent="center">
              <MuiTypography
                variant="body1"
                sx={{
                  color: theme.palette.textColor.mediumEmphasis,
                  textAlign: 'center'
                }}
                text={SignInConstants.AccountInfo}
              />
              <Link
                component="button"
                variant="body1"
                underline="none"
                onClick={() => navigate('/signup')}>
                {SignInConstants.SignUp}
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </StyledLogInCard>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
    </>
  )
}

export default SignIn