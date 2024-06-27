import React from 'react'
import HomePageTemplate from '../../components/templates/HomePage'
import SideBar from '../../components/organisms/SideBar'
import PageHeader from '../../components/organisms/PageHeader'
import TableHeader from '../../components/organisms/TableHeader'
import { adverseActionsTableData } from '../../mocks/mockData'
import theme from '../../theme'
import { Box, Stack, styled } from '@mui/material'
import AdverseActionsTable from '../../components/organisms/AdverseActionTable'
import { CANDIDATE_INFORMATION } from '../../utils/constants'

const TableBox = styled(Box)({
  '@media (min-width: 1440px) and (min-height: 900px)': {
    height: '74vh'
  },
  '@media (min-width: 1920px) and (min-height: 1080px)': {
    height: '77.5vh'
  }
})

const BodyContent = () => {
  return (
    <Stack width="80vw" height="auto">
      <TableHeader
        width={'100%'}
        height={theme.spacing(20)}
        isCandidatePage={false}
        text={CANDIDATE_INFORMATION}
        getFilterData={() => {}}
        getSearchData={() => {}}
      />
      <TableBox>
        <AdverseActionsTable adverseActionTableData={adverseActionsTableData} width="100%" />
      </TableBox>
    </Stack>
  )
}

const AdverseActionPage = () => {
  return (
    <HomePageTemplate
      header={<PageHeader type={'ADVERSE_ACTIONS'} />}
      content={<BodyContent />}
      sidebar={<SideBar />}
    />
  )
}

export default AdverseActionPage
