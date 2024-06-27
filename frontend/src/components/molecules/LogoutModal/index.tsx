import { Stack, SxProps } from '@mui/material'
import Dialog from '../../atoms/Dialog'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'
import MuiButton from '../../atoms/Button'
import { styled } from '@mui/system'
import React from 'react'

import {
  LOGOUT_MODAL_CANCEL_BUTTON_CLASSNAME,
  LOGOUT_MODAL_CANCEL_BUTTON_LABEL,
  LOGOUT_MODAL_LOGOUT_BUTTON_LABEL,
  LOGOUT_MODAL_SUBTITLE,
  LOGOUT_MODAL_TITLE
} from '../../../utils/constants'

interface LogoutModalPropsInterface {
  isOpen: boolean
  sx?: SxProps
  onCancelClick?: () => void
  onLogoutClick?: () => void
}

const StyledButton = styled(MuiButton)`
  border-radius: 6px;
  text-transform: none;
  &.cancel-button {
    color: ${theme.palette.textColor.mediumEmphasis};
    border: 2px solid ${theme.palette.structural.stroke};
  }
`

const LogoutModal = ({ isOpen, onCancelClick, onLogoutClick, sx }: LogoutModalPropsInterface) => {
  return (
    <Dialog
      style={{ borderRadius: 2 }}
      open={isOpen}
      children={
        <Stack gap={2} p={4} sx={sx}>
          <Typography
            text={LOGOUT_MODAL_TITLE}
            variant="subtitle1"
            color={theme.palette.textColor.highEmphasis}
          />
          <Typography
            text={LOGOUT_MODAL_SUBTITLE}
            variant="body2"
            color={theme.palette.textColor.mediumEmphasis}
          />
          <Stack direction="row" mt={8} gap={3} alignSelf="end">
            <StyledButton
              children={LOGOUT_MODAL_CANCEL_BUTTON_LABEL}
              variant="outlined"
              onClick={onCancelClick}
              className={LOGOUT_MODAL_CANCEL_BUTTON_CLASSNAME}
            />
            <StyledButton
              children={LOGOUT_MODAL_LOGOUT_BUTTON_LABEL}
              variant="contained"
              onClick={onLogoutClick}
            />
          </Stack>
        </Stack>
      }
    />
  )
}

export default LogoutModal
