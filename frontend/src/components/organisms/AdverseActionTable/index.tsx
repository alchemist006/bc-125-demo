import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import theme from '../../../theme'
import Typography from '../../atoms/Typography'
import { adverseActionTableHeaders } from '../../../mocks/mockData'
import {
  AdverseActionInterface,
  AdverseActionsTablePropsInterface
} from '../../../utils/interfaces'
import {
  ADVERSE_ACTION_BORDER,
  ADVERSE_ACTION_BOX_SHADOW,
  STYLED_TABLE_CONTAINER
} from '../../../utils/constants'
import GenericTableRow from '../../molecules/TableRow'
import PaginationMolecule from '../../molecules/Pagination'

const StyledTableHeader = styled(TableHead)({
  backgroundColor: theme.palette.primary[100],
  height: theme.spacing(15),
  position: 'sticky',
  top: 0
})
const MediumEmphasisText = styled(Typography)({
  color: theme.palette.textColor.mediumEmphasis
})

const StyledTableCell = styled(TableCell)({
  height: theme.spacing(10.5)
})
const AdverseActionsTableHeader = (index: number, headingName: string) => {
  return (
    <StyledTableCell
      key={adverseActionTableHeaders.indexOf(headingName)}
      align={index === 2 || index === 3 ? 'right' : 'left'}>
      <MediumEmphasisText variant="caption1" text={headingName} />
    </StyledTableCell>
  )
}

const AdverseActionsTable = ({
  width,
  adverseActionTableData
}: AdverseActionsTablePropsInterface) => {
  const StyledTableBox = styled(Box)({
    width: width,
    height: '100%',
    boxShadow: ADVERSE_ACTION_BOX_SHADOW,
    border: ADVERSE_ACTION_BORDER,
    borderBottom: 0
  })
  return (
    <StyledTableBox>
      <TableContainer component={Paper} sx={STYLED_TABLE_CONTAINER}>
        <Table size="small">
          <StyledTableHeader>
            {adverseActionTableHeaders.map((headingName, index) =>
              AdverseActionsTableHeader(index, headingName)
            )}
          </StyledTableHeader>
          <TableBody>
            {adverseActionTableData.map((actionData: AdverseActionInterface) => (
              <GenericTableRow
                key={actionData.id}
                id={+actionData.id}
                candidateName={actionData.name}
                preNoticeDate={actionData.preNoticeDate}
                postNoticeDate={actionData.postNoticeDate}
                status={actionData.actionStatus}
              />
            ))}
          </TableBody>
        </Table>
        <PaginationMolecule count={3} label={'84'} />
      </TableContainer>
    </StyledTableBox>
  )
}

export default AdverseActionsTable
