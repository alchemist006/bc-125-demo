import { Grid } from '@mui/material'
import React from 'react'
import Avatar from '../../atoms/Avatar'
import AVATAR_LOGO from '../../../../public/assets/images/avatar_image.svg'
import LOGO from '../../../../public/assets/images/logout.svg'
import Typography from '../../atoms/Typography'
import { AVATAR_ALT_TEXT, CIRCULAR, JAMESCO, JAMES_RODRIGUEZ } from '../../../utils/constants'
import styled from '@emotion/styled'
import IconComponent from '../../atoms/icon'
import theme from '../../../theme'
import { LogoutInterface } from '../../../utils/interfaces'



const FlexGrid = styled(Grid)({
  display:"flex",
  alignItems:"center",
  width:"206px",
  gap:"15px",
  height:'38px',
  cursor:"pointer"
})
const RightGrid = styled(Grid)({
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  gap:'5px',
  height:'38px',
})

const StyledAvatar = styled(Avatar)({
  width:'36px',
  height:'36px',
})

const HighEmpTypography = styled(Typography)({
  color:theme.palette.textColor.highEmphasis
})
const LowEmpTypography = styled(Typography)({
  color:theme.palette.textColor.lowEmphasis
})

const Logout = ({ onClick } : LogoutInterface) => {
  return (
    <FlexGrid onClick={onClick}>
        <RightGrid>
          <Grid>
              <StyledAvatar src={AVATAR_LOGO} alt={AVATAR_ALT_TEXT} variant={CIRCULAR} />
          </Grid>
          <Grid>
              <Grid>
                  <HighEmpTypography text={JAMES_RODRIGUEZ} variant='body1' />
                  <LowEmpTypography text={JAMESCO} variant='caption2' />
              </Grid>
          </Grid>
        </RightGrid>
        <Grid>
          <IconComponent src={LOGO} width='24px' height='24px' />
        </Grid>
    </FlexGrid>
  )
}

export default Logout