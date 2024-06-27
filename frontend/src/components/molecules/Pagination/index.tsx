import React, { ChangeEvent, useState, useEffect } from 'react'
import { FormControl, MenuItem, Pagination, Select, SelectChangeEvent, Stack } from '@mui/material'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'
import styled from '@emotion/styled'

export interface PaginationPropsInterface {
  readonly count?: number
  readonly page?: number
  readonly label?: number | string
  readonly handleChange?: (event: SelectChangeEvent<string>, child: React.ReactNode) => void
  readonly handlePageChange?: (event: ChangeEvent<unknown>, page: number) => void
}
const StyledPagination = styled(Pagination)`
  .MuiPaginationItem-page.Mui-selected {
    color: blue;
  }
`

export default function PaginationMolecule({
  page,
  label,
  count,
  handleChange,
  handlePageChange
}: PaginationPropsInterface) {
  const [selectedValue, setSelectedValue] = useState<string | number>(10)

  const handleDropdownChange = (event: SelectChangeEvent<string>) => {
    const selected = event.target.value
    setSelectedValue(selected)
    handleChange?.(event, selected)
  }

  useEffect(() => {
    setSelectedValue(10)
  }, [label])

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={3}>
      <Stack direction="row" alignItems="center" gap="10px">
        <Typography
          color={`${theme.palette.textColor.mediumEmphasis}`}
          text={`${selectedValue} out of ${label} per page`}
        />

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={selectedValue as string}
            onChange={handleDropdownChange}
            displayEmpty
            data-testid="dropDown">
            {[10, 20, 30, 40].map((value) => (
              <MenuItem key={value} data-testid="dropDownOptions" value={String(value)}>
                {`${value} per page`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <StyledPagination count={count} page={page} onChange={handlePageChange} shape="rounded" />
    </Stack>
  )
}
