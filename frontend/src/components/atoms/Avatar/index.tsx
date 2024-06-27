import { Avatar as MuiAvatar, AvatarProps } from '@mui/material'
import React from 'react'

interface AvatarPropsInterface extends AvatarProps {
  src?: string
  alt?: string
}

const Avatar = ({ src, alt, variant, ...avatarProps }: AvatarPropsInterface) => {
  return (
    <MuiAvatar
      src={src}
      alt={alt}
      variant={variant}
      data-testid="avatar-component"
      {...avatarProps}
    />
  )
}
export default Avatar
