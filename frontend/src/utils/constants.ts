import styled from '@emotion/styled'
import theme from '../theme'
import Typography from '../components/atoms/Typography'
const LIGHTGREENLABELSTYLE: React.CSSProperties = {
  color: theme.palette.accent.green,
  backgroundColor: theme.palette.accent.lightGreen
}
const LIGHTYELLOWNLABELSTYLE = {
  color: theme.palette.accent.yellow,
  backgroundColor: theme.palette.accent.lightYellow
}
const LIGHTBLUELABELSTYLE = {
  color: theme.palette.accent.blue,
  backgroundColor: theme.palette.accent.lightBlue
}
export const CHIPLABELSTYLES: Record<string, React.CSSProperties> = {
  CLEAR: LIGHTGREENLABELSTYLE,
  ENGAGE: LIGHTGREENLABELSTYLE,
  CONSIDER: LIGHTYELLOWNLABELSTYLE,
  'ADVERSE ACTION': LIGHTYELLOWNLABELSTYLE,
  SCHEDULED: LIGHTBLUELABELSTYLE
}
export const CHIPBORDERRADIUS = '4px'
export const JAMESRODRIGUEZ = 'James Rodriguez'
export const JAMESCO = 'James.co'
export const AVATARALT = 'Avatar Alt'
export const CIRCULAR = 'circular'

const LIGHT_GREEN_LABEL_STYLE: React.CSSProperties = {
  color: theme.palette.accent.green,
  backgroundColor: theme.palette.accent.lightGreen
}
const LIGHT_YELLOW_LABEL_STYLE = {
  color: theme.palette.accent.yellow,
  backgroundColor: theme.palette.accent.lightYellow
}
const LIGHT_BLUE_LABEL_STYLE = {
  color: theme.palette.accent.blue,
  backgroundColor: theme.palette.accent.lightBlue
}
export const CHIP_LABEL_STYLES: Record<string, React.CSSProperties> = {
  CLEAR: LIGHT_GREEN_LABEL_STYLE,
  ENGAGE: LIGHT_GREEN_LABEL_STYLE,
  CONSIDER: LIGHT_YELLOW_LABEL_STYLE,
  'ADVERSE ACTION': LIGHT_YELLOW_LABEL_STYLE,
  SCHEDULED: LIGHT_BLUE_LABEL_STYLE
}

export const ADVERSE_ACTION_BOX_SHADOW = '0px 0.25rem 1.75rem 0rem #2D2D2F1A'

export const CHIP_BORDER_RADIUS = '4px'
export const JAMES_RODRIGUEZ = 'James Rodriguez'
export const AVATAR_ALT_TEXT = 'Avatar Alt'

export const ADVERSE_ACTION_BORDER = `0.0625rem solid ${theme.palette.structural.stroke}`
export const STYLED_TABLE_CONTAINER = {
  overflow: 'auto',
  scrollbarWidth: 'thin',
  boxShadow: 'none',
  scrollbarColor: 'transparent transparent',
  '&::-webkit-scrollbar': {
    width: '6px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent'
  }
}
export const SCHEDULED = 'SCHEDULED'

export const OTP_PAGE_ENTER_OTP_TEXT = 'Please enter OTP'
export const OTP_PAGE_OTP_SENT_TEXT = 'OTP has been sent to your mail'
export const OTP_PAGE_CONTINUE_TEXT = 'Continue'
export const OTP_PAGE_RESEND_OTP_TEXT = 'Resend OTP'
export const OTP_PAGE_DIDNT_RECEIVE_TEXT = "Didn't receive the OTP?"

export const LOGOUT_MODAL_TITLE = 'Confirm Logout'
export const LOGOUT_MODAL_SUBTITLE = 'Are you sure you want to logout?'
export const LOGOUT_MODAL_CANCEL_BUTTON_LABEL = 'Cancel'
export const LOGOUT_MODAL_LOGOUT_BUTTON_LABEL = 'Logout'
export const LOGOUT_MODAL_CANCEL_BUTTON_CLASSNAME = 'cancel-button'

