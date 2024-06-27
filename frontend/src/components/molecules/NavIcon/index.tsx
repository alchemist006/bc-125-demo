import { Box, Stack, SxProps } from '@mui/material'
import IconComponent from '../../atoms/icon'
import Typography from '../../atoms/Typography'
import React from 'react'
import styled from '@emotion/styled'
import theme from '../../../theme'

interface NavIconPropsInterfacae {
  src: string
  label: string
  onClick?: () => void
  sx?: SxProps
}

const StyledStack = styled(Stack)`
  &:hover {
    background-color: ${theme.palette.primary[300]};
    cursor: pointer;
    border-radius: 12px;
  }
  padding: 10px;
  align-items: center;
`

const NavIcon = ({ src, label, onClick, sx }: NavIconPropsInterfacae) => {
  return (
    <StyledStack direction="row" gap={2} onClick={onClick} sx={sx}>
      <Box width={28}>
        <IconComponent src={src} />
      </Box>
      <Typography text={label} variant="body1" />
    </StyledStack>
  )
}
export default NavIcon
