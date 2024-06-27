import React, { ChangeEvent, useState } from 'react'
import { TableHeaderInterface } from '../../../utils/interfaces'
import { Box, Grid, InputAdornment, TextField } from '@mui/material'
import styled from '@emotion/styled'
import theme from '../../../theme'
import {
  CANDIDATE_INFORMATION,
  CANDIDATE_POPUP,
  FILTER_POPUP_WIDTH_SX,
  FILTER_TEXT,
  MediumEmphasisText,
  SEARCH_BAR_PLACEHOLDER
} from '../../../utils/constants'
import IconComponent from '../../atoms/icon'
import Search from '../../../../public/assets/icons/Search.svg'
import FilterPopup from '../FilterPopup'
import Filter from '../../../../public/assets/icons/Filter.svg'
import More from '../../../../public/assets/icons/More.svg'
import MuiButton from '../../atoms/Button'
import { StyledTableHeader } from '../../../utils/helper'

const RightBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: theme.spacing(110),
  height: theme.spacing(9),
  gap: '1rem'
})

const SearchField = styled(TextField)`
  & label.Mui-focused {
    border-color: ${theme.palette.structural.stroke};
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${theme.palette.structural.stroke} !important;
    }

    &.Mui-focused fieldset {
      border-color: ${theme.palette.structural.stroke} !important;
      border: 0.0625rem solid;
    }

    &:hover fieldset {
      border-color: ${theme.palette.structural.stroke} !important;
    }
  }
`
const IconBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: theme.spacing(9),
  border: `0.0625rem solid ${theme.palette.structural.stroke}`,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  gap: theme.spacing(1)
})

const StyledMuiButton = styled(MuiButton)({
  height: '2.375rem',
  border: `1px solid ${theme.palette.structural.stroke}`,
  background: theme.palette.structural.white,
  color: theme.palette.textColor.mediumEmphasis,
  textTransform: 'capitalize',
  ':hover': {
    border: `1px solid ${theme.palette.structural.stroke}`,
    background: theme.palette.structural.white,
    color: theme.palette.textColor.mediumEmphasis,
  }
})
const FilterPopupBox = styled(Box)({
  marginTop: '32%',
  right: '0.9375rem',
  position: 'absolute'
})

const TableHeader = ({ isMoreIcon = true, ...props }: TableHeaderInterface) => {
  const [state, setState] = useState({
    searchValue: '',
    isFilterOpen: false
  })

  const StyledGridTableHeader = StyledTableHeader(props.width, props.height)

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, searchValue: e.target.value })
    props.getSearchData(e.target.value)
  }

  const handleFilterButtonClick = () => {
    setState({ ...state, isFilterOpen: !state.isFilterOpen })
  }

  const handleStatusFilterChange = (status: string) => {
    props.getFilterData(status)
  }

  return (
    <Grid sx={StyledGridTableHeader}>
      <MediumEmphasisText
        text={props.isCandidatePage ? CANDIDATE_INFORMATION : props.text}
        variant="subtitle1"
      />
      <RightBox>
        {isMoreIcon && (
          <>
            <SearchField
              value={state.searchValue}
              placeholder={SEARCH_BAR_PLACEHOLDER}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconComponent src={Search} />
                  </InputAdornment>
                )
              }}
              size="small"
              onChange={handleSearchInputChange}
            />

            <StyledMuiButton
              children={FILTER_TEXT}
              variant="outlined"
              startIcon={<IconComponent src={Filter} />}
              onClick={handleFilterButtonClick}
            />
            {props.isCandidatePage && (
              <IconBox>
                <IconComponent src={More} width="2.25rem" />
              </IconBox>
            )}
          </>
        )}
      </RightBox>
      {state.isFilterOpen && (
        <FilterPopupBox>
          <FilterPopup
            sx={FILTER_POPUP_WIDTH_SX}
            type={props.isCandidatePage ? CANDIDATE_POPUP : 'ADVERSE_ACTION_POPUP'}
            onCheck={(status) => handleStatusFilterChange(status)}
          />
        </FilterPopupBox>
      )}
    </Grid>
  )
}

export default TableHeader