export const OTP_PAGE_GO_BACK_TEXT = 'Go Back'
export const SIGNUPPAGE_EMAIL = 'Email'
export const SIGNUPAGE_EMAIL_PLACEHOLDER = 'abc@gmail.com'
export const FORGOT_PASSWORD = 'Forgot Password?'
export const NO_ISSUES = 'No worries, we’ll send you reset instructions'
export const RESET_PASSWORD = 'Reset Password'

export const SignInConstants = {
  Signin: 'Sign In',
  Subtitle: 'Please enter your login credentials',
  Email: 'Email',
  EmailPlaceholder: 'abc@gmail.com',
  Password: 'Password',
  PasswordPlaceholder: '***********',
  Remember: 'Remember me',
  ForgotPassword: 'Forgot password?',
  Or: 'Or',
  SignInGoogle: 'Sign in with Google',
  SignInGithub: 'Sign in with GitHub',
  AccountInfo: "Don't have an account?",
  SignUp: 'Sign Up'
}
export const SIGNUPPAGE_HEADER = 'Sign up'
export const SIGNUPPAGE_INFO = 'Please sign up to start exploring the platform'
export const SIGNUPPAGE_PASSWORD = 'Password'
export const SIGNUPPAGE_CONFIRMPASSWORD = 'Confirm Password'
export const SIGNUPPAGE_ALREADYAMEMBER = 'Already a member?'
export const SIGNUPPAGE_AGREE = 'I agree to the'
export const SIGNUPPAGE_POLICY = 'Privacy Policy'
export const SIGNUP_PLACEHOLDER = '*************'
export const SIGN_IN = 'Sign in'

export function emailValidator(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|zemosolabs\.com)$/
  const isEmailValid = emailRegex.test(email)
  return isEmailValid
}

export function passwordValidator(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,15}$/
  const isPasswordValid = passwordRegex.test(password)
  return isPasswordValid
}

export function LoginValidation(email: string, password: string): boolean {
  const testEmail = emailValidator(email)
  const testPassword = passwordValidator(password)
  return testEmail && testPassword
}

export const ACCORDION_WIDTH = {
  width: '331px'
}
export const ACCORDION_ICON_WIDTH = '44px'
export const PRE_ADVERSE_ACTION_CARD_CONTENT =
  'You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.'
export const PRE_ADVERSE_ACTION_CARD_USER_GREETS = 'Dear John Smith,'
export const PRE_ADVERSE_ACTION_CARD_ACTION_TITLE = 'Select the charges for the pre adverse action'
export const PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER =
  'If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly.'

export const PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_ONE = 'Sincerely'
export const PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_TWO = 'Checkr-bpo |'
export const PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_THREE = 'Auto send post adverse action'
export const PRE_ADVERSE_ACTION_CARD_ACTION_DAYS_VALUE = '7'
export const PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_FOUR = 'Days'
export const PRE_ADVERSE_ACTION_CARD_BUTTON_LABEL = 'Preview Notice'

export const PREVIEW_NOTICE_MODAL_TITLE = 'Pre-Adverse Action Notice'
export const PREVIEW_NOTICE_MODAL_ATTACHMENTS = 'Attachments'
export const PREVIEW_NOTICE_MODAL_ATTACHMENTS_ONE = 'Summary of right under the FCRA'
export const PREVIEW_NOTICE_MODAL_ATTACHMENTS_TWO = 'Copy of background report'
export const PREVIEW_NOTICE_MODAL_BUTTON_LABEL = 'Submit Notice'
export const PREVIEW_NOTICE_MODAL_CHARGES = 'Assault Domestic Violence'

export const ADVERSE_ACTION_SENT_MODAL_TEXT = 'Pre-Advance Action notice successfully sent'

export const ACCORDION_DETAIL_SX = { borderTop: `1px solid ${theme.palette.structural.stroke}` }
export const FILTER_POPUP_TITLE = 'Filters'
export const FILTER_POPUP_STATUS = 'Status'
export const FILTER_POPUP_ADJUDICATION = 'Adjudication'

export const MODAL_BOX_SX = { width: '450px', height: '152px' }

export const PREVIEW_NOTICE_MODAL_STACK_SX = {
  bgcolor: `${theme.palette.accent.lightRed}`,
  borderRadius: 1,
  marginLeft: 4,
  marginRight: 20,
  width: '93%',
  pb: 1
}

