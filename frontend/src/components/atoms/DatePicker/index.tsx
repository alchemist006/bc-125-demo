import * as React from 'react'
import { Dayjs } from 'dayjs'
import Typography from '../Typography'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  LocalizationProvider,
  DesktopDatePicker,
  DateValidationError,
  PickerChangeHandlerContext
} from '@mui/x-date-pickers'
import styled from '@emotion/styled'
import theme from '../../../theme'

interface DatePickersPropsIntraface {
  readonly label: string
  readonly value?: Dayjs
  readonly onChange?: (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void
}

const StyledLabel = styled(Typography)`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${theme.palette.text.secondary};
  margin-bottom: 8px;
`

const StyledDatePicker = styled(DesktopDatePicker)`
&& {
  .MuiInputBase-root {
    height: 40px;
    width:358px
  }
  .MuiIconButton-root {
    color: ${theme.palette.primary[400]};
  }
}
`

export default function DatePicker({ label, value, onChange }: DatePickersPropsIntraface) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledLabel text={`${label}`} />
      <StyledDatePicker value={value} onChange={onChange} />
    </LocalizationProvider>
  )
}
