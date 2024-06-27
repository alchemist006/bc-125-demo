import React, { useState } from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import VisibilityOn from '../../../../public/assets/icons/openEye.svg'
import VisibilityOff from '../../../../public/assets/icons/eyeclose.svg'
import IconComponent from '../icon'

export enum TextFieldSize {
  SMALL = 'small',
  MEDIUM = 'medium'
}

interface TextFieldPropsInterface {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  isPassword: boolean
  width?: string
  height?: string | number
  size?: TextFieldSize
  borderRadius?: string | number
  testId?:string
}

const CustomTextField: React.FC<TextFieldPropsInterface> = ({
  placeholder,
  value,
  onChange,
  isPassword,
  width,
  height,
  size,
  borderRadius,testId
  
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  const textFieldStyle = {
    width: width ?? '100%',
    height: height ?? 64,
    borderRadius: '4px'
  }

  return (
    <TextField
      placeholder={placeholder}
      data-testid={testId}
      type={isPassword && !showPassword ? 'password' : 'text'}
      value={value}
      onChange={handleChange}
      fullWidth
      margin="normal"
      size={size}
      InputProps={{
        style: textFieldStyle,
        endAdornment: isPassword && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
              edge="end">
              {showPassword ? (
                <IconComponent height={'24px'} width={'24px'} src={VisibilityOff} />
              ) : (
                <IconComponent height={'24px'} width={'24px'} src={VisibilityOn} />
              )}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}

export default CustomTextField
