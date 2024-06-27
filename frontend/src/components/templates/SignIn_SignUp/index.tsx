import React, { ReactNode } from 'react'
import {  Stack } from '@mui/material'
import styled from '@emotion/styled'
import Image from '../../atoms/Image'
import theme from '../../../theme'


interface SignInSignUpTemplatePropsInterface {
  body: ReactNode
  image: string
}

const StyledContainer = styled(Stack)({
  backgroundColor: theme.palette.primary[100],
  height: '100vh'
})

const StyledBody = styled(Stack)({
  width: '50vw',
  justifyContent: 'center',
  alignItems: 'center'
})
const SignInSignUpTemplate = ({ body, image }: SignInSignUpTemplatePropsInterface) => {
  return (
    <StyledContainer direction="row">
      <StyledBody>
        <Image src={image} />
      </StyledBody>
      <StyledBody>{body}</StyledBody>
    </StyledContainer>
  )
}

export default SignInSignUpTemplate
