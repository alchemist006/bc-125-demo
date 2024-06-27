import { Card, Divider, Stack, styled } from '@mui/material'
import React, { useState } from 'react'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'
import {
  Pre_Adverse_Notice_Assault_Action_Data,
  Pre_Adverse_Notice_Data
} from '../../../mocks/mockData'
import {
  PRE_ADVERSE_ACTION_CARD_ACTION_TITLE,
  PRE_ADVERSE_ACTION_CARD_CONTENT,
  PRE_ADVERSE_ACTION_CARD_USER_GREETS,
  PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER,
  PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_ONE,
  PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_TWO,
  PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_THREE,
  PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_FOUR,
  PRE_ADVERSE_ACTION_CARD_ACTION_DAYS_VALUE,
  PRE_ADVERSE_ACTION_CARD_BUTTON_LABEL
} from '../../../utils/constants'
import MuiCheckBox from '../../atoms/CheckBox'
import MuiButton from '../../atoms/Button'
import PreviewNoticeModal from '../../molecules/PreviewNoticeModal'
import {
  PreAdverseNoticeCardPropsInterface,
  StyledTypographyPropsInterface
} from '../../../utils/interfaces'
import { useNavigate } from 'react-router-dom'
import { updateCandidateData } from '../../../services'

const StyledButton = styled(MuiButton)`
  text-transform: none;

  &:disabled {
    background-color: ${theme.palette.primary[400]};
    color: ${theme.palette.structural.white}
`
const StyledCard = styled(Card)({
  borderRadius: '12px',
  background: theme.palette.structural.white,
  boxShadow: '0px 4px 28px 0px rgba(45, 45, 47, 0.10)'
})

const StyledTypography = ({ label, content }: StyledTypographyPropsInterface) => {
  return (
    <>
      <Stack direction="row" p={5}>
        <Typography
          variant="caption3"
          text={`${label}: `}
          color={theme.palette.textColor.highEmphasis}
        />
        <Typography
          variant="caption3"
          text={content}
          color={theme.palette.textColor.mediumEmphasis}
        />
      </Stack>
      <Divider />
    </>
  )
}

const PreAdverseNoticeCard = ({ ...props }: PreAdverseNoticeCardPropsInterface) => {
  const navigate = useNavigate()
  const [check, setCheck] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navigateToCandidatePage = () => {
    navigate('/candidates', { state: { data: { dataUpdated: true } } })
    const candidateId = sessionStorage.getItem('candidateId')
    sessionStorage.removeItem('candidateId')
    updateCandidateData(candidateId ? +candidateId : 0, 'ADVERSE_ACTION', 'CONSIDER')
    sessionStorage.setItem('hasModalBeenOpened', 'true')
  }
  return (
    <>
      <StyledCard {...props}>
        {Pre_Adverse_Notice_Data.map((data) => {
          return <StyledTypography key={data.label} label={data.label} content={data.content} />
        })}
        <Stack justifyContent="space-between" height="71.5vh">
          <Stack p={5}>
            <Typography
              text={PRE_ADVERSE_ACTION_CARD_USER_GREETS}
              variant="body2"
              color={theme.palette.textColor.mediumEmphasis}
              mb={2.5}
            />
            <Typography
              text={PRE_ADVERSE_ACTION_CARD_CONTENT}
              variant="body2"
              color={theme.palette.textColor.mediumEmphasis}
              width="40vw"
            />
            <Typography
              text={PRE_ADVERSE_ACTION_CARD_ACTION_TITLE}
              variant="caption3"
              color={theme.palette.textColor.highEmphasis}
              mt={6}
            />

            {Pre_Adverse_Notice_Assault_Action_Data.map((data, index) => {
              return (
                <MuiCheckBox
                  key={data.label}
                  checked={index === 1 ? check : false}
                  onCheck={index === 1 ? () => setCheck(!check) : undefined}
                  sx={{
                    color: theme.palette.structural.stroke
                  }}
                  label={
                    <Typography
                      text={data.label}
                      variant="caption2"
                      color={theme.palette.textColor.mediumEmphasis}
                    />
                  }
                />
              )
            })}

            <Typography
              text={PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER}
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
              mt={6}
              mb={5}
              width="40vw"
            />
            <Typography
              text={PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_ONE}
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
            />
            <Typography
              text={PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_TWO}
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
            />
          </Stack>
          <Stack>
            <Divider sx={{ mt: 12 }} />
            <Stack m={5} direction="row" justifyContent="space-between">
              <Stack direction="row" gap={3} alignItems="center">
                <Typography
                  text={PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_THREE}
                  color={theme.palette.textColor.mediumEmphasis}
                />
                <Typography
                  variant="body1"
                  text={PRE_ADVERSE_ACTION_CARD_ACTION_DAYS_VALUE}
                  border={`2px solid ${theme.palette.structural.stroke}`}
                  borderRadius={2}
                  py={2}
                  px={4}
                  color={theme.palette.textColor.highEmphasis}
                />
                <Typography
                  text={PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_FOUR}
                  variant="body2"
                  color={theme.palette.textColor.mediumEmphasis}
                />
              </Stack>
              <Stack>
                <StyledButton
                  children={PRE_ADVERSE_ACTION_CARD_BUTTON_LABEL}
                  variant="contained"
                  disabled={check === false}
                  onClick={() => setIsOpen(true)}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </StyledCard>

      <PreviewNoticeModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={navigateToCandidatePage}
      />
    </>
  )
}

export default PreAdverseNoticeCard
