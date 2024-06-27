import React, { useState } from 'react'
import { Card, Stack, ThemeProvider, styled, Link, Divider, SxProps } from '@mui/material'
import theme from '../../../theme'
import TypographyComponent from '../../atoms/Typography'
import {
  PASSWORD_NOT_MATCH,
  SIGNUPAGE_EMAIL_PLACEHOLDER,
  SIGNUPPAGE_AGREE,
  SIGNUPPAGE_ALREADYAMEMBER,
  SIGNUPPAGE_CONFIRMPASSWORD,
  SIGNUPPAGE_EMAIL,
  SIGNUPPAGE_HEADER,
  SIGNUPPAGE_INFO,
  SIGNUPPAGE_PASSWORD,
  SIGNUPPAGE_POLICY,
  SIGNUP_PLACEHOLDER,
  SIGN_IN
} from '../../../utils/constants'
import CheckBox from '../../atoms/CheckBox'
import CustomButton from '../../atoms/Button'
import TypographyInput from '../../molecules/TypographyInput'
import {
  handleEmailChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
  handleSignUp
} from '../../../utils/helper'
import { TextFieldSize } from '../../atoms/textField'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const StyledCard = styled(Card)({
  borderRadius: '6px',
  background: theme.palette.structural.white,
  boxShadow: '0px 4px 28px 0px rgba(45, 45, 47, 0.10)'
})

const StyledSignUpButton = styled(CustomButton)(() => ({
  height: '44px',
  borderRadius: '6px',
  textTransform: 'capitalize',
  backgroundColor: theme.palette.primary[500],
  ':disabled': {
    backgroundColor: theme.palette.primary[400],
    color: 'white'
  }
}))

const StyledTypography = styled(TypographyComponent)({
  marginBottom: '0'
})

interface SignUpInterface {
  sx?: SxProps
}

export const SignUp = ({ sx }: SignUpInterface) => {
  const navigate = useNavigate()
  const [formErrors, setFormErrors] = useState({
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  })

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const checkPasswordMatch = (password: string, confirmPassword: string) => {
    return password === confirmPassword
  }

  const [disableButton, setDisableButton] = useState(true)

  const handleEmailChangeWrapper = (value: string) => {
    handleEmailChange(
      value,
      (newValue) => {
        setFormValues((prevValues) => ({
          ...prevValues,
          email: newValue
        }))
      },
      setDisableButton,
      (error) => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          emailError: error
        }))
      }
    )
  }

  const handlePasswordChangeWrapper = (value: string) => {
    handlePasswordChange(
      value,
      (newValue) => {
        setFormValues((prevValues) => ({
          ...prevValues,
          password: newValue
        }))
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          confirmPasswordError: checkPasswordMatch(newValue, formValues.confirmPassword)
            ? ''
            : `${PASSWORD_NOT_MATCH}`
        }))
      },
      setDisableButton,
      (error) => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          passwordError: error
        }))
      }
    )
  }

  const handleConfirmPasswordChangeWrapper = (value: string) => {
    handleConfirmPasswordChange(
      value,
      (newValue) => {
        setFormValues((prevValues) => ({
          ...prevValues,
          confirmPassword: newValue
        }))
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          confirmPasswordError: checkPasswordMatch(formValues.password, newValue)
            ? ''
            : `${PASSWORD_NOT_MATCH}`
        }))
        setDisableButton(
          !!formErrors.emailError || !!formErrors.passwordError || !!formErrors.confirmPasswordError
        )
      },
      (error) => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          confirmPasswordError: error
        }))
        setDisableButton(true)
      },
      formValues.password
    )
  }
  const isFormValid =
    !formErrors.emailError &&
    !formErrors.passwordError &&
    !formErrors.confirmPasswordError &&
    formValues.email !== '' &&
    formValues.password !== '' &&
    formValues.confirmPassword !== '' &&
    checkPasswordMatch(formValues.password, formValues.confirmPassword)

  const handleSignUpWrapper = async () => {
    handleSignUp(formValues, setFormValues)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledCard sx={sx}>
        <Stack p="54px 48px 136px 48px">
          <Stack spacing={6}>
            <Stack gap={2}>
              <StyledTypography
                variant="h1"
                gutterBottom
                sx={{ color: theme.palette.textColor.highEmphasis }}
                text={SIGNUPPAGE_HEADER}
              />

              <StyledTypography
                variant="body2"
                gutterBottom
                sx={{ color: theme.palette.textColor.mediumEmphasis }}
                text={SIGNUPPAGE_INFO}
              />
            </Stack>

            <Stack spacing={2.5}>
              <TypographyInput
                variant="caption1"
                label={SIGNUPPAGE_EMAIL}
                color={theme.palette.textColor.mediumEmphasis}
                placeholder={SIGNUPAGE_EMAIL_PLACEHOLDER}
                value={formValues.email}
                onChange={handleEmailChangeWrapper}
                isPassword={false}
                height={40}
                size={TextFieldSize.SMALL}
              />
              {formErrors.emailError && (
                <TypographyComponent variant="body2" color="error" text={formErrors.emailError} />
              )}
              <TypographyInput
                variant="caption1"
                testId="password-input"
                label={SIGNUPPAGE_PASSWORD}
                color={theme.palette.textColor.mediumEmphasis}
                placeholder="*****"
                value={formValues.password}
                onChange={handlePasswordChangeWrapper}
                isPassword={true}
                height={40}
                size={TextFieldSize.SMALL}
              />
              {formErrors.passwordError && (
                <TypographyComponent
                  variant="body2"
                  color="error"
                  text={formErrors.passwordError}
                />
              )}
            </Stack>
            <Stack gap={2.5}>
              <TypographyInput
                variant="caption1"
                testId="confirm-password-input"
                label={SIGNUPPAGE_CONFIRMPASSWORD}
                color={theme.palette.textColor.mediumEmphasis}
                placeholder={SIGNUP_PLACEHOLDER}
                value={formValues.confirmPassword}
                onChange={(value) => handleConfirmPasswordChangeWrapper(value)}
                isPassword={true}
                height={40}
                size={TextFieldSize.SMALL}
              />
              {formErrors.confirmPasswordError && (
                <TypographyComponent
                  variant="body2"
                  color="error"
                  text={formErrors.confirmPasswordError}
                />
              )}
            </Stack>

            <Stack direction="row" spacing={1}>
              <CheckBox
                label={SIGNUPPAGE_AGREE}
                checked={false}
                sx={{ color: theme.palette.structural.stroke }}
              />
              <Link variant="body1" component="button" underline="none">
                {SIGNUPPAGE_POLICY}
              </Link>
            </Stack>
            <StyledSignUpButton
              variant="contained"
              disabled={!isFormValid}
              data-testid="signup button"
              onClick={handleSignUpWrapper}>
              {SIGNUPPAGE_HEADER}
            </StyledSignUpButton>
            <Divider variant="fullWidth" textAlign="center">
              Or
            </Divider>
            <Stack direction="row" spacing={2} justifyContent="center">
              <TypographyComponent
                variant="body1"
                sx={{
                  color: theme.palette.textColor.mediumEmphasis,
                  textAlign: 'center'
                }}
                text={SIGNUPPAGE_ALREADYAMEMBER}
              />
              <Link
                component="button"
                variant="body1"
                underline="none"
                onClick={() => navigate('/')}>
                {SIGN_IN}
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
      </StyledCard>
    </ThemeProvider>
  )
}

export default SignUp

