import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import styled from '@emotion/styled'
import { SxProps } from '@mui/material'

export enum CheckboxSize {
  Small = 'small',
  Medium = 'medium'
}

export enum CheckboxColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Default = 'default'
}

interface CheckboxPropsInterface {
  label: React.ReactNode
  checked: boolean
  size?: CheckboxSize
  color?: CheckboxColor
  onCheck?: () => void
  sx?: SxProps
}

const StyledLabel = styled.span`
  display: flex;
  align-items: center;
`

const MuiCheckBox = ({ label, checked, size, color, onCheck, sx }: CheckboxPropsInterface) => {
  return (
    <FormControlLabel
      control={<Checkbox size={size} color={color} checked={checked} onClick={onCheck} sx={sx} />}
      label={<StyledLabel>{label}</StyledLabel>}
    />
  )
}

export default MuiCheckBox
