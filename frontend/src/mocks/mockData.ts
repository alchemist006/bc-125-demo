import { CandidateInformationInterface } from '../utils/interfaces'
import UserIcon from '../../public/assets/icons/user.svg'
import EmailIcon from '../../public/assets/icons/Email.svg'
import DobIcon from '../../public/assets/icons/Name.svg'
import PhoneIon from '../../public/assets/icons/Phone.svg'
import LocationIon from '../../public/assets/icons/Location.svg'
import SecurityIon from '../../public/assets/icons/Security.svg'
import CalendarIon from '../../public/assets/icons/Calendar.svg'
import Clock from '../../public/assets/icons/Clock.png'
import Adjucation from '../../public/assets/icons/hammer.png'
import Package from '../../public/assets/icons/pacakge.svg'
import Clear from '../../public/assets/icons/Clear.png'
import Created from '../../public/assets/icons/createdlogo.svg'
import BOX_LOGO from '../../public/assets/icons/Box.svg'
import CANDIDATE_LOGO from '../../public/assets/icons/Canditate.svg'
import HAMMER_LOGO from '../../public/assets/icons/hammer.svg'
import LOGS_LOGO from '../../public/assets/icons/Logs.svg'
import ANALYSIS_LOGO from '../../public/assets/icons/Analysis.svg'
import ACCOUNT_LOGO from '../../public/assets/icons/Account.svg'
import SCREENING_LOGO from '../../public/assets/icons/Screening.svg'

export const TableData = [
  {
    id: 1,
    name: 'John Smith',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Barrouallie',
    date: '2/22/2022'
  },
  {
    id: 2,
    name: 'Serene',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Vänersborg',
    date: '3/13/2022'
  },
  {
    id: 3,
    name: 'Walsh',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sukamanah',
    date: '7/2/2022'
  },
  {
    id: 4,
    name: 'Maurizia',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Sukamanah',
    date: '2/20/2022'
  },
  {
    id: 5,
    name: 'Kendre',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Beutong Ateuh',
    date: '5/19/2022'
  },
  {
    id: 6,
    name: 'Erastus',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Höviyn Am',
    date: '12/1/2022'
  },
  {
    id: 7,
    name: 'Jereme',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Taboão da Serra',
    date: '7/26/2022'
  },
  {
    id: 8,
    name: 'John Smith',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sharïngol',
    date: '5/28/2022'
  },
  {
    id: 9,
    name: 'Cari',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Lianyun',
    date: '5/23/2022'
  },
  {
    id: 10,
    name: 'Kimble',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Veselí nad Moravou',
    date: '8/24/2022'
  },
  {
    id: 11,
    name: 'Alice Johnson',
    adjudication: '-',
    status: 'PENDING',
    location: 'New York City',
    date: '9/15/2022'
  },
  {
    id: 12,
    name: 'Michael Brown',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Los Angeles',
    date: '10/5/2022'
  },
  {
    id: 13,
    name: 'Emily Davis',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Chicago',
    date: '11/12/2022'
  },
  {
    id: 14,
    name: 'William Wilson',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Houston',
    date: '8/30/2022'
  },
  {
    id: 15,
    name: 'Olivia White',
    adjudication: '-',
    status: 'PENDING',
    location: 'San Francisco',
    date: '9/8/2022'
  },
  {
    id: 16,
    name: 'James Lee',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Miami',
    date: '12/20/2022'
  },
  {
    id: 17,
    name: 'Sophia Martinez',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Dallas',
    date: '10/22/2022'
  },
  {
    id: 18,
    name: 'Benjamin Clark',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Seattle',
    date: '7/15/2022'
  },
  {
    id: 19,
    name: 'Ava Turner',
    adjudication: '-',
    status: 'PENDING',
    location: 'Philadelphia',
    date: '11/3/2022'
  },
  {
    id: 20,
    name: 'Liam Adams',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Boston',
    date: '6/18/2022'
  },
  {
    id: 21,
    name: 'Sophie Turner',
    adjudication: '-',
    status: 'PENDING',
    location: 'London',
    date: '9/25/2022'
  },
  {
    id: 22,
    name: 'Alexander Harris',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Toronto',
    date: '10/10/2022'
  },
  {
    id: 23,
    name: 'Ella Thompson',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Sydney',
    date: '11/8/2022'
  },
  {
    id: 24,
    name: 'Jacob Anderson',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Paris',
    date: '8/28/2022'
  },
  {
    id: 25,
    name: 'Charlotte Moore',
    adjudication: '-',
    status: 'PENDING',
    location: 'Berlin',
    date: '9/4/2022'
  },
  {
    id: 26,
    name: 'Liam Taylor',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Tokyo',
    date: '12/15/2022'
  },
  {
    id: 27,
    name: 'Ava Harris',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Rome',
    date: '10/18/2022'
  },
  {
    id: 28,
    name: 'Oliver Robinson',
    adjudication: '-',
    status: 'CLEAR',
    location: 'Mumbai',
    date: '7/10/2022'
  },
  {
    id: 29,
    name: 'Mia Walker',
    adjudication: '-',
    status: 'PENDING',
    location: 'Cairo',
    date: '11/8/2022'
  },
  {
    id: 30,
    name: 'Noah Carter',
    adjudication: '-',
    status: 'CONSIDER',
    location: 'Dubai',
    date: '6/25/2022'
  }
]

