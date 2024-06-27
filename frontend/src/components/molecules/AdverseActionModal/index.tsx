import React from 'react'
import Dialog from '../../atoms/Dialog'
import { Stack } from '@mui/material'
import Image from '../../atoms/Image'
import ADVERSE_ACTION_SUCCESSFULLY_SENT_GIF from '../../../../public/assets/gifs/CheckGif.gif'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'
import { AdverseActionSentModalPropsInterface } from '../../../utils/interfaces'

const AdverseActionModal = ({
  isOpen,
  width,
  height,
  label
}: AdverseActionSentModalPropsInterface) => {
  return (
    <Dialog
      open={isOpen}
      children={
        <Stack sx={{ width: { width }, height: { height }, alignItems: 'center' }}>
          <Stack mt={20}>
            <Image src={ADVERSE_ACTION_SUCCESSFULLY_SENT_GIF} width="200px" height="200px" />
          </Stack>
          <Typography
            text={label}
            variant="h2"
            color={theme.palette.textColor.highEmphasis}
            mt={9}
          />
        </Stack>
      }
    />
  )
}

export default AdverseActionModal
