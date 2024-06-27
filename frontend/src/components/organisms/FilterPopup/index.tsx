import { Box, Card, CardProps, Divider, Stack } from '@mui/material'
import Typography from '../../atoms/Typography'
import {
  adverseActionFilterPopupStatus,
  candidateFilerPopupAdjudication,
  candidateFilerPopupStatus
} from '../../../mocks/mockData'
import MuiCheckBox from '../../atoms/CheckBox'
import theme from '../../../theme'
import React, { useState } from 'react'
import {
  FILTER_POPUP_ADJUDICATION,
  FILTER_POPUP_STATUS,
  FILTER_POPUP_TITLE
} from '../../../utils/constants'

interface FilterPopupPropsInterface extends CardProps {
  type: 'CANDIDATE_POPUP' | 'ADVERSE_ACTION_POPUP'
  onCheck: (value: string) => void
}

const FilterPopup = ({ type, onCheck, ...props }: FilterPopupPropsInterface) => {
  const [checkboxStates, setCheckboxStates] = useState(() =>
    candidateFilerPopupStatus.map(() => false)
  )

  const handleCheck = (index: number) => {
    const newCheckboxStates = [...checkboxStates]
    newCheckboxStates[index] = !newCheckboxStates[index]
    setCheckboxStates(newCheckboxStates)
    onCheck(candidateFilerPopupStatus[index].label)
  }
  return (
    <Card {...props}>
      <Typography
        text={FILTER_POPUP_TITLE}
        variant="body1"
        color={theme.palette.textColor.highEmphasis}
        p={4}
      />
      <Divider />
      <Typography
        text={FILTER_POPUP_STATUS}
        pl={4}
        pt={4}
        color={theme.palette.textColor.mediumEmphasis}
      />
      {type === 'ADVERSE_ACTION_POPUP' ? (
        <Stack p={4}>
          {adverseActionFilterPopupStatus.map((status, index) => {
            return (
              <MuiCheckBox
                key={status.label}
                label={status.label}
                checked={index === 0}
                sx={{
                  color: theme.palette.structural.stroke
                }}
              />
            )
          })}
        </Stack>
      ) : (
        <Box p={4}>
          <Stack>
            {candidateFilerPopupStatus.map((status, index) => {
              return (
                <MuiCheckBox
                  key={status.label}
                  label={status.label}
                  checked={checkboxStates[index]}
                  onCheck={() => handleCheck(index)}
                  sx={{
                    color: theme.palette.structural.stroke
                  }}
                />
              )
            })}
          </Stack>
          <Typography
            text={FILTER_POPUP_ADJUDICATION}
            color={theme.palette.textColor.mediumEmphasis}
            mt={5}
            mb={3}
          />
          <Stack>
            {candidateFilerPopupAdjudication.map((adjudication) => {
              return (
                <MuiCheckBox
                  key={adjudication.label}
                  label={adjudication.label}
                  checked={false}
                  sx={{
                    color: theme.palette.structural.stroke
                  }}
                />
              )
            })}
          </Stack>
        </Box>
      )}
    </Card>
  )
}

export default FilterPopup
