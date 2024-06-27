import { Box, Stack } from '@mui/material'
import Typography from '../../atoms/Typography'
import MuiButton from '../../atoms/Button'
import DOWNLOAD_LOGO from '../../../../public/assets/icons/Download.svg'
import PLUS_LOGO from '../../../../public/assets/icons/Plus.svg'
import IconComponent from '../../atoms/icon'
import React, { useState } from 'react'
import BACK_ICON from '../../../../public/assets/icons/BackIcon.svg'
import {
  ENGAGE_BUTTON_LABEL,
  EXPORT_REPORT_LABEL,
  PAGE_HEADER_ADVERSE_ACTIONS_TEXT,
  PAGE_HEADER_BUTTON_ONE_LABEL,
  PAGE_HEADER_BUTTON_ONE_SX,
  PAGE_HEADER_BUTTON_TWO_LABEL,
  PAGE_HEADER_BUTTON_TWO_SX,
  PAGE_HEADER_CANDIDATES_TEXT,
  PRE_ADVERSE_ACTION_BUTTON_LABEL
} from '../../../utils/constants'
import ReportModal from '../../molecules/ReportModal'
import AdverseActionModal from '../../molecules/AdverseActionModal'
import { PageHeaderPropsInterface } from '../../../utils/interfaces'
import theme from '../../../theme'
import { useNavigate } from 'react-router-dom'
import { updateCandidateData } from '../../../services'

const PageHeader = ({ type, name }: PageHeaderPropsInterface) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSentModal, setIsOpenSentModal] = useState(false)
  const handelEngage = () => {
    const candidateId = sessionStorage.getItem('candidateId')
    sessionStorage.removeItem('candidateId')
    updateCandidateData(candidateId ? +candidateId : 0, 'ENGAGE', 'CLEAR')
    navigate('/candidates', { state: { data: { dataUpdated: true } } })
  }
  return (
    <Box>
      {type === 'ADVERSE_ACTIONS' && (
        <Typography text={PAGE_HEADER_ADVERSE_ACTIONS_TEXT} variant="h1" />
      )}

      {type === 'CANDIDATES' && (
        <Stack direction="row" justifyContent="space-between">
          <Typography text={PAGE_HEADER_CANDIDATES_TEXT} variant="h1" alignSelf="end" />
          <Stack direction="row" gap={4} p="8px 16px 8px 16px">
            <MuiButton
              children={
                <Typography
                  text={PAGE_HEADER_BUTTON_ONE_LABEL}
                  variant="body1"
                  color={theme.palette.textColor.mediumEmphasis}
                />
              }
              variant="text"
              startIcon={<IconComponent src={DOWNLOAD_LOGO} />}
              sx={PAGE_HEADER_BUTTON_ONE_SX}
              onClick={() => setIsOpen(true)}
            />
            <MuiButton
              children={PAGE_HEADER_BUTTON_TWO_LABEL}
              variant="contained"
              startIcon={<IconComponent src={PLUS_LOGO} />}
              sx={PAGE_HEADER_BUTTON_TWO_SX}
            />
          </Stack>
          <ReportModal
            style={{ minWidth: '800px' }}
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(false)
              setTimeout(() => {
                setIsOpenSentModal(false)
              }, 3000)
              setIsOpenSentModal(true)
            }}
          />
          <AdverseActionModal isOpen={isOpenSentModal} label={EXPORT_REPORT_LABEL} />
        </Stack>
      )}

      {type === 'CANDIDATE_DETAILS' && (
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" gap={2}>
            <IconComponent src={BACK_ICON} onClick={() => navigate(-1)} />
            <Typography text={name!} variant="h1" whiteSpace="nowrap" alignSelf="center" />
          </Stack>
          <Stack direction="row" gap={4}>
            <MuiButton
              children={PRE_ADVERSE_ACTION_BUTTON_LABEL}
              variant="text"
              sx={PAGE_HEADER_BUTTON_ONE_SX}
              onClick={() => navigate('/preadverseaction')}
            />
            <MuiButton
              children={ENGAGE_BUTTON_LABEL}
              variant="contained"
              startIcon={<IconComponent src={PLUS_LOGO} />}
              sx={PAGE_HEADER_BUTTON_TWO_SX}
              onClick={handelEngage}
            />
          </Stack>
        </Stack>
      )}
    </Box>
  )
}

export default PageHeader
