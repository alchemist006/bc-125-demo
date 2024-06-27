import React from 'react'
import { Dialog as MuiDialog } from '@mui/material'

interface DialogPropsInterface {
  open: boolean
  children: React.ReactNode
  style?: React.CSSProperties
}

const Dialog = ({ open, children, style }: DialogPropsInterface): React.JSX.Element => {
  return (
    <MuiDialog
      open={open}
      PaperProps={{
        sx: {
          ...style
        }
      }}>
      {children}
    </MuiDialog>
  )
}
export default Dialog
