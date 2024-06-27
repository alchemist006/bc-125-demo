import React, { useState } from 'react'
import { Divider, Stack } from '@mui/material'
import Dialog from '../../atoms/Dialog'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'
import DatePicker from '../../atoms/DatePicker'
import MuiButton from '../../atoms/Button'
import { Dayjs } from 'dayjs'
import {
  REPORT_MODAL_BUTTON_LABEL,
  REPORT_MODAL_BUTTON_SX,
  REPORT_MODAL_FROM_DATE,
  REPORT_MODAL_TITLE,
  REPORT_MODAL_TO_DATE
} from '../../../utils/constants'
import { ReportModalPropsInterface } from '../../../utils/interfaces'

const ReportModal = ({ isOpen, onClick, style }: ReportModalPropsInterface) => {

  const [dateRange] = useState<{
    fromDate: Dayjs | undefined
    toDate: Dayjs | undefined
  }>({
    fromDate: undefined,
    toDate: undefined
  })
  const [enableFirstDatePicker, setEnableFirstDatePicker] = useState<unknown>(null)
  const [enableSecondDatePicker, setEnableSecondDatePicker] = useState<unknown>(null)

  return (
    <Dialog
      style={style}
      open={isOpen}
      children={
        <Stack p={4}>
          <Typography text={REPORT_MODAL_TITLE} variant="subtitle1" mb={4} />
          <Divider />
          <Stack direction="row" mt={4} gap={6} mb={40}>
            <Stack>
              <Typography
                text={REPORT_MODAL_FROM_DATE}
                mb={2}
                color={theme.palette.textColor.mediumEmphasis}
              />
              <DatePicker
                label=""
                value={dateRange.fromDate}
                onChange={(value) => {
                  setEnableFirstDatePicker(value)
                }}
              />
            </Stack>
            <Stack>
              <Typography
                text={REPORT_MODAL_TO_DATE}
                mb={2}
                color={theme.palette.textColor.mediumEmphasis}
              />
              <DatePicker
                label=""
                value={dateRange.toDate}
                onChange={(value2) => {
                  setEnableSecondDatePicker(value2)
                }}
              />
            </Stack>
          </Stack>
          <Divider />
          <MuiButton
            children={REPORT_MODAL_BUTTON_LABEL}
            variant="contained"
            disabled={enableFirstDatePicker === null || enableSecondDatePicker === null}
            sx={REPORT_MODAL_BUTTON_SX}
            onClick={onClick}
          />
        </Stack>
      }
    />
  )
}

export default ReportModal