export const candidateTableHeaders = ['NAME', 'ADJUDICATION', 'STATUS', 'LOCATION', 'DATE']
export const adverseActionTableHeaders = [
  'NAME',
  'STATUS',
  'PRE NOTICE DATE',
  'POST NOTICE DATE',
  ''
]
export const courtSearchTableHeaders = ['SEARCH', 'STATUS', 'DATE', '', '']
export const adverseActionsTableData = [
  {
    id: '1',
    name: 'John Smith',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '02/22/2022',
    postNoticeDate: '02/22/2022'
  },
  {
    id: '2',
    name: 'Serene',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '03/13/2022',
    postNoticeDate: '03/13/2022'
  },
  {
    id: '3',
    name: 'Walsh',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '07/02/2022',
    postNoticeDate: '07/02/2022'
  },
  {
    id: '4',
    name: 'Maurizia',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '02/20/2022',
    postNoticeDate: '02/20/2022'
  },
  {
    id: '5',
    name: 'Kendre',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '05/19/2022',
    postNoticeDate: '05/19/2022'
  },
  {
    id: '6',
    name: 'Erastus',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '05/19/2022',
    postNoticeDate: '05/19/2022'
  },
  {
    id: '7',
    name: 'Jereme',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '07/26/2022',
    postNoticeDate: '07/26/2022'
  },
  {
    id: '8',
    name: 'John Smith',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '05/28/2022',
    postNoticeDate: '05/28/2022'
  },
  {
    id: '9',
    name: 'Cari',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '05/23/2022',
    postNoticeDate: '05/23/2022'
  },
  {
    id: '10',
    name: 'Kimble',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '08/24/2022',
    postNoticeDate: '08/24/2022'
  },
  {
    id: '11',
    name: 'Erastus',
    actionStatus: 'SCHEDULED',
    preNoticeDate: '05/19/2022',
    postNoticeDate: '05/19/2022'
  }
]

export const candidateFilerPopupStatus = [
  {
    label: 'All Status'
  },
  {
    label: 'Clear'
  },
  {
    label: 'Consider'
  }
]

export const candidateFilerPopupAdjudication = [
  {
    label: 'All'
  },
  {
    label: 'Engaged'
  },
  {
    label: 'Pre adverse action'
  }
]
export const Pre_Adverse_Notice_Data = [
  {
    id: 1,
    label: 'From',
    content: 'kyle@checkr.com'
  },
  {
    id: 2,
    label: 'To',
    content: 'john.smith@checkr.com'
  },
  {
    id: 3,
    label: 'Subject',
    content: 'Pre-adverse action notice - checkr-bpo'
  }
]

