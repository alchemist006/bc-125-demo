import React from 'react'
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Box,
  TableHead,
  TableCell,
  TableRow
} from '@mui/material'
import GenericTableRow from '../../molecules/TableRow'
import styled from '@emotion/styled'
import theme from '../../../theme'
import Typography from '../../atoms/Typography'
import { TableDataPropsInterface } from '../../../utils/interfaces'
import PaginationMolecule from '../../molecules/Pagination'

interface CandidateTablePropsInterface {
  width?: string
  height?: string
  candidateTableHeaders: string[]
  TableData: TableDataPropsInterface[]
  styles?: React.CSSProperties
}

const StyledTableHead = styled(TableHead)({
  backgroundColor: theme.palette.primary[100],
  height: theme.spacing(15)
})

const MediumEmphasisText = styled(Typography)({
  color: theme.palette.textColor.mediumEmphasis
})

const StyledTableCell = styled(TableCell)({
  height: theme.spacing(10.5)
})

const CandidateTableHeader = (index: number, headingData: string) => {
  return (
    <StyledTableCell key={index} align={index === 3 || index === 4 ? 'center' : 'left'}>
      <MediumEmphasisText variant="caption1" text={headingData} />
    </StyledTableCell>
  )
}

const CandidateTable = ({
  styles,
  width,
  height,
  candidateTableHeaders,
  TableData
}: CandidateTablePropsInterface) => {
  const StyledBox = styled(Box)({
    overflowY: 'hidden',
    overflowX: 'hidden',
    ...styles,
    border: `1px solid ${theme.palette.structural.stroke}`,
    borderBottom: 0,
    width: `${width ?? '100%'}`,
    height: `${height ?? '100%'}`,
    boxShadow: 'none'
  })
  return (
    <StyledBox>
      <TableContainer component={Paper}>
        <Table size="small">
          <StyledTableHead>
            <TableRow>
              {candidateTableHeaders.map((headingData, index) =>
                CandidateTableHeader(index, headingData)
              )}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {TableData.map((rowData) => (
              <GenericTableRow
                key={rowData?.id}
                id={rowData?.id}
                candidateName={rowData?.name}
                adjudication={rowData?.adjudication}
                status={rowData?.status}
                location={rowData?.location}
                date={rowData?.eventDate}
                cellwidth={theme.spacing(45)}
              />
            ))}
          </TableBody>
        </Table>
        <PaginationMolecule count={3} label={'84'} />
      </TableContainer>
    </StyledBox>
  )
}

export default CandidateTable
