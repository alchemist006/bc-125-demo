import theme from '../theme'
import { TableDataPropsInterface } from './interfaces'
import { addUser, getCandidatesData, getUserByEmail } from '../services'
import {  emailValidator, passwordValidator } from './constants'
import { toast } from 'react-toastify'
import { ReactNode } from 'react'
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
import axios from 'axios'

interface FormValues {
  email: string
  password: string
  confirmPassword: string
}

interface SignInFormValues {
  email: string
  password: string
}

export const handleEmailChange = (
  value: string,
  setEmail: (arg0: string) => void,
  setDisableButton: (arg0: boolean) => void,
) => {
  setEmail(value)
  const isValidEmail = emailValidator(value)
  setDisableButton(!isValidEmail)
}

export const handlePasswordChange = (
  value: string,
  setPassword: (arg0: string) => void,
  setDisableButton: (arg0: boolean) => void,
) => {
  setPassword(value)
  const isValidPassword = passwordValidator(value)
  setDisableButton(!isValidPassword)
}

export const handleConfirmPasswordChange = (
  value: string,
  setConfirmPassword: (arg0: string) => void,
  setConfirmPasswordError: (arg0: string) => void,
  password: string
) => {
  setConfirmPassword(value)

  if (value !== password) {
    setConfirmPasswordError('Passwords do not match')
  } else {
    setConfirmPasswordError('')
  }
}

export const formatDate = (date: string) =>
  `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`

export const sendOtp = (
  setOTP: React.Dispatch<React.SetStateAction<string>>,
  setResend: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setOTP('')
  setResend(false)

  setTimeout(() => {
    setResend(true)
    const digits = '0123456789'
    const randomValues = new Uint32Array(4)
    crypto.getRandomValues(randomValues)
    let OTP = ''
    for (let i = 0; i < 4; i++) {
      OTP += digits[randomValues[i] % 10]
    }
    setOTP(OTP)
  }, 3000)
}

export const StyledTableHeader = (width: string, height: string) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
    height: height,
    background: theme.palette.structural.white,
    border: `0.0625rem solid ${theme.palette.structural.stroke}`,
    borderRadius: `${theme.spacing(2.5)} ${theme.spacing(2.5)} 0px 0px`,
    padding: `${theme.spacing(2.5)} ${theme.spacing(3)}`
  }
}

export const handleSignUp = async (
  formValues: FormValues,
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>,
  name: string = 'saiprabhu1'
) => {
  try {
    const userData = await getUserByEmail(formValues.email)

    const isUserExists = userData?.filter((data: any) => data.email === formValues.email)
    if (isUserExists.length > 0) {
      toast.error('User already exists with this email')
    } else {
      const res = await addUser(formValues.email, name, formValues.confirmPassword)
      toast.success('User added successfully. Please login')
    }
  } catch (error) {
    toast.error('Error creating user')
  } finally {
    setFormValues({
      ...formValues,
      email: '',
      password: '',
      confirmPassword: ''
    })
  }
}
const API_URL = process.env.API_URL;

export async function handleSignIn(
  formValues: SignInFormValues,
  navigate: (path: string) => void,
  setFormValues: React.Dispatch<React.SetStateAction<SignInFormValues>>,
  toast: (message: string) => void
) {
  try {
    const userData = await getUserByEmail(formValues.email)
    const isUserExists = userData?.filter((data: any) => data.email === formValues.email)

    if (isUserExists.length > 0) {
      const isLoggedIn = await axios.post(`${API_URL}/users/login`, {
        email: formValues.email,
        password: formValues.password
      })
      if (isLoggedIn.data) {
        localStorage.setItem('isLogin', 'true')
        navigate('/candidates')
        window.location.reload()
      } else {
        toast('Incorrect password or Email, please login with correct credentials')
      }
    } else {
      toast('User does not exist with this email')
    }
  } catch (error) {
    toast('Error creating user')
  } finally {
    setFormValues({
      email: '',
      password: ''
    })
  }
}

export const getMatchesValue = (
  data: TableDataPropsInterface[],
  searchValue: string,
  status: string[]
) => {
  return data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchValue.toLowerCase())

    const matchesStatus = status.some(
      (selectedStatus) => selectedStatus.toLowerCase() === item.status.toLowerCase()
    )
    if (status.length === 0) {
      return matchesSearch
    }
    return matchesSearch && matchesStatus
  })
}
export const fetchData = async () => {
  const data = await getCandidatesData()
  return data
}

export const comparator = (isUserLoggedIn: boolean, c1: ReactNode, c2: ReactNode) =>
  isUserLoggedIn ? c1 : c2
export const setCandidateInoformation = (
  name: string,
  email: string,
  dob: string,
  phone: string,
  zipcode: string,
  socialSecurity: string,
  driverLicense: string,
  createdAt: string
) => {
  return [
    {
      id: 1,
      title: 'Name',
      subtitle: name,
      iconSrc: UserIcon
    },
    {
      id: 2,
      title: 'Email',
      subtitle: email,
      iconSrc: EmailIcon
    },
    {
      id: 3,
      title: 'DOB',
      subtitle: dob,
      iconSrc: DobIcon
    },
    {
      id: 4,
      title: 'Phone',
      subtitle: phone,
      iconSrc: PhoneIon
    },
    {
      id: 5,
      title: 'Zipcode',
      subtitle: zipcode,
      iconSrc: LocationIon
    },
    {
      id: 6,
      title: 'Social Security',
      subtitle: socialSecurity,
      iconSrc: SecurityIon
    },
    {
      id: 7,
      title: 'Drivers License',
      subtitle: driverLicense,
      iconSrc: DobIcon
    },
    {
      id: 8,
      title: 'Created At',
      subtitle: createdAt,
      iconSrc: CalendarIon
    }
  ]
}
export const setCandidateReportInformation = (
  status: string,
  adjudication: string,
  pacakge: string,
  reportCreatedAt: string,
  turnAroundTime: string,
  reportCompletionDate: string
) => {
  return [
    {
      id: 1,
      title: 'Status',
      subtitle: status,
      iconSrc: Clear
    },
    {
      id: 2,
      title: 'Adjudication',
      subtitle: adjudication,
      iconSrc: Adjucation
    },
    {
      id: 3,
      title: 'Package',
      subtitle: pacakge,
      iconSrc: Package
    },
    {
      id: 4,
      title: 'Created At',
      subtitle: reportCreatedAt,
      iconSrc: Created
    },
    {
      id: 5,
      title: 'Completed Date',
      subtitle: reportCompletionDate,
      iconSrc: CalendarIon
    },
    {
      id: 6,
      title: 'Turn Around Time',
      subtitle: turnAroundTime,
      iconSrc: Clock
    }
  ]
}




