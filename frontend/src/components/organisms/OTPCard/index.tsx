import React, { useState } from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { Card, Stack, SxProps } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MuiButton from '../../atoms/Button'
import MuiTypography from '../../atoms/Typography'
import theme from '../../../theme'
import {
  OTP_PAGE_GO_BACK_TEXT,
  OTP_PAGE_ENTER_OTP_TEXT,
  OTP_PAGE_OTP_SENT_TEXT,
  OTP_PAGE_CONTINUE_TEXT,
  OTP_PAGE_RESEND_OTP_TEXT,
  OTP_PAGE_DIDNT_RECEIVE_TEXT
} from '../../../utils/constants'
import styled from '@emotion/styled'
import { sendOtp } from '../../../utils/helper'
import { useNavigate } from 'react-router-dom'

const StyledCard = styled(Card)({
  borderRadius: '6px',
  background: theme.palette.structural.white,
  boxShadow: '0px 4px 28px 0px rgba(45, 45, 47, 0.10)',
  padding: '27px 48px 392px 48px'
})

const StyledButton = styled(MuiButton)`
  text-transform: none;
`

const StyledTypography = styled(MuiTypography)`
  color: ${theme.palette.textColor.mediumEmphasis};
`

interface OtpCardInterface {
  sx?: SxProps
}

const Otpcard = ({ sx }: OtpCardInterface) => {
  const navigate = useNavigate()
  const [otp, setOTP] = useState<string>('')
  const [resend, setResend] = useState<boolean>(true)

  const handleChange = (OTP: string) => {
    setOTP(OTP)
  }

  const styleContinue = {
    textTransform: 'none',
    backgroundColor: otp.length === 4 ? theme.palette.primary.main : theme.palette.primary[500],
    ':disabled': {
      color: theme.palette.structural.white,
      backgroundColor: otp.length === 4 ? theme.palette.primary.main : theme.palette.primary[500],
      background: theme.palette.primary[400]
    }
  }

  return (
    <StyledCard sx={sx}>
      <Stack direction="row" alignItems="center">
        <StyledButton
          variant="text"
          children={OTP_PAGE_GO_BACK_TEXT}
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
        />
      </Stack>
      <Stack gap={6}>
        <Stack gap={2}>
          <MuiTypography variant="h2" text={OTP_PAGE_ENTER_OTP_TEXT} mt="9px" />
          <StyledTypography text={OTP_PAGE_OTP_SENT_TEXT} variant="caption2" />
        </Stack>
        <MuiOtpInput value={otp} onChange={handleChange} />
        <StyledButton
          variant="contained"
          disabled={otp.length !== 4}
          children={OTP_PAGE_CONTINUE_TEXT}
          sx={styleContinue}
          onClick={() => navigate('/')}
        />
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" mt={5}>
        <MuiTypography variant="body2" text={OTP_PAGE_DIDNT_RECEIVE_TEXT} />
        {resend && (
          <StyledButton
            variant="text"
            onClick={() => sendOtp(setOTP, setResend)}
            children={OTP_PAGE_RESEND_OTP_TEXT}
          />
        )}
      </Stack>
    </StyledCard>
  )
}

export default Otpcard
