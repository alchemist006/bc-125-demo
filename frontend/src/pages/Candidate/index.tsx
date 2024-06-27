import React, { useEffect, useState } from 'react'
import HomePageTemplate from '../../components/templates/HomePage'
import TableHeader from '../../components/organisms/TableHeader'
import SideBar from '../../components/organisms/SideBar'
import CandidateTable from '../../components/organisms/CandidateTable'
import { TableData, candidateTableHeaders } from '../../mocks/mockData'
import PageHeader from '../../components/organisms/PageHeader'
import { CandidatePageStateInterface } from '../../utils/interfaces'
import theme from '../../theme'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { fetchData, getMatchesValue } from '../../utils/helper'
import { CANDIDATES, PRE_ADVERSE_ACTION_SUCCESS_LABEL } from '../../utils/constants'
import { useLocation } from 'react-router-dom'
import AdverseActionModal from '../../components/molecules/AdverseActionModal'

const TableBox = styled(Box)({})

const BodyContent = () => {
  const [tableState, setTableState] = useState<CandidatePageStateInterface>({
    tableData: [],
    searchValue: '',
    status: []
  })

  useEffect(() => {
    fetchData().then((data) => {
      setTableState({
        ...tableState,
        tableData: data
      })
    })
  }, [])

  const location = useLocation()

  useEffect(() => {
    if (location.state?.data?.dataUpdated) {
      fetchData().then((data) => {
        setTableState({
          ...tableState,
          tableData: data
        })
      })
    }
  }, [tableState.tableData])
  const filteredData = getMatchesValue(
    tableState.tableData,
    tableState.searchValue,
    tableState.status
  )

  const onSetStatus = (selectedStatus: string) => {
    if (tableState.status.includes(selectedStatus)) {
      const updatedStatus = tableState.status.filter((item) => item !== selectedStatus)
      setTableState({ ...tableState, status: updatedStatus })
    } else {
      setTableState({ ...tableState, status: [...tableState.status, selectedStatus] })
    }
  }

  const filterDataLength = filteredData.length

  return (
    <>
      <TableHeader
        width={'100%'}
        height={theme.spacing(15)}
        isCandidatePage={true}
        getSearchData={(searchData) => setTableState({ ...tableState, searchValue: searchData })}
        getFilterData={(statusData) => onSetStatus(statusData)}
        text={''}
      />
      <TableBox>
        <CandidateTable
          candidateTableHeaders={candidateTableHeaders}
          TableData={
            filterDataLength > 0 || tableState.searchValue.length > 0
              ? filteredData
              : tableState.tableData
          }
          width="84vw"
          // height="64vh"
        />
      </TableBox>
    </>
  )
}

const CandidatePage = () => {
  const [successModal, setSuccessModal] = useState(false)

  useEffect(() => {
    const hasModalBeenOpened = sessionStorage.getItem('hasModalBeenOpened')

    if (hasModalBeenOpened) {
      openSuccessModal()
      sessionStorage.removeItem('hasModalBeenOpened')
    }
  }, [])

  const openSuccessModal = () => {
    setSuccessModal(true)

    setTimeout(() => {
      setSuccessModal(false)
    }, 3000)
  }

  return (
    <>
      <HomePageTemplate
        header={<PageHeader type={CANDIDATES} />}
        content={<BodyContent />}
        sidebar={<SideBar />}
      />
      <AdverseActionModal isOpen={successModal} label={PRE_ADVERSE_ACTION_SUCCESS_LABEL} width={theme.spacing(137)}
        height={theme.spacing(100)}/>
    </>
  )
}

export default CandidatePage
