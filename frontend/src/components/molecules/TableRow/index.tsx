import React from 'react'
import TableRow from '@mui/material/TableRow'
import styled from '@emotion/styled'
import theme from '../../../theme'
import { TableCell } from '@mui/material'
import Typography from '../../atoms/Typography'
import { formatDate } from '../../../utils/helper'
import MuiChip from '../../atoms/Chip'
import { SCHEDULED } from '../../../utils/constants'
import { TableRowPropsInterface } from '../../../utils/interfaces'
import { useNavigate } from 'react-router-dom'

enum AdjudicationStatus {
  UNSPECIFIED = 'UNSPECIFIED',
  ADVERSE_ACTION = 'ADVERSE_ACTION'
}

const StyledTableRow = styled(TableRow)<Omit<TableRowPropsInterface, 'id'>>(
  ({ rowwidth, rowheight, rowstyles }) => ({
    backgroundColor: theme.palette.structural.white,
    width: rowwidth ?? theme.spacing(264),
    height: rowheight ?? theme.spacing(12),
    ...rowstyles
  })
)

const StyledCell = styled(TableCell)<Omit<TableRowPropsInterface, 'id'>>(
  ({ cellwidth, cellheight, cellstyles }) => ({
    alignContent: 'start',
    width: cellwidth ?? theme.spacing(53.5),
    height: cellheight ?? theme.spacing(15),
    ...cellstyles
  })
)

const StyledName = styled(Typography)({
  color: theme.palette.primary[500],
  cursor: 'pointer'
})

const StyledAdjudication = styled(Typography)({
  color: theme.palette.textColor.lowEmphasis
})

const StyledTypography = styled(Typography)({
  color: theme.palette.textColor.highEmphasis,
  textAlign: 'right',
  marginRight: '41%'
})

const StyledAdverseTypography = styled(Typography)({
  color: theme.palette.textColor.highEmphasis,
  textAlign: 'right'
})
const StyledLocationTypography = styled(Typography)({
  color: theme.palette.textColor.highEmphasis,
  marginLeft: '41%'
})

const getAdjudicationComponent = (adjudication: string) => {
  if (adjudication === AdjudicationStatus.UNSPECIFIED) {
    return <StyledAdjudication variant="body2" text={'-'} />
  } else if (adjudication === AdjudicationStatus.ADVERSE_ACTION) {
    return <MuiChip label={'ADVERSE ACTION'} />
  } else {
    return <MuiChip label={adjudication} />
  }
}

const GenericTableRow = ({
  id,
  candidateName,
  adjudication,
  status,
  location,
  date,
  preNoticeDate,
  postNoticeDate,
  cellwidth,
  cellheight,
  cellstyles,
  rowheight,
  rowstyles,
  rowwidth,
  searchName
}: TableRowPropsInterface) => {
  const navigate = useNavigate()
  return (
    <StyledTableRow rowwidth={rowwidth} rowheight={rowheight} rowstyles={rowstyles} key={id}>
      {candidateName && (
        <StyledCell cellwidth={cellwidth} cellheight={cellheight} cellstyles={cellstyles}>
          <StyledName
            variant="body2"
            text={candidateName}
            onClick={() => {
              sessionStorage.setItem('candidateId', id + '')
              navigate(`/candidatedetails/${id}`, { state: { data: { candidateId: id } } })
            }}
          />
        </StyledCell>
      )}
      {searchName && (
        <StyledCell cellwidth={cellwidth} cellheight={cellheight} cellstyles={cellstyles}>
          <StyledName variant="body1" text={searchName} />
        </StyledCell>
      )}

      {adjudication && (
        <StyledCell cellwidth={cellwidth} cellheight={cellheight} cellstyles={cellstyles}>
          {getAdjudicationComponent(adjudication)}
        </StyledCell>
      )}

      <StyledCell cellwidth={cellwidth} cellheight={cellheight} cellstyles={cellstyles}>
        <MuiChip label={status ?? ''} />
      </StyledCell>
      {location && (
        <StyledCell cellwidth={cellwidth} cellheight={cellheight} cellstyles={cellstyles}>
          <StyledLocationTypography variant="body2" text={location} />
        </StyledCell>
      )}
      {date && (
        <StyledCell cellwidth={cellwidth} cellheight={cellheight} cellstyles={cellstyles}>
          <StyledTypography variant="body2" text={formatDate(date)} />
        </StyledCell>
      )}
      {preNoticeDate && (
        <StyledCell
          cellwidth={cellwidth}
          cellheight={cellheight}
          cellstyles={cellstyles}
          align="right">
          <StyledAdverseTypography variant="body2" text={formatDate(preNoticeDate)} />
        </StyledCell>
      )}
      {postNoticeDate && (
        <StyledCell
          cellwidth={cellwidth}
          cellheight={cellheight}
          cellstyles={cellstyles}
          align="right">
          <StyledAdverseTypography variant="body2" text={formatDate(postNoticeDate)} />
        </StyledCell>
      )}
      {status === SCHEDULED && (
        <StyledCell
          cellwidth={cellwidth}
          cellheight={cellheight}
          cellstyles={cellstyles}
          align="right"></StyledCell>
      )}
      {searchName && (
        <>
          <StyledCell
            cellwidth={cellwidth}
            cellheight={cellheight}
            cellstyles={cellstyles}
            align="right"></StyledCell>
          <StyledCell
            cellwidth={cellwidth}
            cellheight={cellheight}
            cellstyles={cellstyles}
            align="right"></StyledCell>
        </>
      )}
    </StyledTableRow>
  )
}

export default GenericTableRow
