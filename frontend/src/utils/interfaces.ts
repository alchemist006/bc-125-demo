import { CardProps } from '@mui/material'

export interface TableDataPropsInterface {
  id: number
  name: string
  adjudication: string
  status: string
  location: string
  eventDate: string
}
export interface CourtSearchPropsInterface {
  id: number
  search: string
  status: string
  date: string
}
export interface AdverseActionInterface {
  id: string
  name: string
  actionStatus: string
  preNoticeDate: string
  postNoticeDate: string
}
export interface AdverseActionsTablePropsInterface {
  width?: string
  adverseActionTableData: AdverseActionInterface[]
}
export interface TableRowPropsInterface {
  id: number
  candidateName?: string
  adjudication?: string
  status?: string
  location?: string
  date?: string
  preNoticeDate?: string
  postNoticeDate?: string
  cellwidth?: string
  cellheight?: string
  cellstyles?: React.CSSProperties
  rowwidth?: string
  rowheight?: string
  rowstyles?: React.CSSProperties
  searchName?: string
}
export interface LogoutInterface {
  onClick?: () => void
}
export interface CandidateInformationInterface {
  id: number
  title: string
  subtitle: string
  iconSrc: string
}
export interface AccordianPropsInterface {
  title: string
  cardData: CandidateInformationInterface[]
}

export interface AdverseActionSentModalPropsInterface {
  isOpen: boolean
  label: string
  width?: string
  height?: string
}

export interface PreviewNoticeModalPropsInterface {
  isOpen: boolean
  onClose: () => void
  onSubmit?: () => void
  sx?: React.CSSProperties
}

export interface StyledTypographyPropsInterface {
  label: string
  content: string
}

export interface PreAdverseNoticeCardPropsInterface extends CardProps {
  onSubmit?: () => void
}
export interface LogoutInterface {
  onClick?: () => void
}
export interface CandidateInformationInterface {
  id: number
  title: string
  subtitle: string
  iconSrc: string
}
export interface AccordianPropsInterface {
  title: string
  cardData: CandidateInformationInterface[]
}

export interface TableHeaderInterface {
  width: string
  height: string
  isCandidatePage: boolean
  getSearchData: (searchValue: string) => void
  getFilterData: (status: string) => void
  text: string
  isMoreIcon?: boolean
}
export interface DashBoardTemplatePropsInterface {
  header: React.ReactElement
  content: React.ReactElement
  sidebar: React.ReactElement
}
export interface TableHeaderInterface {
  width: string
  height: string
  isCandidatePage: boolean
  getSearchData: (searchValue: string) => void
  getFilterData: (status: string) => void
}

export interface LogoutInterface {
  onClick?: () => void
}
export interface CandidateInformationInterface {
  id: number
  title: string
  subtitle: string
  iconSrc: string
}
export interface AccordianPropsInterface {
  title: string
  cardData: CandidateInformationInterface[]
}

export interface TableHeaderInterface {
  width: string
  height: string
  isCandidatePage: boolean
  getSearchData: (searchValue: string) => void
  getFilterData: (status: string) => void
}

export interface ReportModalPropsInterface {
  isOpen: boolean
  onClick: () => void
  style?: React.CSSProperties
}

export interface PageHeaderPropsInterface {
  type: 'CANDIDATES' | 'ADVERSE_ACTIONS' | 'CANDIDATE_DETAILS'
  name?: string
}
export interface LogoutInterface {
  onClick?: () => void
}
export interface CandidateInformationInterface {
  id: number
  title: string
  subtitle: string
  iconSrc: string
}
export interface AccordianPropsInterface {
  title: string
  cardData: CandidateInformationInterface[]
}

export interface TableHeaderInterface {
  width: string
  height: string
  isCandidatePage: boolean
  getSearchData: (searchValue: string) => void
  getFilterData: (status: string) => void
}

export interface CandidatePageStateInterface {
  tableData: TableDataPropsInterface[]
  searchValue: string
  status: string[]
}

export interface CandidateInfo {
  name: string
  status: string
  adjudication: string
}
