import { Card, CardProps, Divider, Stack, styled } from '@mui/material'

import RECRUIT_LOGO from '../../../../public/assets/icons/logo.svg'
import NavIcon from '../../molecules/NavIcon'
import Logout from '../../molecules/Logout'
import IconComponent from '../../atoms/icon'
import theme from '../../../theme'
import React, { useState } from 'react'
import LogoutModal from '../../molecules/LogoutModal'
import { SideBarNavs } from '../../../mocks/mockData'
import { MODAL_BOX_SX } from '../../../utils/constants'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
interface SideBarPropsInterface extends CardProps {
  onNavClick?: () => void
  onLogoutClick?: () => void
}

const StyledCard = styled(Card)({
  borderRadius: '6px',
  background: theme.palette.structural.white,
  boxShadow: '0px 4px 28px 0px rgba(45, 45, 47, 0.10)'
})

const SideBar = ({ onNavClick, onLogoutClick, ...props }: SideBarPropsInterface) => {
  const navigate = useNavigate()
  const { logout } = useAuth0()
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const handleLogout = () => {
    setIsLogoutModalOpen(true)
  }
  return (
    <StyledCard {...props}>
      <Stack justifyContent="space-between" height="95vh">
        <Stack gap={6} p={4}>
          <IconComponent src={RECRUIT_LOGO} width={theme.spacing(20)} height={theme.spacing(5)} />
          {SideBarNavs.map((nav, index) => {
            return (
              <NavIcon
                key={nav.label}
                src={nav.src}
                label={nav.label}
                onClick={() => {
                  if (index === 1) {
                    navigate('/candidates')
                  } else if (index === 2) {
                    navigate('/adverse-actions')
                  }
                }}
              />
            )
          })}
        </Stack>
        <Stack gap={5}>
          <Divider />
          <Stack p={4}>
            <Logout onClick={handleLogout} />
          </Stack>
        </Stack>
      </Stack>
      {isLogoutModalOpen && (
        <LogoutModal
          isOpen={isLogoutModalOpen}
          onCancelClick={() => setIsLogoutModalOpen(false)}
          sx={MODAL_BOX_SX}
          onLogoutClick={() => {
            if (localStorage.getItem('isLogin')) {
              navigate('/signup')
              localStorage.removeItem('isLogin')
            } else {
              localStorage.removeItem('isAuthLogin')
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          }}
        />
      )}
    </StyledCard>
  )
}

export default SideBar
