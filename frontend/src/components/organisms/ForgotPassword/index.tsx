import React, { useState } from 'react'
import { Card, Stack, SxProps } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import theme from '../../../theme'
import {
  OTP_PAGE_GO_BACK_TEXT,
  SIGNUPPAGE_EMAIL,
  SIGNUPAGE_EMAIL_PLACEHOLDER,
  FORGOT_PASSWORD,
  NO_ISSUES,
  RESET_PASSWORD,
  emailValidator
} from '../../../utils/constants'
import styled from '@emotion/styled'
import Typography from '../../atoms/Typography'
import MuiButton from '../../atoms/Button'
import TypographyInput from '../../molecules/TypographyInput'
import { useNavigate } from 'react-router-dom'

interface ForgotPasswordPropsInterface {
  onResetPasswordClick?: () => void
  sx?: SxProps
}
const StyledCard = styled(Card)({
  borderRadius: '6px',
  background: theme.palette.structural.white,
  boxShadow: '0px 4px 28px 0px rgba(45, 45, 47, 0.10)',
  padding: '27px 48px 404px 48px'
})

const ForgotPassword = (props: ForgotPasswordPropsInterface) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  const handleEmailChange = (value: string) => {
    const emailValue = value
    setEmail(emailValue)
    setIsFormValid(emailValidator(emailValue))
  }
  const styleContinue = {
    margin: '24px 0px 0px 0px',
    textTransform: 'none',
    backgroundColor: !isFormValid ? theme.palette.primary.main : theme.palette.primary[500],
    ':disabled': {
      color: theme.palette.structural.white,
      backgroundColor: isFormValid ? theme.palette.primary.main : theme.palette.primary[500],
      background: theme.palette.primary[400]
    }
  }
  return (
    <StyledCard sx={props.sx}>
      <Stack direction="row" alignItems="center">
        <MuiButton
          variant="text"
          children={OTP_PAGE_GO_BACK_TEXT}
          startIcon={<ArrowBackIcon />}
          sx={{ textTransform: 'none' }}
          onClick={() => navigate(-1)}
        />
      </Stack>
      <Stack gap={6}>
        <Stack gap={2}>
          <Typography variant="h1" text={FORGOT_PASSWORD} mt="9px" />
          <Typography
            text={NO_ISSUES}
            variant="body2"
            color={theme.palette.textColor.mediumEmphasis}
          />
        </Stack>

        <TypographyInput
          variant="caption1"
          label={SIGNUPPAGE_EMAIL}
          color={theme.palette.textColor.mediumEmphasis}
          placeholder={SIGNUPAGE_EMAIL_PLACEHOLDER}
          value={email}
          onChange={handleEmailChange}
          isPassword={false}
          height={36}
        />
        <MuiButton
          variant="contained"
          disabled={!isFormValid}
          children={RESET_PASSWORD}
          sx={styleContinue}
          onClick={props.onResetPasswordClick}
        />
      </Stack>
    </StyledCard>
  )
}

export default ForgotPassword