export const PREVIEW_NOTICE_MODAL_ASSAULT_SX = {
  listStyleType: 'disc',
  p: 0,
  pl: 7,
  '& .MuiListItem-root': {
    display: 'list-item'
  },
  color: theme.palette.textColor.mediumEmphasis
}

export const PREVIEW_NOTICE_MODAL_LIST_SX = {
  listStyleType: 'disc',
  pt: 2,
  pl: 10,
  '& .MuiListItem-root': {
    display: 'list-item'
  },
  color: theme.palette.accent.red
}
export const PREVIEW_NOTICE_MODAL_DIVIDER_SX = { mb: 4 }
export const PREVIEW_NOTICE_MODAL_BUTTON_SX = {
  borderRadius: '6px',
  bgcolor: `${theme.palette.primary[500]}`,
  textTransform: 'none'
}
export const CANDIDATE_INFORMATION = 'Candidate Information'
export const MediumEmphasisText = styled(Typography)({
  color: theme.palette.textColor.highEmphasis
})
export const SEARCH_BAR_PLACEHOLDER = 'Search any candidate'
export const FILTER_TEXT = 'Filter'
export const CANDIDATE_POPUP = 'CANDIDATE_POPUP'
export const FILTER_POPUP_WIDTH_SX = {
  width: '285px'
}
export const ALL_STATUS = 'All Status'
export const PRE_ADVERSE_NOTICE_TITLE = 'Pre-Adverse Action Notice'
export const PAGE_HEADER_BUTTON_ONE_LABEL = 'Export'
export const PAGE_HEADER_BUTTON_TWO_LABEL = 'Manual order'

export const PAGE_HEADER_BUTTON_ONE_SX = {
  textTransform: 'none',
  color: `${theme.palette.textColor.mediumEmphasis}`,
  border: `2px solid ${theme.palette.structural.stroke}`,
  borderRadius: '6px',
  backgroundColor: 'white'
}
export const PAGE_HEADER_BUTTON_TWO_SX = { textTransform: 'none', borderRadius: '6px' }
export const PAGE_HEADER_CANDIDATES_TEXT = 'Candidates'
export const PAGE_HEADER_ADVERSE_ACTIONS_TEXT = 'Adverse Actions'

export const REPORT_MODAL_TITLE = 'Export Candidate Reports CSV'
export const REPORT_MODAL_FROM_DATE = 'Reports From'
export const REPORT_MODAL_TO_DATE = 'Reports To'
export const REPORT_MODAL_BUTTON_LABEL = 'Export Report'
export const REPORT_MODAL_BUTTON_SX = {
  display: 'flex',
  alignSelf: 'self-end',
  width: '146px',
  borderRadius: '6px',
  mt: 4,
  textTransform: 'none'
}
export const EXPORT_REPORT_LABEL = 'Download link was sucessfully sent to your email'
export const CANDIDATES = 'CANDIDATES'
export const PASSWORD_NOT_MATCH = 'Passwords do not match'


export const FORGOT_PASSWORD_PAGE_MODAL_LABEL = '"OTP has been sent to your email!"'

export const REDIRECT_URL = {
  redirect_uri: window.location.origin + "/candidates"
}

export const PRE_ADVERSE_ACTION_BUTTON_LABEL = 'Pre-Adverse-Action'
export const ENGAGE_BUTTON_LABEL = 'Engage'

export const PRE_ADVERSE_ACTION_SUCCESS_LABEL = 'Pre-Advance Action notice successfully sent'
export const DOMAIN: string = process.env.AUTH0_DOMAIN!
export const CLIENT_ID: string = process.env.AUTH0_CLIENT_ID!

export const HOME_URL = "/";
export const SIGNUP_URL = "/signup";
export const FORGOT_PASSWORD_URL = "/forgotpassword";
export const CANDIDATES_URL = "/candidates";
export const CANDIDATE_DETAILS_URL = "/candidatedetails/:id";
export const PRE_ADVERSE_ACTION_URL = "/preadverseaction";
export const ADVERSE_ACTIONS_URL = "/adverse-actions";