export const Pre_Adverse_Notice_Assault_Action_Data = [
  {
    label: 'Driving while license suspendedm'
  },
  {
    label: 'Assault Domestic Violence'
  },
  {
    label: 'Unable to verify employment history at Dunder Mifflin'
  }
]
export const courtSearchesData = [
  {
    id: 1,
    search: 'SSN Verification',
    status: 'CLEAR',
    date: '2/22/2022'
  },
  {
    id: 2,
    search: 'Sexual Offender',
    status: 'CLEAR',
    date: '3/13/2022'
  },
  {
    id: 3,
    search: 'Global Watchlist',
    status: 'CONSIDER',
    date: '7/2/2022'
  },
  {
    id: 4,
    search: 'Federal Criminal',
    status: 'CLEAR',
    date: '2/20/2022'
  },
  {
    id: 5,
    search: 'County Criminal',
    status: 'CLEAR',
    date: '5/19/2022'
  }
]

export const CandidateData: CandidateInformationInterface[] = [
  {
    id: 1,
    title: 'Name',
    subtitle: 'John Smith',
    iconSrc: UserIcon
  },
  {
    id: 2,
    title: 'Email',
    subtitle: 'John.smith@checkr.com',
    iconSrc: EmailIcon
  },
  {
    id: 3,
    title: 'DOB',
    subtitle: '1990-09-10 (26)',
    iconSrc: DobIcon
  },
  {
    id: 4,
    title: 'Phone',
    subtitle: '(555) 555-5555',
    iconSrc: PhoneIon
  },
  {
    id: 5,
    title: 'Zipcode',
    subtitle: '94158',
    iconSrc: LocationIon
  },
  {
    id: 6,
    title: 'Social Security',
    subtitle: 'XXX-XX-6789',
    iconSrc: SecurityIon
  },
  {
    id: 7,
    title: 'Drivers License',
    subtitle: 'FTEST1111 (CA)',
    iconSrc: DobIcon
  },
  {
    id: 8,
    title: 'Created At',
    subtitle: 'Nov 29, 2016 11:05:57 AM',
    iconSrc: CalendarIon
  }
]
export const ReportData: CandidateInformationInterface[] = [
  {
    id: 1,
    title: 'Status',
    subtitle: 'Clear',
    iconSrc: Clear
  },
  {
    id: 2,
    title: 'Adjudication',
    subtitle: '-',
    iconSrc: Adjucation
  },
  {
    id: 3,
    title: 'Package',
    subtitle: 'Employee Pro',
    iconSrc: Package
  },
  {
    id: 4,
    title: 'Created At',
    subtitle: 'Dec 1, 2016 12:00:00 PM',
    iconSrc: Created
  },
  {
    id: 5,
    title: 'Completed Date',
    subtitle: 'Dec 4, 2016 12:00:00 PM',
    iconSrc: CalendarIon
  },
  {
    id: 6,
    title: 'Turn Around Time',
    subtitle: '1 Day , 14 hours',
    iconSrc: Clock
  }
]
export const adverseActionFilterPopupStatus = [
  {
    label: 'All Status'
  },
  {
    label: 'Pending'
  },
  {
    label: 'Scheduled'
  },
  {
    label: 'Dispute'
  },
  {
    label: 'Canceled'
  },
  {
    label: 'Undeliverable'
  }
]
export const SideBarNavs = [
  {
    src: BOX_LOGO,
    label: 'Home'
  },
  {
    src: CANDIDATE_LOGO,
    label: 'Candidates'
  },
  {
    src: HAMMER_LOGO,
    label: 'Adverse Actions'
  },
  {
    src: LOGS_LOGO,
    label: 'Logs'
  },
  {
    src: ANALYSIS_LOGO,
    label: 'Analytics'
  },
  {
    src: ACCOUNT_LOGO,
    label: 'Account'
  },
  {
    src: SCREENING_LOGO,
    label: 'Screenings'
  }
]
export const PREVIEW_NOTICE_MODAL_ACTIONS = [
  {
    id: 1,
    label: 'Please carefully review the list of charges (in bold) and your contact information.'
  },
  {
    id: 2,
    label:
      'Please note that we will send the corresponding post adverse action email automatically after 7 days.'
  }
]
