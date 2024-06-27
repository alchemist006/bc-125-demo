import { Grid } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import { DashBoardTemplatePropsInterface } from '../../../utils/interfaces'
import styled from '@emotion/styled'

const Container = styled(Grid)({
  height: '100vh',
  display: 'flex',
  padding: theme.spacing(5),
  gap: theme.spacing(5),
  backgroundColor: theme.palette.primary[100]
})

const RightBox = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5)
})
const SidebarGrid = styled(Grid)({})

const HomePageTemplate = ({ header, content, sidebar }: DashBoardTemplatePropsInterface) => {
  return (
    <Container>
      <SidebarGrid>{sidebar}</SidebarGrid>
      <RightBox>
        <Grid>{header}</Grid>
        <Grid>{content}</Grid>
      </RightBox>
    </Container>
  )
}

export default HomePageTemplate
