import React, { useEffect, useState } from 'react'
import HomePageTemplate from '../../components/templates/HomePage'
import PageHeader from '../../components/organisms/PageHeader'
import SideBar from '../../components/organisms/SideBar'
import TableHeader from '../../components/organisms/TableHeader'
import theme from '../../theme'
import MuiAccordian from '../../components/organisms/Accordion'
import { courtSearchTableHeaders } from '../../mocks/mockData'
import CourtSearchTable from '../../components/organisms/CourtSearchTable'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'
import {
  CandidateInfo,
  CandidateInformationInterface,
  CourtSearchPropsInterface
} from '../../utils/interfaces'
import { getCandidateDetails, getCandidateInfo, getCourtSearchesData } from '../../services'
import { useLocation } from 'react-router-dom'
import { setCandidateInoformation, setCandidateReportInformation } from '../../utils/helper'

const FlexGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '24px'
})

const TableGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%'
})

const BodyContent = () => {
  const [courSearchesdata, setCourSearchesdata] = useState<CourtSearchPropsInterface[]>()
  const location = useLocation()
  const [candidateDatas, setCandidateDatas] = useState<CandidateInformationInterface[]>([])
  const [reportdatas, setReportdatas] = useState<CandidateInformationInterface[]>([])

  const c_id = location.pathname[location.pathname.length - 1]
  const candidateDataFake = {
    name: '',
    email: '',
    dob: '',
    phoneNo: '',
    zipcode: '',
    socialSecurity: '',
    driverLicense: '',
    createdAt: ''
  }

  const reportDataFake = {
    status: '',
    adjudication: '',
    pacakge: '',
    reportCreatedAt: '',
    turnAroundTime: '',
    reportCompletionDate: ''
  }
  const [candidatesInfo, setCandidatesInfo] = useState<CandidateInfo>({
    name: '',
    status: '',
    adjudication: ''
  })
  useEffect(() => {
    getCandidateInfo(c_id).then((data) => {
      setCandidatesInfo({ name: data.name, status: data.status, adjudication: data.adjudication })
    })
  }, [])
  useEffect(() => {
    getCandidateDetails(c_id).then((data) => {
      const {
        email,
        dob,
        phoneNumber: phoneNo,
        zipcode,
        socialSecurity,
        driverLicense,
        createdAt
      } = data || candidateDataFake
      const {
        packageType: pacakge,
        reportCreatedAt,
        turnaroundTime: turnAroundTime,
        reportCompletionDate
      } = data || reportDataFake
      setCandidateDatas(
        setCandidateInoformation(
          candidatesInfo.name,
          email,
          dob,
          phoneNo,
          zipcode,
          socialSecurity,
          driverLicense,
          createdAt
        )
      )
      setReportdatas(
        setCandidateReportInformation(
          candidatesInfo.status,
          candidatesInfo.adjudication,
          pacakge,
          reportCreatedAt,
          turnAroundTime,
          reportCompletionDate
        )
      )
    })
  }, [candidatesInfo])

  useEffect(() => {
    getCourtSearchesData().then((data) => setCourSearchesdata(data))
  }, [])
  return (
    <FlexGrid>
      <MuiAccordian title={'Candidate Information'} cardData={candidateDatas} />
      <MuiAccordian title={'Report Information'} cardData={reportdatas} />
      <TableGrid>
        <TableHeader
          isMoreIcon={false}
          width={'100%'}
          height={theme.spacing(15)}
          isCandidatePage={false}
          getSearchData={() => {}}
          getFilterData={() => {}}
          text={'Court Searches'}
        />
        <CourtSearchTable
          courtTableHeaders={courtSearchTableHeaders}
          TableData={courSearchesdata ?? []}
        />
      </TableGrid>
    </FlexGrid>
  )
}

const CandidateDetails = () => {
  const [name, setName] = useState<string>('')
  const location = useLocation()
  const c_id = location.pathname[location.pathname.length - 1]
  useEffect(() => {
    getCandidateInfo(c_id).then((data) => {
      const { name } = data || { name: '' }
      setName(name)
    })
  }, [])
  return (
    <HomePageTemplate
      header={<PageHeader type={'CANDIDATE_DETAILS'} name={name} />}
      content={<BodyContent />}
      sidebar={<SideBar onNavClick={() => {}} onLogoutClick={() => {}} />}
    />
  )
}

export default CandidateDetails
