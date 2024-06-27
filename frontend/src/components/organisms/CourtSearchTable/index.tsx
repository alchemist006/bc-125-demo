import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Box,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";
import GenericTableRow from "../../molecules/TableRow";
import styled from "@emotion/styled";
import theme from "../../../theme";
import Typography from "../../atoms/Typography";
import { CourtSearchPropsInterface } from "../../../utils/interfaces";


interface CandidateTablePropsInterface {
  width?: string;
  height?: string;
  courtTableHeaders: string[];
  TableData: CourtSearchPropsInterface[];
  styles?: React.CSSProperties;
}

const MediumEmphasisText = styled(Typography)({
  color: theme.palette.textColor.mediumEmphasis,
});

const StyledTableCell = styled(TableCell)({
  height: theme.spacing(10.5),
  color: theme.palette.primary[500]
})
const TableHeadComponent = styled(TableHead)({
  backgroundColor: theme.palette.primary[100],
  borderTop: `1px ${theme.palette.structural.stroke} solid`,
  height: theme.spacing(10),
});
const CandidateTableHeader = (index: number,headingData:string) => {
    return (
        <StyledTableCell
            key={index}
            align={index === 2 ? "center" : "left"}
        >
        <MediumEmphasisText variant="caption1" text={headingData}/>
      </StyledTableCell>
    )
}

const CourtSearchTable = ({
  styles,
  width,
  height,
  courtTableHeaders,
  TableData,
}: CandidateTablePropsInterface) => {
    const StyledBox = styled(Box)({
        overflowX: "auto",
        border: `1px solid ${theme.palette.structural.stroke}`,
        borderBottom: 0,
        width:`${width ?? "100%"}`,
        height:`${height ?? "100%"}`,
        boxShadow:"none",
        ...styles,

    })
  return (
    <StyledBox>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" size="small">
            <TableHeadComponent>
              <TableRow>
                {courtTableHeaders.map((heading, index) => (
                  CandidateTableHeader(index,heading)
                ))}
              </TableRow>
            </TableHeadComponent>
            <TableBody>
              {TableData.map((row: CourtSearchPropsInterface) => (
                <GenericTableRow 
                  key={row.id}
                  id={row.id}
                  searchName={row.search}
                  status={row.status}
                  date={row.date}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </StyledBox>
  );
};

export default CourtSearchTable;