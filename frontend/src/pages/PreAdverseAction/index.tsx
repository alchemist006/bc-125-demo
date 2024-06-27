import React from 'react'
import HomePageTemplate from '../../components/templates/HomePage'
import IconComponent from '../../components/atoms/icon'
import BACK_ICON from '../../../public/assets/icons/BackIcon.svg'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'
import Typography from '../../components/atoms/Typography'
import PreAdverseNoticeCard from '../../components/organisms/PreAdverseNoticeCard'
import SideBar from '../../components/organisms/SideBar'

const PreAdverseActionPage = () => {
  const navigate = useNavigate()
  return (
    <HomePageTemplate
      header={
        <Stack direction="row" gap={2}>
          <IconComponent src={BACK_ICON} onClick={() => navigate(-1)} />
          <Typography text="Pre-Adverse Action Notice" variant="h1" />
        </Stack>
      }
      content={<PreAdverseNoticeCard sx={{ width: '83vw' }} />}
      sidebar={<SideBar />}
    />
  )
}

export default PreAdverseActionPage
