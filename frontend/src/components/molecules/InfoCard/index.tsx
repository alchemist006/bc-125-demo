import { Stack, SxProps } from '@mui/material'
import IconComponent from '../../atoms/icon'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'
import React from 'react'

interface InfoCardPropsInterface {
  title: string
  content: string
  icon: string
  sx?: SxProps
  width?: string
  height?: string
}

const InfoCard = ({ title, content, icon, sx, width, height }: InfoCardPropsInterface) => {
  return (
    <Stack
      direction="row"
      padding={3}
      bgcolor={theme.palette.primary[50]}
      gap={3}
      borderRadius={3}
      border={`2px solid ${theme.palette.structural.stroke}`}
      sx={sx}>
      <Stack
        justifyContent="center"
        border={`2px solid ${theme.palette.structural.stroke}`}
        borderRadius={3}
        padding={2.5}
        width={theme.spacing(11)}
        height={theme.spacing(11)}
        bgcolor={theme.palette.structural.white}>
        <Stack alignSelf="center">
          <IconComponent src={icon} width={theme.spacing(6)} height={theme.spacing(6)} />
        </Stack>
      </Stack>
      <Stack gap={1} alignSelf="center">
        <Typography text={title} variant="body2" color={theme.palette.textColor.mediumEmphasis} />
        <Typography text={content} variant="body1" color={theme.palette.textColor.highEmphasis} />
      </Stack>
    </Stack>
  )
}

export default InfoCard
